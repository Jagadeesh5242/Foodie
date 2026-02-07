#!/usr/bin/env node

/**
 * Generate complete RECIPES list for homecontroller.java
 * This script reads all HTML files and generates Java code with all recipe names
 */

const fs = require('fs');
const path = require('path');

const templatesDir = 'src/main/resources/templates';

// Skip these files
const skipFiles = new Set([
  'index.html',
  'search-results.html',
  'ENHANCED_TEMPLATE.html',
  'recipe-master.html',
  'recipe-master-template.html',
  'recipe-enhanced.html',
  'recipe-template.html',
  'recipe-template-base.html',
  'fixed-script.js'
]);

// Get all recipe files
const recipeFiles = fs.readdirSync(templatesDir)
  .filter(file => file.endsWith('.html') && !skipFiles.has(file))
  .sort();

console.log(`Found ${recipeFiles.length} recipe files\n`);

// Convert filename to recipe name
function fileToRecipeName(filename) {
  return filename
    .replace('.html', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Group recipes by first letter for better organization
const recipes = recipeFiles.map(f => fileToRecipeName(f));

console.log('Generated recipe list:\n');
console.log('private static final List<String> RECIPES = Arrays.asList(');

recipes.forEach((recipe, index) => {
  const isLast = index === recipes.length - 1;
  const comma = isLast ? '' : ',';
  console.log(`        "${recipe}"${comma}`);
});

console.log(');');

console.log(`\n✅ Total recipes: ${recipes.length}`);
console.log('\nCopy the above code into homecontroller.java');
console.log('Replace the existing RECIPES list with this new complete list.\n');

// Also save to file for easier copying
const javaCode = [
  'private static final List<String> RECIPES = Arrays.asList(',
  ...recipes.map((r, i) => `        "${r}"${i === recipes.length - 1 ? '' : ','}`),
  ');'
].join('\n');

fs.writeFileSync('RECIPES_LIST.java', javaCode);
console.log('Saved complete code to: RECIPES_LIST.java');
