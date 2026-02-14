const fs = require('fs');
const path = require('path');

const templateDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');

let updated = 0;
let errors = 0;

const files = fs.readdirSync(templateDir).filter(
  f => f.endsWith('.html') && 
       f !== 'menu.html' && 
       f !== 'index.html' &&
       f !== 'aloo-fry.html' &&
       f !== 'ENHANCED_TEMPLATE.html'
);

files.forEach((file) => {
  try {
    const filepath = path.join(templateDir, file);
    let content = fs.readFileSync(filepath, 'utf8');

    // Remove Menu and Browse navigation items, keep only Home, Favorites, Language
    const oldPattern = /<li class="nav-item"><a class="nav-link" href="\/menu"><i class="fas fa-list"><\/i> Menu<\/a><\/li>\s*<li class="nav-item"><a class="nav-link" href="\/menu"><i class="fas fa-utensils"><\/i> Browse<\/a><\/li>\s*<li class="nav-item"><a class="nav-link" href="\/#"><i class="fas fa-heart"><\/i> Favorites<\/a><\/li>/;
    
    const newPattern = `<li class="nav-item"><a class="nav-link" href="/#"><i class="fas fa-heart"></i> Favorites</a></li>`;

    if (oldPattern.test(content)) {
      content = content.replace(oldPattern, newPattern);
      fs.writeFileSync(filepath, content);
      updated++;
      
      if (updated % 50 === 0) {
        console.log(`✅ ${updated} files updated...`);
      }
    }
  } catch (error) {
    errors++;
    console.error(`❌ Error processing ${file}: ${error.message}`);
  }
});

console.log(`\n══════════════════════════════════════════════════════════════`);
console.log(`✨ NAVBAR CLEANUP COMPLETE!`);
console.log(`══════════════════════════════════════════════════════════════`);
console.log(`\n📊 Summary:`);
console.log(`   ✅ Updated: ${updated} recipe pages`);
console.log(`   ❌ Errors: ${errors} files`);
console.log(`\n✨ Changes Made:`);
console.log(`   ✓ Removed Menu link from navbar`);
console.log(`   ✓ Removed Browse link from navbar`);
console.log(`   ✓ Kept Home, Favorites, and Language Selector`);
console.log(`\n🎉 All recipe navbars cleaned up!\n`);
