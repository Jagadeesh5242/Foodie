const fs = require('fs');
const path = require('path');

const templateDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');

let updated = 0;
let processed = 0;

const files = fs.readdirSync(templateDir).filter(
  f => f.endsWith('.html') && 
       !['menu.html', 'index.html', 'aloo-fry.html', 'ENHANCED_TEMPLATE.html', 'fixed-script.js', 'recipe-list.txt'].includes(f)
);

files.forEach((file) => {
  try {
    const filepath = path.join(templateDir, file);
    let content = fs.readFileSync(filepath, 'utf8');
    processed++;

    // Replace Home with Menu
    const oldHomeLink = /<li class="nav-item"><a class="nav-link" href="\/">/g;
    const newMenuLink = `<li class="nav-item"><a class="nav-link" href="/menu">`;
    
    if (oldHomeLink.test(content)) {
      content = content.replace(oldHomeLink, newMenuLink);
      
      // Also update the icon
      content = content.replace(/\bHome\b(?=<\/a>)/g, 'Menu');
      content = content.replace(/<i class="fas fa-home"><\/i>/g, '<i class="fas fa-list"></i>');
    }

    // Enhance CSS - add professional styling
    const cssEnhancements = `
        /* Enhanced Recipe Styling */
        .recipe-container {
            background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,245,250,0.95) 100%);
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            margin: 20px;
            overflow: hidden;
            animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .recipe-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .recipe-header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 300px;
            height: 300px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
        }

        .recipe-title {
            font-size: 2.5rem;
            font-weight: 900;
            letter-spacing: 1px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
            position: relative;
            z-index: 1;
            margin-bottom: 10px;
        }

        .card-section {
            background: white;
            border-radius: 15px;
            padding: 25px;
            margin: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-section:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .section-header {
            color: #667eea;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid #667eea;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .ingredient-chip {
            display: inline-block;
            background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
            color: white;
            padding: 10px 15px;
            border-radius: 25px;
            margin: 8px 8px 8px 0;
            font-weight: 600;
            box-shadow: 0 4px 10px rgba(255, 193, 7, 0.3);
            transition: all 0.3s ease;
        }

        .ingredient-chip:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 15px rgba(255, 193, 7, 0.5);
        }

        .instruction-step {
            background: #f8f9ff;
            border-left: 5px solid #667eea;
            padding: 20px;
            margin: 15px 0;
            border-radius: 10px;
            display: flex;
            gap: 15px;
            transition: all 0.3s ease;
        }

        .instruction-step:hover {
            background: #f0f2ff;
            transform: translateX(5px);
        }

        .step-number {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 1.2rem;
            flex-shrink: 0;
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .step-text {
            padding-top: 5px;
            font-size: 1rem;
            color: #333;
            line-height: 1.6;
        }

        .navbar {
            background: linear-gradient(90deg, rgba(32,32,46,0.98) 0%, rgba(50,50,80,0.98) 100%) !important;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.2) !important;
        }

        .navbar-brand {
            color: #fff !important;
            font-weight: 900 !important;
            font-size: 1.8rem !important;
            letter-spacing: 2px !important;
            transition: all 0.3s ease !important;
        }

        .navbar-brand:hover {
            color: #ffc107 !important;
            transform: scale(1.05);
        }

        .nav-link {
            color: #fff !important;
            font-weight: 600 !important;
            padding: 10px 15px !important;
            border-radius: 20px !important;
            transition: all 0.3s ease !important;
            margin: 0 5px !important;
        }

        .nav-link:hover {
            background: rgba(255, 193, 7, 0.2) !important;
            color: #ffc107 !important;
        }

        .lang-selector {
            background: rgba(255,255,255,0.15) !important;
            color: white !important;
            border: 2px solid rgba(255,255,255,0.3) !important;
            border-radius: 20px !important;
            padding: 8px 15px !important;
            cursor: pointer !important;
            font-weight: 600 !important;
            transition: all 0.3s ease !important;
        }

        .lang-selector:hover {
            background: rgba(255,255,255,0.25) !important;
            border-color: #ffc107 !important;
        }

        .lang-selector:focus {
            outline: none !important;
            background: rgba(255,255,255,0.3) !important;
            border-color: #ffc107 !important;
        }

        .lang-selector option {
            background: #333 !important;
            color: white !important;
        }

        .action-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin: 40px 20px;
            flex-wrap: wrap;
        }

        .btn-action {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
            color: white !important;
            padding: 12px 30px !important;
            border-radius: 25px !important;
            font-weight: 600 !important;
            transition: all 0.3s ease !important;
            display: inline-flex !important;
            align-items: center !important;
            gap: 8px !important;
            text-decoration: none !important;
            box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4) !important;
        }

        .btn-action:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6) !important;
            color: white !important;
        }

        .footer {
            background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 100%);
            color: white;
            text-align: center;
            padding: 20px;
            font-weight: 500;
            border-top: 2px solid #ffc107;
        }

        @media (max-width: 768px) {
            .recipe-title {
                font-size: 1.8rem;
            }

            .card-section {
                margin: 15px 10px;
                padding: 15px;
            }

            .ingredient-chip {
                padding: 8px 12px;
                font-size: 0.9rem;
            }

            .instruction-step {
                flex-direction: column;
                gap: 10px;
            }

            .step-number {
                width: 40px;
                height: 40px;
            }
        }
    `;

    // Add enhanced CSS before closing style tag
    if (content.includes('</style>')) {
      content = content.replace('</style>', cssEnhancements + '\n</style>');
    }

    fs.writeFileSync(filepath, content);
    updated++;
    
    if (updated % 50 === 0) {
      console.log(`✅ ${updated} files updated...`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}: ${error.message}`);
  }
});

console.log(`\n══════════════════════════════════════════════════════════════`);
console.log(`✨ COMPREHENSIVE UPGRADE COMPLETE!`);
console.log(`══════════════════════════════════════════════════════════════`);
console.log(`\n📊 Summary:`);
console.log(`   ✅ Updated: ${updated} recipe pages`);
console.log(`   📝 Processed: ${processed} files`);
console.log(`\n✨ Changes Made:`);
console.log(`   ✓ Replaced Home with Menu links`);
console.log(`   ✓ Enhanced CSS styling`);
console.log(`   ✓ Added smooth animations`);
console.log(`   ✓ Improved hover effects`);
console.log(`   ✓ Better card layouts`);
console.log(`   ✓ Professional gradient backgrounds`);
console.log(`   ✓ Mobile-responsive design`);
console.log(`\n🎨 UI/CSS Enhancements:`);
console.log(`   • Gradient backgrounds for visual appeal`);
console.log(`   • Smooth animations and transitions`);
console.log(`   • Better shadow and depth effects`);
console.log(`   • Enhanced color scheme with #667eea primary`);
console.log(`   • Improved spacing and padding`);
console.log(`   • Better typography hierarchy`);
console.log(`   • Responsive mobile design`);
console.log(`\n🎉 All recipes now have best-in-class UI!\n`);
