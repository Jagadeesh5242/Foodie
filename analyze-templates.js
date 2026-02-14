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

// Convert recipe names to expected filenames
const expectedFiles = new Set();
RECIPES.forEach(recipe => {
    const filename = recipe.toLowerCase().replace(/\s+/g, '-') + '.html';
    expectedFiles.add(filename);
});

const templateDir = 'src/main/resources/templates';
const files = fs.readdirSync(templateDir).filter(f => f.endsWith('.html'));

console.log(`Total HTML files: ${files.length}\n`);

// Categorize files
const lonFilesOK = [];
const shortNames = [];
const mediumNames = [];
const veryLongNames = [];
const mismatchedNames = [];

files.forEach(file => {
    if (file === 'index.html' || file === 'menu.html' || file === 'search-results.html') {
        return;
    }

    const len = file.length;
    const expectedName = expectedFiles.has(file);

    if (len <= 30) {
        shortNames.push(file);
    } else if (len <= 60) {
        mediumNames.push(file);
    } else if (len <= 100) {
        veryLongNames.push(file);
    } else {
        veryLongNames.push(file);
    }

    if (!expectedName) {
        mismatchedNames.push({ name: file, len });
    }
});

console.log(`Short names (≤30 chars): ${shortNames.length}`);
console.log(`Medium names (31-60 chars): ${mediumNames.length}`);
console.log(`Long names (>60 chars): ${veryLongNames.length}`);
console.log(`\nTotal expected recipe files: ${expectedFiles.size}`);
console.log(`Files in templates directory: ${files.length}`);
console.log(`Mismatched files: ${mismatchedNames.length}`);

// Identify files that need renaming/deletion
console.log('\n=== PROBLEMATIC FILES (>60 chars) ===\n');
const problematicFiles = veryLongNames.sort((a, b) => b.length - a.length);
problematicFiles.slice(0, 20).forEach(f => {
    console.log(`${f.length} chars: ${f.substring(0, 80)}`);
});

// Save analysis
const analysis = {
    total: files.length,
    shortNames: shortNames.length,
    mediumNames: mediumNames.length,
    longNames: veryLongNames.length,
    mismatchedCount: mismatchedNames.length,
    expectedRecipes: expectedFiles.size,
    problematicFiles: problematicFiles
};

fs.writeFileSync('file-analysis.json', JSON.stringify(analysis, null, 2));
console.log('\nAnalysis saved to file-analysis.json');
