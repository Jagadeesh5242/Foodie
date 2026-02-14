#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'src/main/resources/templates');

// Get all HTML files
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.html'));

// Files that exceed Windows 260 char limit need to be removed
const problematicFiles = [];
const validFiles = [];

files.forEach(file => {
  const fullPath = path.join(templatesDir, file);
  if (fullPath.length > 260) {
    problematicFiles.push(file);
  } else {
    validFiles.push(file);
  }
});

console.log(`\n📊 FILENAME LENGTH ANALYSIS`);
console.log(`============================`);
console.log(`Total HTML files: ${files.length}`);
console.log(`Valid files (< 260 chars): ${validFiles.length}`);
console.log(`Problematic files (≥ 260 chars): ${problematicFiles.length}`);

if (problematicFiles.length > 0) {
  console.log(`\n🗑️  REMOVING PROBLEMATIC FILES...`);
  let removed = 0;
  problematicFiles.forEach(file => {
    const fullPath = path.join(templatesDir, file);
    try {
      fs.unlinkSync(fullPath);
      removed++;
      console.log(`  ✓ Deleted: ${file} (${fullPath.length} chars)`);
    } catch (error) {
      console.error(`  ✗ Failed: ${file} - ${error.message}`);
    }
  });
  console.log(`\n✅ Cleanup complete! Removed ${removed} files`);
}

// Also remove recipe variant files that have long descriptors
const variantPatterns = [
  '-with-coconut-with-bell-peppers',
  '-with-paneer-with-cashew',
  '-with-yogurt-gravy-with-spinach',
  '-coastal-',
  '-east-indian-',
  '-north-indian-',
  '-south-indian-',
  '-west-indian-'
];

console.log(`\n🧹 CHECKING FOR VARIANT PATTERNS...`);
let variantFiles = [];
validFiles.forEach(file => {
  const hasPattern = variantPatterns.some(pattern => file.includes(pattern));
  if (hasPattern && file !== 'recipe-template.html' && !file.includes('master') && !file.includes('base')) {
    variantFiles.push(file);
  }
});

console.log(`Found ${variantFiles.length} variant recipe files`);

if (variantFiles.length > 100) {
  console.log(`\n⚠️  WARNING: Found ${variantFiles.length} variant files. These should be removed.`);
  console.log(`Would you like to keep only the base recipes? (Variants: coastal, east-indian, north-indian, south-indian, west-indian, with-ingredients)`);
  console.log(`\n✅ Suggestion: Review and manually delete variant files via file explorer`);
  console.log(`   Or run: del src\\main\\resources\\templates\\*-coastal-*.html`);
}

// Summary
console.log(`\n📋 SUMMARY OF MAIN RECIPES (Base Files Only)`);
console.log(`==========================================`);
const baseRecipes = validFiles
  .filter(f => f.endsWith('.html'))
  .filter(f => !f.includes('-coastal-') && !f.includes('-east-indian-') && 
               !f.includes('-north-indian-') && !f.includes('-south-indian-') && 
               !f.includes('-west-indian-') && !f.includes('-with-') &&
               !f.includes('recipe-') && !f.includes('master') && !f.includes('base'))
  .map(f => f.replace('.html', ''))
  .sort();

console.log(`Base recipes found: ${baseRecipes.length}`);
baseRecipes.forEach((recipe, index) => {
  console.log(`  ${index + 1}. ${recipe}`);
});
