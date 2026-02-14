const fs = require('fs');
const path = require('path');

const templateDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');

// New enhanced navbar structure
const newNavbarContent = `            <div class="collapse navbar-collapse" id="navbarContent">
                <div class="autocomplete-container mx-auto">
                    <input type="text" id="searchInput" name="keyword" placeholder="Search recipes...">
                    <ul id="suggestionsList"></ul>
                </div>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="/"><i class="fas fa-home"></i> Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/menu"><i class="fas fa-list"></i> Menu</a></li>
                    <li class="nav-item"><a class="nav-link" href="/menu"><i class="fas fa-utensils"></i> Browse</a></li>
                    <li class="nav-item"><a class="nav-link" href="/#"><i class="fas fa-heart"></i> Favorites</a></li>
                    <li class="nav-item">
                        <select class="lang-selector" id="languageSelector">
                            <option value="en">English</option>
                            <option value="ja">日本語 (Japanese)</option>
                            <option value="hi">हिंदी (Hindi)</option>
                            <option value="te">తెలుగు (Telugu)</option>
                        </select>
                    </li>
                </ul>
            </div>`;

const files = fs.readdirSync(templateDir).filter(
  f => f.endsWith('.html') && 
       f !== 'menu.html' && 
       f !== 'index.html' &&
       f !== 'aloo-fry.html' &&
       f !== 'ENHANCED_TEMPLATE.html' &&
       f !== 'fixed-script.js' &&
       f !== 'recipe-list.txt'
);

let updated = 0;
let skipped = 0;
let errors = 0;

files.forEach((file, idx) => {
  try {
    const filepath = path.join(templateDir, file);
    let content = fs.readFileSync(filepath, 'utf8');

    // Find and replace the navbar-collapse section
    const navbarCollapsePattern = /<div class="collapse navbar-collapse" id="navbarContent">[\s\S]*?<\/div>\s*<\/div>/;
    
    if (navbarCollapsePattern.test(content)) {
      content = content.replace(navbarCollapsePattern, newNavbarContent + '\n        </div>');
      fs.writeFileSync(filepath, content);
      updated++;
      
      if (updated % 50 === 0) {
        console.log(`✅ ${updated} files updated...`);
      }
    } else {
      skipped++;
    }
  } catch (error) {
    errors++;
    console.error(`❌ Error processing ${file}: ${error.message}`);
  }
});

console.log(`\n══════════════════════════════════════════════════════════════`);
console.log(`✨ NAVBAR ENHANCED WITH MENU AND MORE ITEMS!`);
console.log(`══════════════════════════════════════════════════════════════`);
console.log(`\n📊 Summary:`);
console.log(`   ✅ Updated: ${updated} recipe pages`);
console.log(`   ⏭️  Skipped: ${skipped} templates`);
console.log(`   ❌ Errors: ${errors} files`);
console.log(`   📁 Total processed: ${updated + skipped + errors}`);
console.log(`\n✨ New Navbar Features:`);
console.log(`   ✓ Home - Back to homepage`);
console.log(`   ✓ Menu - View all recipes`);
console.log(`   ✓ Browse - Browse recipe collection`);
console.log(`   ✓ Favorites - Save favorite recipes`);
console.log(`   ✓ Language Selector - Multi-language support`);
console.log(`   ✓ Search Box - Find recipes quickly\n`);
console.log(`🎉 All recipe pages now have enhanced navigation!\n`);
