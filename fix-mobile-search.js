const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'src/main/resources/templates');

const OLD_MEDIA_QUERY = `        @media (max-width: 768px) {
            .content-grid {
                grid-template-columns: 1fr;
            }

            .ingredients-list {
                grid-template-columns: 1fr;
            }

            .recipe-title {
                font-size: 1.8rem;
            }

            .autocomplete-container {
                width: 100%;
                max-width: 300px;
                margin: 0.5rem auto;
            }

            .action-buttons {
                flex-direction: column;
            }

            .btn-action {
                width: 100%;
                justify-content: center;
            }
        }`;

const NEW_MEDIA_QUERY = `        @media (max-width: 992px) {
            .autocomplete-container {
                width: 100%;
                max-width: 350px;
                margin: 0.5rem 0.5rem;
                flex: 1;
            }
        }

        @media (max-width: 768px) {
            .content-grid {
                grid-template-columns: 1fr;
            }

            .ingredients-list {
                grid-template-columns: 1fr;
            }

            .recipe-title {
                font-size: 1.8rem;
            }

            .autocomplete-container {
                width: 100%;
                max-width: 280px;
                margin: 0.5rem auto;
                flex: 1;
            }

            #searchInput {
                font-size: 0.9rem;
                padding: 12px 16px;
            }

            .action-buttons {
                flex-direction: column;
            }

            .btn-action {
                width: 100%;
                justify-content: center;
            }

            .navbar-brand {
                font-size: 1.4rem;
            }
        }

        @media (max-width: 576px) {
            body {
                padding-top: 100px;
                padding-bottom: 80px;
            }

            .autocomplete-container {
                width: calc(100% - 20px) !important;
                max-width: none !important;
                margin: 0.5rem 10px !important;
                flex: 1 !important;
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

            .recipe-title {
                font-size: 1.5rem;
            }

            .navbar-brand {
                font-size: 1.2rem;
                letter-spacing: 0px;
            }

            .navbar {
                padding: 0.5rem 0;
            }

            .ingredient-chip {
                padding: 8px 12px;
                font-size: 0.85rem;
            }

            .step-number {
                width: 32px;
                height: 32px;
                font-size: 0.9rem;
            }

            .instruction-step {
                gap: 10px;
            }

            .step-text {
                font-size: 0.9rem;
            }

            .btn-action {
                padding: 10px 20px;
                font-size: 0.9rem;
                gap: 6px;
            }

            .footer {
                padding: 1rem;
                font-size: 0.85rem;
            }
        }`;

function updateFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if the file already has the new media query
        if (content.includes('@media (max-width: 992px)')) {
            console.log(`⏭️  Already updated: ${path.basename(filePath)}`);
            return false;
        }

        // Replace the old media query with the new one
        if (content.includes(OLD_MEDIA_QUERY)) {
            content = content.replace(OLD_MEDIA_QUERY, NEW_MEDIA_QUERY);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Updated: ${path.basename(filePath)}`);
            return true;
        } else {
            console.log(`❌ Pattern not found in: ${path.basename(filePath)}`);
            return false;
        }
    } catch (error) {
        console.error(`Error processing ${path.basename(filePath)}: ${error.message}`);
        return false;
    }
}

// Read all HTML files from templates directory
const files = fs.readdirSync(templatesDir)
    .filter(file => file.endsWith('.html'))
    .map(file => path.join(templatesDir, file));

let updated = 0;
let skipped = 0;
let failed = 0;

console.log(`\n📂 Processing ${files.length} template files...\n`);

files.forEach(file => {
    const result = updateFile(file);
    if (result === true) updated++;
    else if (result === false) skipped++;
    else failed++;
});

console.log(`\n📊 Summary:`);
console.log(`✅ Updated: ${updated}`);
console.log(`⏭️  Already updated: ${skipped}`);
console.log(`❌ Failed: ${failed}`);
console.log(`\n🎉 Mobile search bar visibility fix completed!`);
