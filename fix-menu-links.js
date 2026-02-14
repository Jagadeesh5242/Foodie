const fs = require('fs');
const path = require('path');

const templateDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');
const files = fs.readdirSync(templateDir).filter(f => f.endsWith('.html'));

console.log(`📂 Processing ${files.length} files...\n`);

let updated = 0;
let alreadyHas = 0;
let errors = 0;

files.forEach((file, idx) => {
  try {
    const filepath = path.join(templateDir, file);
    let content = fs.readFileSync(filepath, 'utf8');

    // Skip menu.html itself
    if (file === 'menu.html') {
      alreadyHas++;
      return;
    }

    // Check if menu link already exists
    if (content.includes('/menu"') || (content.includes('Menu') && file !== 'menu.html')) {
      alreadyHas++;
      return;
    }

    // The menu link HTML to insert
    const menuLinkHTML = `<a class="nav-link" href="/menu" style="color: white; margin-right: 15px;">
                            <i class="fas fa-book"></i> Menu
                        </a>`;

    let updated_content = content;

    // Try multiple patterns to inject the menu link

    // Pattern 1: After navbar-brand
    if (content.includes('<a class="navbar-brand"') && !content.includes('/menu')) {
      updated_content = content.replace(
        /(<a class="navbar-brand"[^>]*>[\s\S]*?<\/a>)/,
        `$1\n            ${menuLinkHTML}`
      );
    }
    
    // Pattern 2: Before language selector
    if (updated_content === content && content.includes('<select') && content.includes('lang-selector')) {
      updated_content = content.replace(
        /(<select[^>]*id="lang-selector")/,
        `${menuLinkHTML}
                <select`
      );
    }

    // Pattern 3: Inside navbar before closing
    if (updated_content === content && content.includes('</nav>')) {
      updated_content = content.replace(
        '</nav>',
        `            ${menuLinkHTML}
        </nav>`
      );
    }

    // Pattern 4: In collapse section
    if (updated_content === content && content.includes('navbar-collapse')) {
      updated_content = content.replace(
        /(<div class="collapse navbar-collapse"[^>]*>)/,
        `$1
                ${menuLinkHTML}`
      );
    }

    // Only write if content changed
    if (updated_content !== content) {
      fs.writeFileSync(filepath, updated_content);
      updated++;
      if (updated % 50 === 0) {
        console.log(`✅ ${updated} files updated...`);
      }
    } else {
      // If no pattern matched, log the file
      console.log(`⚠️  Could not find insertion point in: ${file}`);
      errors++;
    }

  } catch (err) {
    errors++;
    console.error(`❌ Error processing ${file}: ${err.message}`);
  }
});

console.log(`\n══════════════════════════════════════════════════════════════════`);
console.log(`✅ MENU LINK IMPLEMENTATION COMPLETE`);
console.log(`══════════════════════════════════════════════════════════════════\n`);
console.log(`📊 Summary:`);
console.log(`   Total files processed: ${files.length}`);
console.log(`   Successfully updated: ${updated}`);
console.log(`   Already have menu link: ${alreadyHas}`);
console.log(`   Errors/Skipped: ${errors}\n`);

const successRate = ((updated + alreadyHas) / files.length * 100).toFixed(1);
console.log(`✨ Implementation Coverage: ${successRate}%\n`);

if (updated + alreadyHas === files.length) {
  console.log(`🎉 ALL RECIPE PAGES NOW HAVE MENU LINKS!\n`);
} else {
  console.log(`⚠️  Some files may need manual review\n`);
}
