#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// This script deletes the problematic variant files
// Load the consolidation plan
const plan = JSON.parse(fs.readFileSync('consolidation-plan.json', 'utf8'));

const templateDir = 'src/main/resources/templates';
let deletedCount = 0;
let errorCount = 0;

console.log('=== STARTING FILE CLEANUP ===\n');
console.log(`Files to delete: ${plan.filesToDelete.length}`);

// Delete each file
plan.filesToDelete.forEach(filename => {
    const filepath = path.join(templateDir, filename);
    try {
        if (fs.existsSync(filepath)) {
            fs.unlinkSync(filepath);
            deletedCount++;
            if (deletedCount <= 10 || deletedCount % 50 === 0) {
                console.log(`✓ Deleted: ${filename.substring(0, 60)}`);
            }
        }
    } catch (err) {
        console.error(`✗ Error deleting ${filename}: ${err.message}`);
        errorCount++;
    }
});

console.log(`\n=== CLEANUP COMPLETE ===`);
console.log(`Successfully deleted: ${deletedCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Files remaining: ${plan.filesToKeep.length + 3}`);
console.log(`(+3 for index.html, menu.html, search-results.html)`);

// Verify deletion
const remaining = fs.readdirSync(templateDir).filter(f => f.endsWith('.html'));
console.log(`\nVerification - actual HTML files remaining: ${remaining.length}`);

if (deletedCount === plan.filesToDelete.length) {
    console.log('\n✓ All variant files successfully deleted!');
    console.log('\nNext step: Verify routes in the controller are all defined');
} else {
    console.log('\n⚠ Some deletions may have failed. Please review the errors above.');
}
