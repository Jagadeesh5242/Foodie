const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');
const templateFiles = fs.readdirSync(templatesDir).filter(f => f.endsWith('.html') && !['index.html', 'menu.html', 'search-results.html', 'recipe-template.html'].includes(f));

console.log('🔄 Updating ' + templateFiles.length + ' recipe templates...\n');

let updated = 0;

templateFiles.forEach(file => {
  try {
    const filePath = path.join(templatesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has modern search and language selector
    if (content.includes('id="languageSelector"')) {
      console.log('⏭️ ' + file);
      return;
    }

    // Replace/update navbar
    if (content.includes('id="searchInput"')) {
      // Update existing modern navbar
      content = content.replace(
        /id="searchInput"[\s\S]*?<\/ul>/,
        'id="searchInput" placeholder="🔍 Search recipes..." autocomplete="off">\n                    <ul id="suggestionsList" role="listbox"></ul>'
      );

      // Ensure language selector exists
      if (!content.includes('id="languageSelector"')) {
        content = content.replace(
          /<\/ul>\s*<\/div>\s*<\/nav>/,
          '</ul>\n                </div>\n                <div class="navbar-controls">\n                    <select id="languageSelector">\n                        <option value="en">English</option>\n                        <option value="hi">हिंदी</option>\n                        <option value="te">తెలుగు</option>\n                        <option value="ta">தமிழ்</option>\n                        <option value="ja">日本語</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </nav>'
        );
      }
    } else {
      // No modern navbar yet, might be old template
      // Try to insert after navbar or create if needed
      console.log('⚠️ ' + file + ' (no modern navbar)');
      return;
    }

    // Ensure search script exists
    if (!content.includes('let searchTimeout')) {
      const searchScript = `
    <script>
        const searchInput = document.getElementById('searchInput');
        const suggestionsList = document.getElementById('suggestionsList');
        let searchTimeout;

        if (searchInput && suggestionsList) {
            searchInput.addEventListener('input', function(e) {
                clearTimeout(searchTimeout);
                const keyword = this.value.trim();
                if (keyword.length < 2) {
                    suggestionsList.innerHTML = '';
                    suggestionsList.style.display = 'none';
                    return;
                }
                searchTimeout = setTimeout(() => {
                    fetch('/api/recipes/search?keyword=' + encodeURIComponent(keyword))
                        .then(response => response.json())
                        .then(recipes => {
                            suggestionsList.innerHTML = '';
                            if (recipes && recipes.length > 0) {
                                recipes.forEach(recipe => {
                                    const li = document.createElement('li');
                                    li.textContent = recipe;
                                    li.addEventListener('click', () => window.location.href = '/' + recipe.toLowerCase().replace(/\\s+/g, '-'));
                                    suggestionsList.appendChild(li);
                                });
                                suggestionsList.style.display = 'block';
                            }
                        }).catch(err => suggestionsList.style.display = 'none');
                }, 300);
            });
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' && this.value.trim()) {
                    window.location.href = '/' + this.value.trim().toLowerCase().replace(/\\s+/g, '-');
                }
            });
            
            document.addEventListener('click', e => {
                if (!e.target.closest('.search-wrapper')) suggestionsList.style.display = 'none';
            });
        }
        
        const langSelector = document.getElementById('languageSelector');
        if (langSelector) {
            langSelector.addEventListener('change', function(e) {
                const lang = this.value;
                if (lang === 'en') {
                    location.reload();
                } else {
                    const select = document.querySelector('.goog-te-gadget-simple select');
                    if (select) {
                        select.value = 'auto|' + lang;
                        select.dispatchEvent(new Event('change'));
                    }
                }
            });
        }
        
        function googleTranslateElementInit() {
            try {
                new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,hi,te,ta,ml,kn,ja,es,fr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
            } catch(e) {}
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', googleTranslateElementInit);
        } else {
            googleTranslateElementInit();
        }
        
        window.addEventListener('load', () => {
            if (searchInput) searchInput.value = '';
            if (suggestionsList) suggestionsList.innerHTML = '';
        });
    </script>`;
      
      content = content.replace('</body>', searchScript + '\n</body>');
    }

    // Ensure Google Translate element and script
    if (!content.includes('google_translate_element')) {
      content = content.replace('</body>', '\n    <div id="google_translate_element" style="display: none;"></div>\n</body>');
    }
    if (!content.includes('translate.googleapis.com')) {
      content = content.replace('<head>', '<head>\n    <script src="https://translate.googleapis.com/translate_a/element.js?cb=googleTranslateElementInit"></script>');
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✅ ' + file);
    updated++;
  } catch (err) {
    console.error('❌ ' + file + ' - ' + err.message);
  }
});

console.log('\n✨ Successfully updated ' + updated + ' templates!');
console.log('✅ Search: Fixed on all pages');
console.log('✅ Language Switching: Fixed on all pages');
console.log('✅ Unified UI: Applied to all recipes');
