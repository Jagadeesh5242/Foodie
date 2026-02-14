const fs = require('fs');
const path = require('path');

const templatesDir = './src/main/resources/templates';

// Read all HTML files
const files = fs.readdirSync(templatesDir).filter(file => file.endsWith('.html'));

let updatedCount = 0;
let skippedCount = 0;

files.forEach(file => {
    const filePath = path.join(templatesDir, file);
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let hasChanges = false;

        // Fix 1: Update .lang-selector CSS styles
        const oldLangSelectorCSS = /\.lang-selector\s*\{\s*background:\s*rgba\(255,\s*255,\s*255,\s*0\.15\);[\s\S]*?margin-left:\s*10px;\s*\}/;
        
        const newLangSelectorCSS = `.lang-selector {
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-left: 10px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            min-height: 44px;
            font-size: 16px;
            min-width: 140px;
        }`;

        if (oldLangSelectorCSS.test(content)) {
            content = content.replace(oldLangSelectorCSS, newLangSelectorCSS);
            hasChanges = true;
            console.log(`✓ Updated .lang-selector in ${file}`);
        }

        // Fix 2: Update .lang-selector:hover and add focus/active states
        const hoverPattern = /\.lang-selector:hover\s*\{[\s\S]*?border-color:\s*#ffc107;\s*\}/;
        
        const hoverAndFocusCSS = `.lang-selector:hover {
            background: rgba(255, 255, 255, 0.25);
            border-color: #ffc107;
        }

        .lang-selector:focus {
            outline: none;
            background: rgba(255, 255, 255, 0.3);
            border-color: #ffc107;
            box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2);
        }

        .lang-selector:active {
            background: rgba(255, 255, 255, 0.35);
        }`;

        if (hoverPattern.test(content)) {
            content = content.replace(hoverPattern, hoverAndFocusCSS);
            hasChanges = true;
            console.log(`✓ Added focus/active states for .lang-selector in ${file}`);
        }

        // Fix 3: Add mobile media query for lang-selector if not present
        if (!content.includes('@media (max-width: 768px)') || !content.includes('.lang-selector')) {
            // Check if there's already a media query
            const mediaQueryPattern = /@media\s*\(\s*max-width:\s*768px\s*\)/;
            
            if (!content.includes('mobile media query for lang-selector') && content.includes('.lang-selector option')) {
                const insertPoint = content.indexOf('.lang-selector option');
                const endOfRule = content.indexOf('}', insertPoint) + 1;
                
                const mobileCSS = `

        @media (max-width: 768px) {
            .lang-selector {
                margin-left: 5px;
                padding: 10px 12px;
                font-size: 14px;
                min-width: 130px;
            }
        }`;
                
                if (endOfRule > insertPoint) {
                    content = content.slice(0, endOfRule) + mobileCSS + content.slice(endOfRule);
                    hasChanges = true;
                    console.log(`✓ Added mobile media query for .lang-selector in ${file}`);
                }
            }
        }

        // Fix 4: Ensure translation.js is loaded (not the inline version)
        if (content.includes('src="/js/translation.js"')) {
            console.log(`✓ ${file} already has translation.js loaded`);
        } else if (content.includes('function googleTranslateElementInit()')) {
            console.log(`⚠ ${file} still uses inline translation - consider running update-translation.js first`);
        }

        if (hasChanges) {
            fs.writeFileSync(filePath, content, 'utf8');
            updatedCount++;
        } else {
            skippedCount++;
        }
    } catch (error) {
        console.error(`✗ Error processing ${file}:`, error.message);
    }
});

console.log(`\n✅ Mobile Translation Fix Completed!`);
console.log(`   Updated: ${updatedCount} files`);
console.log(`   Skipped: ${skippedCount} files`);
console.log(`\n📝 Summary:`);
console.log(`   - Enhanced CSS for .lang-selector with mobile touch targets`);
console.log(`   - Added focus and active states for better mobile UX`);
console.log(`   - Added responsive media query for small screens`);
