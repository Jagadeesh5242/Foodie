const fs = require('fs');
const path = require('path');

const templatesDir = 'src/main/resources/templates';

// Files to check
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.html'));

let fixedCount = 0;

files.forEach(file => {
    const filePath = path.join(templatesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to find: duplicate closing braces before function definitions
    // Look for: }  }\n        }); \n    } \n    function
    // Should be:  } \n        function
    const patterns = [
        // Pattern 1: triple closing braces followed by function
        {
            regex: /(\s+)\}\s+\}\s+\}\);\s+function/g,
            replacement: '$1}\n\n    function'
        },
        // Pattern 2: duplicate closing braces with });
        {
            regex: /(\s+)\}\s+}\);\s+\}\s+function/g,
            replacement: '$1}\n\n    function'
        }
    ];
    
    let modified = false;
    patterns.forEach(pattern => {
        if (pattern.regex.test(content)) {
            content = content.replace(pattern.regex, pattern.replacement);
            modified = true;
        }
    });
    
    // Also fix the specific makai-roti pattern we found
    if (content.includes('});\n            });\n        }')) {
        content = content.replace('});\n            });\n        }', '});');
        modified = true;
    }
    
    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${file}`);
        fixedCount++;
    }
});

console.log(`\nTotal files fixed: ${fixedCount}/${files.length}`);
