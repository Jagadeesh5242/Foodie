const fs = require('fs');
const path = require('path');

const templateDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');

// Enhanced instructions template
const enhancedInstructions = {
  'aloo-fry.html': [
    'Peel the potatoes and cut them into thin, uniform slices (about 1/8 inch thick). Soak the sliced potatoes in cold water for at least 10 minutes to remove excess starch. This helps them fry crispier. Pat them completely dry with a clean cloth.',
    'Heat oil in a deep pan or wok over medium-high heat. The oil should be about 350°F (175°C). Test by dropping a small piece of potato - it should sizzle immediately without browning too quickly.',
    'Carefully add potatoes in small batches to avoid overcrowding and temperature drop. Fry for 5-7 minutes until they turn golden and crispy. Stir occasionally to ensure even cooking. Remove with a slotted spoon and drain on paper towels.',
    'For the tadka (tempering): In another pan, heat 2 tablespoons of oil over medium heat. Add 1 teaspoon mustard seeds and wait until they pop. Add curry leaves and 1-2 dried chili peppers. Fry for 30 seconds until fragrant.',
    'Mix the fried potatoes with the hot tadka. Add 1 tablespoon freshly made ginger-garlic paste and 1/2 teaspoon garam masala. Toss everything gently to coat evenly. Add salt and black pepper to taste.',
    'Turn off heat and add a squeeze of fresh lemon juice (about 2 tablespoons) and finely chopped cilantro. Toss gently once more. Serve immediately while still warm and crispy. Goes well with any meal.'
  ]
};

let updated = 0;

Object.keys(enhancedInstructions).forEach(fileName => {
  try {
    const filepath = path.join(templateDir, fileName);
    if (!fs.existsSync(filepath)) {
      console.log(`⚠️  File not found: ${fileName}`);
      return;
    }

    let content = fs.readFileSync(filepath, 'utf8');
    const instructions = enhancedInstructions[fileName];
    
    let newInstructionsHTML = '';
    instructions.forEach((instruction, index) => {
      newInstructionsHTML += `
                            <div class="instruction-step">
                                <div class="step-number">${index + 1}</div>
                                <div class="step-text">${instruction}</div>
                            </div>`;
    });

    // Find and replace the instructions section
    const instructionPattern = /<div class="instructions-list">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/;
    
    if (instructionPattern.test(content)) {
      content = content.replace(instructionPattern, 
        `<div class="instructions-list">${newInstructionsHTML}
                </div>
            </div>
        </div>`);
      
      fs.writeFileSync(filepath, content);
      updated++;
      console.log(`✅ Updated: ${fileName}`);
    } else {
      console.log(`⚠️  Pattern not found in: ${fileName}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${fileName}: ${error.message}`);
  }
});

console.log(`\n══════════════════════════════════════════════════════════════`);
console.log(`✨ DETAILED INSTRUCTIONS ADDED!`);
console.log(`══════════════════════════════════════════════════════════════`);
console.log(`\n📊 Summary:`);
console.log(`   ✅ Updated: ${updated} recipe pages with detailed instructions`);
console.log(`\n✨ Improvements:`);
console.log(`   ✓ Added comprehensive step-by-step instructions`);
console.log(`   ✓ Included timing and temperature details`);
console.log(`   ✓ Added helpful cooking tips`);
console.log(`   ✓ Better guidance for each step\n`);
console.log(`🎉 Recipes now have more detailed instructions!\n`);
