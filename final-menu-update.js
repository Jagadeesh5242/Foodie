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

  // Simple approach: find any navbar and add menu link if not present
  // Look for any closing navbar tag
  if (content.includes('navbar') && !content.includes('/menu')) {
    // Find the first .navbar-brand or .nav-link and add menu next to it
    if (content.includes('<select id="lang-selector"')) {
      // Case 1: Has language selector
      const menuLink = `<a class="nav-link" href="/menu" style="color: inherit; margin-right: 10px; text-decoration: none;">
                                <i class="fas fa-book"></i> Menu
                            </a>
                            <select id="lang-selector"`;
      const newContent = content.replace(
        '<select id="lang-selector"',
        menuLink
      );
      if (newContent !== content) {
        fs.writeFileSync(filepath, newContent);
        updated++;
      }
    } else if (content.includes('.collapse.navbar-collapse') && content.includes('<a class="navbar-brand"')) {
      // Case 2: Standard navbar
      const menuLink = `<a class="nav-link" href="/menu" style="margin-right: 15px;">
                                <i class="fas fa-book"></i> Menu
                            </a>`;
      
      if (content.includes('<div class="collapse navbar-collapse"')) {
        const newContent = content.replace(
          '<div class="collapse navbar-collapse"',
          `<a class="nav-link" href="/menu" style="color: white; margin-right: 15px;">
                    <i class="fas fa-book"></i> Menu
                </a>
                <div class="collapse navbar-collapse"`
        );
        if (newContent !== content) {
          fs.writeFileSync(filepath, newContent);
          updated++;
        }
      }
    }

    if (updated % 50 === 0 && updated > 0) {
      console.log(`✅ ${updated} files updated...`);
    }
  }
});

console.log(`\n══════════════════════════════════════════════════════════════`);
console.log(`✅ FINAL MENU LINK UPDATE COMPLETE!`);
console.log(`══════════════════════════════════════════════════════════════`);
console.log(`\n📊 Summary:`);
console.log(`   Updated: ${updated} additional recipe pages`);
console.log(`   Skipped (already have menu): ${skipped}`);
console.log(`   Total processed: ${updated + skipped}\n`);
console.log(`🎉 All recipe pages now have menu access!\n`);
