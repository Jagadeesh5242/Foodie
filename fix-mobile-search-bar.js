const fs = require('fs');
const path = require('path');

const templatesDir = './src/main/resources/templates';

// Read all HTML files
const files = fs.readdirSync(templatesDir).filter(file => file.endsWith('.html'));

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(templatesDir, file);
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if file needs updating
        if (content.includes('autocomplete-container')) {
            // Add navbar toggler styling if missing
            if (!content.includes('.navbar-toggler {')) {
                const navbarStyleEnd = content.indexOf('        .navbar a:hover {');
                if (navbarStyleEnd > -1) {
                    const insertPoint = content.lastIndexOf('\n', navbarStyleEnd) + 1;
                    const togglerCSS = `        .navbar-toggler {
            border: none;
            box-shadow: none;
            color: white;
            padding: 8px 12px;
        }

        .navbar-toggler-icon {
            background-image: url('data:image/svg+xml;charset=utf8,<svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="8" x2="25" y2="8" stroke="white" stroke-width="2"/><line x1="5" y1="15" x2="25" y2="15" stroke="white" stroke-width="2"/><line x1="5" y1="22" x2="25" y2="22" stroke="white" stroke-width="2"/></svg>');
        }

`;
                    content = content.slice(0, insertPoint) + togglerCSS + content.slice(insertPoint);
                }
            }
            
            // Update 576px media query for navbar
            const mobileQueryRegex = /@media \(max-width: 576px\) \{([\s\S]*?)^        \}/m;
            const match = content.match(mobileQueryRegex);
            
            if (match) {
                const mobileQuery = match[1];
                
                // Add navbar-specific mobile rules
                if (!mobileQuery.includes('.navbar {')) {
                    const insertPoint = match.index + match[0].length - 2;
                    
                    const navbarMobileCSS = `
            .navbar {
                padding: 0.5rem 0;
                flex-wrap: wrap;
            }

            .navbar-brand {
                margin-bottom: 0;
                order: 1;
            }

            .navbar-toggler {
                order: 2;
                margin-left: auto;
            }

            .autocomplete-container {
                width: 100% !important;
                max-width: 100% !important;
                margin: 0.5rem 10px !important;
                order: 3;
                flex-basis: 100%;
                display: flex;
            }

            #searchInput {
                width: 100%;
                font-size: 0.85rem;
                padding: 10px 12px;
                border-radius: 20px;
            }

            #navbarContent {
                order: 4;
                flex-basis: 100%;
                width: 100%;
                padding-top: 10px;
            }
`;
                    content = content.slice(0, insertPoint) + navbarMobileCSS + '\n        ' + content.slice(insertPoint);
                }
            }
            
            fs.writeFileSync(filePath, content, 'utf8');
            updatedCount++;
            console.log(`✓ ${file}`);
        }
    } catch (error) {
        console.error(`✗ ${file}: ${error.message}`);
    }
});

console.log(`\nUpdated ${updatedCount} files with mobile navbar fixes`);
