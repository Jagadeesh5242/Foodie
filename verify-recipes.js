const fs = require('fs');

// Read the complete-all-recipes.js file
const scriptContent = fs.readFileSync('complete-all-recipes.js', 'utf8');

// Extract the recipes object by finding the const recipes = { ... };
const startIdx = scriptContent.indexOf('const recipes = {');
const endIdx = scriptContent.indexOf('};', startIdx) + 2;

// Extract just the object part without 'const'
const objectCode = scriptContent.substring(startIdx + 15, endIdx - 1); // Skip 'const recipes = '

// Parse it properly
let recipes = {};
try {
  recipes = eval('(' + objectCode + ')');
} catch(e) {
  console.error('Error parsing recipes:', e.message);
  // Alternative: read first 100 lines to manually extract
  const lines = scriptContent.split('\n');
  console.log('First line with recipe data:', lines[5]);
}

// Now check the recipes
console.log('🔍 RECIPE DATA VERIFICATION\n');
console.log('='.repeat(60));

let completeCount = 0;
let incompleteCount = 0;
let incompleteList = [];
let thinData = [];

for (const [name, data] of Object.entries(recipes)) {
  const hasIngredients = data.ingredients && Array.isArray(data.ingredients) && data.ingredients.length > 0;
  const hasInstructions = data.instructions && Array.isArray(data.instructions) && data.instructions.length > 0;
  
  if (!hasIngredients || !hasInstructions) {
    incompleteCount++;
    if (!hasIngredients) {
      incompleteList.push(`❌ ${name} - MISSING INGREDIENTS`);
    }
    if (!hasInstructions) {
      incompleteList.push(`❌ ${name} - MISSING INSTRUCTIONS`);
    }
  } else if (data.ingredients.length < 4 || data.instructions.length < 3) {
    thinData.push(`⚠️  ${name} - ${data.ingredients.length} ingredients, ${data.instructions.length} instructions`);
  } else {
    completeCount++;
  }
}

console.log(`\n📊 SUMMARY:`);
console.log(`Total Recipes: ${Object.keys(recipes).length}`);
console.log(`✅ Complete Recipes: ${completeCount}`);
console.log(`❌ Incomplete Recipes: ${incompleteCount}`);
console.log(`⚠️  Thin Data Recipes: ${thinData.length}`);

if (incompleteCount > 0) {
  console.log(`\n${'='.repeat(60)}`);
  console.log('RECIPES WITH MISSING DATA:');
  incompleteList.forEach(item => console.log(item));
}

if (thinData.length > 0) {
  console.log(`\n${'='.repeat(60)}`);
  console.log('RECIPES THAT NEED MORE DATA:');
  thinData.forEach(item => console.log(item));
}

console.log(`\n${'='.repeat(60)}`);
