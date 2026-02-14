#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const RECIPES = [
    "Aloo Fry", "Aloo Gobi", "Aloo Tikki", "Andhra Chicken Fry", "Appam",
    "Authentic Kebab", "Avial", "Baati", "Bagara Rice", "Barfi",
    "Bendakaya Fry", "Bendakaya", "Bhakri", "Bhelpuri", "Bhujia",
    "Bihari Litti", "Biryani Dum Pukht", "Biryani Lucknowi", "Biryani Rice", "Biryani",
    "Bonda", "Bottle Gourd Fry", "Brinjal Fry", "Burdwan Chicken", "Burfi",
    "Butter Chicken", "Butter Naan", "Calcutta Biryani", "Cauliflower Masala", "Chakli",
    "Chana Masala", "Cheese Dosa", "Chettinad Chicken", "Chicken 65", "Chicken Biryani",
    "Chicken Curry", "Chicken Do Pyaza", "Chicken Tikka Masala", "Chikhalwali Chips", "Chikhalwali",
    "Chole Bhature", "Chotey Gosht", "Coconut Curry", "Coconut Rice", "Dal Makhani",
    "Dal Tadka", "Dhokla", "Dosa", "Dum Biryani", "Dum Pukht Chicken",
    "Egg Biryani", "Filter Coffee", "Fir Ni", "Fish Biryani", "Fish Curry",
    "Fish Jhol", "France Biryani", "Gajar Ka Halwa", "Galauti Kebab", "Garlic Naan",
    "Goan Vindaloo", "Gongura Chicken", "Gongura", "Green Curry", "Gujhia",
    "Gulab Jamun", "Haleem", "Halwa", "Hyderabadi Biryani", "Hyderabadi Haleem",
    "Idli", "Inippu", "Jalebi", "Kachumber Salad", "Kadhi",
    "Kalakand", "Kashmir Pulao", "Kebab", "Kerala Fish Curry", "Kesari",
    "Kheer", "Khichdi", "Konkan Fish Ampyal"
];

// Create mapping of recipe names to expected filenames
const recipeToFile = new Map();
RECIPES.forEach(recipe => {
    const filename = recipe.toLowerCase().replace(/\s+/g, '-') + '.html';
    recipeToFile.set(recipe.toLowerCase(), filename);
});

const templateDir = 'src/main/resources/templates';
const allFiles = fs.readdirSync(templateDir).filter(f => f.endsWith('.html'));

// Separate files by type
const filesToKeep = new Set();
const filesToDelete = [];
const missingRecipes = [];

// Build set of files to keep (those matching recipe names)
RECIPES.forEach(recipe => {
    const filename = recipe.toLowerCase().replace(/\s+/g, '-') + '.html';
    const fullPath = path.join(templateDir, filename);
    if (fs.existsSync(fullPath)) {
        filesToKeep.add(filename);
    } else {
        missingRecipes.push(recipe);
    }
});

// Identify files to delete (everything else, except standard pages)
allFiles.forEach(file => {
    if (file === 'index.html' || file === 'menu.html' || file === 'search-results.html') {
        return; // Keep these
    }
    
    if (!filesToKeep.has(file)) {
        filesToDelete.push(file);
    }
});

console.log('=== FILE CONSOLIDATION ANALYSIS ===\n');
console.log(`Total recipes in list: ${RECIPES.length}`);
console.log(`Recipe files that exist: ${filesToKeep.size}`);
console.log(`Missing recipe files: ${missingRecipes.length}`);
console.log(`Extra/variant files to delete: ${filesToDelete.length}`);
console.log(`Standard pages to keep: index.html, menu.html, search-results.html`);

if (missingRecipes.length > 0) {
    console.log('\n=== RECIPES WITH MISSING FILES ===');
    missingRecipes.forEach(recipe => {
        console.log(`  - ${recipe}`);
    });
}

console.log('\n=== FILES TO DELETE ===');
console.log(`Total: ${filesToDelete.length}`);
console.log('Sample files (first 10):');
filesToDelete.sort((a, b) => b.length - a.length).slice(0, 10).forEach(f => {
    console.log(`  ${f.length} chars: ${f}`);
});

// Save the consolidation plan
const plan = {
    timestamp: new Date().toISOString(),
    recipesTotal: RECIPES.length,
    filesWithRecipes: filesToKeep.size,
    missingRecipeFiles: missingRecipes,
    filesToDelete: filesToDelete,
    filesToKeep: Array.from(filesToKeep).sort()
};

fs.writeFileSync('consolidation-plan.json', JSON.stringify(plan, null, 2));
console.log('\nConsolidation plan saved to: consolidation-plan.json');

// Also save the next steps
const instructions = `
Next steps to apply the consolidation:

1. Backup the templates directory first:
   copy src/main/resources/templates src/main/resources/templates.backup

2. Run the cleanup script:
   node cleanup-templates.js

3. Verify routes in the controller are all defined

4. Test the application:
   mvn clean package

This will delete ${filesToDelete.length} extra/variant files and keep only the ${filesToKeep.size} recipe files.
`;

fs.writeFileSync('CONSOLIDATION_INSTRUCTIONS.txt', instructions);
console.log('\nInstructions saved to: CONSOLIDATION_INSTRUCTIONS.txt');
