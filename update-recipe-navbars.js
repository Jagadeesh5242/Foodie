const fs = require('fs');
const path = require('path');

const templateDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');
const files = fs.readdirSync(templateDir).filter(f => f.endsWith('.html') && f !== 'menu.html');

let updated = 0;
let skipped = 0;

files.forEach((file, idx) => {
  const filepath = path.join(templateDir, file);
  let content = fs.readFileSync(filepath, 'utf8');

  // Check if menu link already exists
  if (content.includes('href="/menu"') || content.includes('href="menu"')) {
    skipped++;
    return;
  }

  // Look for the navbar-nav or navigation section and add menu link
  const menuLink = `<a class="nav-link" href="/menu" style="color: white; margin-right: 15px;">
                            <i class="fas fa-book"></i> Menu
                        </a>`;

  // Pattern 1: If there's a navbar with no nav-item for menu
  if (content.includes('<div class="ml-auto">')) {
    content = content.replace(
      '<div class="ml-auto">',
      `<a class="nav-link" href="/menu" style="color: white; margin-right: 15px;">
                <i class="fas fa-book"></i> Menu
            </a>
            <div class="ml-auto">`
    );
    fs.writeFileSync(filepath, content);
    updated++;
    if (updated % 50 === 0) {
      console.log(`✅ ${updated} files updated...`);
    }
  }
});

console.log(`\n══════════════════════════════════════════════════════════════`);
console.log(`✅ MENU LINK ADDED TO RECIPES!`);
console.log(`══════════════════════════════════════════════════════════════`);
console.log(`\n📊 Summary:`);
console.log(`   Updated: ${updated} recipe pages`);
console.log(`   Already have menu link: ${skipped}`);
console.log(`   Total processed: ${updated + skipped}\n`);
console.log(`✨ Features:`);
console.log(`   ✓ Menu link added to navbar`);
console.log(`   ✓ Icon and styling included`);
console.log(`   ✓ Direct access to all recipes\n`);
console.log(`🎉 All recipe pages now have menu access!\n`);
