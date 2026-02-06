const fs = require('fs');
const path = require('path');

const templatesDir = './src/main/resources/templates';

// Read all HTML files
const files = fs.readdirSync(templatesDir).filter(file => file.endsWith('.html'));

let updatedCount = 0;
let errorCount = 0;

files.forEach(file => {
    const filePath = path.join(templatesDir, file);
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if file has the old navbar structure
        if (content.includes('class="autocomplete-container mx-auto"') &&
            content.includes('data-toggle="collapse" data-target="#navbarContent"')) {
            
            // Extract the navbar section
            const navbarMatch = content.match(/<nav class="navbar[^>]*>[\s\S]*?<\/nav>/);
            if (navbarMatch) {
                const oldNavbar = navbarMatch[0];
                
                // Create new navbar with fixed search bar positioning
                const newNavbar = `<nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <div class="navbar-header d-flex align-items-center" style="width: 100%;">
                <a class="navbar-brand" href="/">🍽️ Ruchique</a>
                <div class="autocomplete-container" style="flex: 1; max-width: 500px; margin: 0 1rem;">
                    <input type="text" id="searchInput" name="keyword" placeholder="Search recipes...">
                    <ul id="suggestionsList"></ul>
                </div>
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="/"><i class="fas fa-home"></i> Home</a></li>`;
                
                // Extract and preserve existing nav items
                const navItemsMatch = oldNavbar.match(/<li class="nav-item">[\s\S]*?<\/ul>\s*<\/div>\s*<\/nav>/);
                if (navItemsMatch) {
                    const navItemsStr = navItemsMatch[0];
                    const langSelector = navItemsStr.match(/<select[^>]*class="lang-selector"[^>]*>[\s\S]*?<\/select>/);
                    
                    if (langSelector) {
                        const newNavbarWithItems = newNavbar + navItemsStr.substring(
                            navItemsStr.indexOf('</li>') + 5,
                            navItemsStr.length
                        );
                        
                        content = content.replace(oldNavbar, newNavbarWithItems);
                        
                        // Add critical mobile navbar CSS
                        const cssToAdd = `        @media (max-width: 576px) {
            .navbar-header {
                display: flex !important;
                flex-wrap: wrap;
                width: 100%;
            }

            .navbar-brand {
                margin-right: auto;
            }

            .autocomplete-container {
                width: calc(100% - 20px) !important;
                max-width: none !important;
                margin: 0.5rem 10px !important;
                order: 3;
                flex-basis: 100%;
            }

            .navbar-toggler {
                order: 2;
                margin-left: auto;
            }

            #searchInput {
                font-size: 0.85rem;
                padding: 10px 14px;
                border-radius: 20px;
            }

            #suggestionsList {
                max-height: 200px;
            }

            #suggestionsList li {
                padding: 10px 16px;
                font-size: 0.9rem;
            }
        }`;
                        
                        // Find and replace the 576px media query
                        const mediaQueryRegex = /@media \(max-width: 576px\) \{[\s\S]*?\n        \}/;
                        if (mediaQueryRegex.test(content)) {
                            content = content.replace(mediaQueryRegex, cssToAdd);
                        }
                        
                        fs.writeFileSync(filePath, content, 'utf8');
                        updatedCount++;
                        console.log(`✓ Updated: ${file}`);
                    }
                }
            }
        }
    } catch (error) {
        errorCount++;
        console.error(`✗ Error processing ${file}:`, error.message);
    }
});

console.log(`\n====== SUMMARY ======`);
console.log(`Total files: ${files.length}`);
console.log(`Updated: ${updatedCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`=====================`);
