#!/usr/bin/env node

/**
 * Update all recipe HTML files with the new translation system
 */

const fs = require('fs');
const path = require('path');

const templatesDir = 'src/main/resources/templates';

// Files to skip
const skipFiles = [
  'index.html',
  'ENHANCED_TEMPLATE.html',
  'recipe-master.html',
  'recipe-master-template.html',
  'recipe-enhanced.html',
  'recipe-template.html',
  'recipe-template-base.html',
  'search-results.html'
];

// Get all HTML files
const htmlFiles = fs.readdirSync(templatesDir)
  .filter(file => file.endsWith('.html') && !skipFiles.includes(file))
  .map(file => path.join(templatesDir, file));

console.log(`Found ${htmlFiles.length} HTML files to update\n`);

let updated = 0;
let skipped = 0;
let errors = 0;

htmlFiles.forEach((filePath, index) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);

    // Skip if already updated
    if (content.includes('src="/js/translation.js"')) {
      console.log(`⊘ ${fileName} - Already updated`);
      skipped++;
      return;
    }

    // Find the old script pattern and replace it
    const oldScriptPattern = /(<script src="https:\/\/code\.jquery\.com.*?<\/script>\s*<script src="https:\/\/stackpath\.bootstrapcdn\.com.*?<\/script>\s*)<script>\s*const searchInput = document\.getElementById\('searchInput'\);\s*const suggestionsList = document\.getElementById\('suggestionsList'\);\s*const languageSelector = document\.getElementById\('languageSelector'\);/s;

    const newScriptStart = `$1<script src="/js/translation.js"></script>
    <script>
        const searchInput = document.getElementById('searchInput');
        const suggestionsList = document.getElementById('suggestionsList');`;

    if (oldScriptPattern.test(content)) {
      content = content.replace(oldScriptPattern, newScriptStart);

      // Remove old language selector code
      content = content.replace(
        /\s*if \(languageSelector\)\s*\{[^}]*const langMap = \{[^}]*\};[^}]*const combo = document\.querySelector\('\.goog-te-combo'\);[^}]*\}[^}]*\}/s,
        ''
      );

      // Remove old Google Translate initialization
      content = content.replace(
        /\s*function initTranslate\(\)\s*\{[^}]*new google\.translate\.TranslateElement\(\{[^}]*\},[^}]*'google_translate_element'\);[^}]*\}[^}]*\}[^}]*if \(window\.google[^}]*\}\s*else\s*\{[^}]*setTimeout\(initTranslate,[^}]*\}[^}]*/s,
        ''
      );

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ ${fileName} - Updated`);
      updated++;
    } else {
      console.log(`⊘ ${fileName} - Skipped (different structure)`);
      skipped++;
    }
  } catch (error) {
    console.error(`✗ ${path.basename(filePath)} - Error:`, error.message);
    errors++;
  }
});

console.log(`\nSummary:`);
console.log(`  Updated: ${updated}`);
console.log(`  Skipped: ${skipped}`);
console.log(`  Errors:  ${errors}`);
console.log(`\nAll recipe pages should now support Hindi and Telugu translation!`);
