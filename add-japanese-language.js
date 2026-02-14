const fs = require('fs');
const path = require('path');

const templatesDir = './src/main/resources/templates';

// Read all HTML files
const files = fs.readdirSync(templatesDir).filter(file => file.endsWith('.html'));

let updatedCount = 0;
let skippedCount = 0;
let errorCount = 0;

files.forEach(file => {
    const filePath = path.join(templatesDir, file);
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let hasChanges = false;

        // Check if language selector exists and needs updating
        if (!content.includes('languageSelector')) {
            skippedCount++;
            return;
        }

        // Check if Japanese option already exists
        if (content.includes('value="ja"')) {
            skippedCount++;
            return;
        }

        // Pattern to find the language selector with existing options
        const selectorPattern = /<select\s+class="lang-selector"\s+id="languageSelector">\s*<option\s+value="en">English<\/option>\s*<option\s+value="te">Telugu<\/option>\s*<option\s+value="hi">Hindi<\/option>\s*<\/select>/;
        
        // New selector with Japanese option
        const newSelector = `<select class="lang-selector" id="languageSelector">
                            <option value="en">English</option>
                            <option value="ja">日本語 (Japanese)</option>
                            <option value="hi">हिंदी (Hindi)</option>
                            <option value="te">తెలుగు (Telugu)</option>
                        </select>`;

        if (selectorPattern.test(content)) {
            content = content.replace(selectorPattern, newSelector);
            hasChanges = true;
        } else {
            // Alternative pattern - more flexible matching
            const altPattern = /<select\s+class="lang-selector"\s+id="languageSelector">[\s\S]*?<\/select>/;
            const match = content.match(altPattern);
            
            if (match) {
                const oldSelect = match[0];
                
                // Check if Japanese is already there
                if (oldSelect.includes('value="ja"')) {
                    skippedCount++;
                    return;
                }

                // Replace the selector
                const newSelect = `<select class="lang-selector" id="languageSelector">
                            <option value="en">English</option>
                            <option value="ja">日本語 (Japanese)</option>
                            <option value="hi">हिंदी (Hindi)</option>
                            <option value="te">తెలుగు (Telugu)</option>
                        </select>`;
                
                content = content.replace(altPattern, newSelect);
                hasChanges = true;
            }
        }

        if (hasChanges) {
            fs.writeFileSync(filePath, content, 'utf8');
            updatedCount++;
            console.log(`✓ Added Japanese to ${file}`);
        } else {
            skippedCount++;
        }
    } catch (error) {
        errorCount++;
        console.error(`✗ Error processing ${file}:`, error.message);
    }
});

console.log(`\n✅ Japanese Language Addition Complete!`);
console.log(`   Updated: ${updatedCount} files`);
console.log(`   Skipped: ${skippedCount} files`);
console.log(`   Errors: ${errorCount} files`);
console.log(`\n📝 Changes Made:`);
console.log(`   - Added Japanese (日本語) option to all language selectors`);
console.log(`   - Added native language names for better UX`);
console.log(`   - Japanese translation handled by existing Google Translate config`);
console.log(`\n🌐 Supported Languages:`);
console.log(`   - English (English)`);
console.log(`   - 日本語 (Japanese)`);
console.log(`   - हिंदी (Hindi)`);
console.log(`   - తెలుగు (Telugu)`);
