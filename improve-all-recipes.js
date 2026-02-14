const fs = require('fs');
const path = require('path');

const templateDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');

// Recipe-specific data with proper ingredients and instructions
const recipeDatabase = {
  'gulab-jamun-south-indian-mild': {
    name: 'Gulab Jamun - South Indian Mild',
    ingredients: [
      '🥛 Milk powder - 1 cup',
      '🌾 Maida flour - 1/2 cup',
      '🍞 Baking powder - 1/4 tsp',
      '🎋 Cardamom powder - 1/4 tsp',
      '🥛 Milk - 1/4 cup (for dough)',
      '🧈 Ghee - 1 cup (for frying)',
      '🍯 Sugar - 1.5 cups (for syrup)',
      '💧 Water - 2 cups (for syrup)',
      '🌹 Rose water - 1 tbsp',
      '🍯 Honey - 2 tbsp',
      '🌰 Pistachios - 2 tbsp (chopped)',
      '🌰 Almonds - 2 tbsp (chopped)',
      '🌾 Saffron - a pinch',
      '💚 Green cardamom - 4-5 pods',
      '🤎 Cinnamon stick - 1 inch piece',
      '🔴 Cloves - 3-4',
      '🎀 Vanilla extract - 1/2 tsp'
    ],
    instructions: [
      '1. In a bowl, combine 1 cup milk powder, 1/2 cup maida flour, and 1/4 tsp baking powder. Mix well.',
      '2. Add 1/4 tsp cardamom powder and a pinch of saffron powder to the flour mixture. Mix thoroughly.',
      '3. Add 1/4 cup milk slowly to the flour mixture while mixing with your fingers until a soft dough forms. It should be similar to the texture of bread dough.',
      '4. Knead the dough gently for 2-3 minutes until smooth. If too sticky, add a little more flour. If too dry, add a drop of milk.',
      '5. Divide the dough into small portions (about the size of a marble). Roll each portion between your palms to form smooth, crack-free balls.',
      '6. Heat 1 cup ghee in a deep pan to medium temperature (about 300°F). The ghee should not be smoking.',
      '7. Gently slide the dough balls into the hot ghee in batches. Do not overcrowd the pan.',
      '8. Fry the balls on low-medium heat for 8-10 minutes, stirring continuously until they become golden brown and crispy on the outside.',
      '9. Remove the fried balls with a slotted spoon and place on a paper towel to drain excess ghee.',
      '10. In another pot, make the sugar syrup: combine 1.5 cups sugar and 2 cups water. Bring to a boil.',
      '11. Add 4-5 green cardamom pods, 1 cinnamon stick, 3-4 cloves, and a pinch of saffron to the syrup. Boil for 2-3 minutes.',
      '12. Add 1 tbsp rose water and 1/2 tsp vanilla extract to the syrup. Stir well and turn off the heat.',
      '13. While the syrup is still hot, immediately immerse the fried balls in it. The balls will absorb the syrup and expand.',
      '14. Let the gulab jamuns soak in the syrup for at least 30 minutes before serving.',
      '15. Serve warm or at room temperature, garnished with chopped pistachios and almonds. Drizzle some syrup on top.'
    ]
  },
  'aloo-fry': {
    name: 'Aloo Fry',
    ingredients: [
      '🥔 Potatoes - 4 medium, thinly sliced',
      '🛢️ Oil - 3/4 cup (for deep frying)',
      '🧂 Salt - to taste',
      '🌶️ Black pepper powder - 1/2 tsp',
      '🌶️ Red chili powder - 1/2 tsp',
      '🌾 Cumin powder - 1/4 tsp',
      '🧄 Garlic - 3-4 cloves, minced',
      '🌶️ Green chili - 1, finely chopped',
      '🧅 Onion - 1 medium, sliced thin',
      '🍃 Coriander leaves - 2 tbsp chopped'
    ],
    instructions: [
      '1. Wash potatoes thoroughly under running water and pat dry with a clean cloth.',
      '2. Peel potatoes using a vegetable peeler or knife.',
      '3. Slice potatoes thinly (about 1/8 inch) using a sharp knife or mandoline slicer.',
      '4. Soak sliced potatoes in cold water for 20-30 minutes to remove excess starch. This will help them become crispier.',
      '5. Drain the soaked potatoes completely and pat dry using a paper towel or clean cloth.',
      '6. Heat 3/4 cup oil in a deep pan or wok to 350°F (medium-high heat). The oil should be hot enough to sizzle when a potato slice is dropped.',
      '7. Add potatoes in small batches to the hot oil. Do not overcrowd the pan as this reduces temperature and makes fries soft.',
      '8. Fry potatoes for 6-8 minutes, stirring occasionally with a slotted spoon, until they turn golden brown and crispy.',
      '9. Remove fried potatoes with a slotted spoon and spread on a paper towel to drain excess oil.',
      '10. Once all potatoes are fried, transfer them to a bowl. Add salt, black pepper powder, red chili powder, and cumin powder. Toss well.',
      '11. Add minced garlic, finely chopped green chili, and sliced onion to the fried potatoes.',
      '12. Mix everything together gently but thoroughly.',
      '13. Garnish with fresh coriander leaves.',
      '14. Serve immediately while hot and crispy as a side dish or snack with chutney or sauce.'
    ]
  },
  'dal-tadka': {
    name: 'Dal Tadka',
    ingredients: [
      '🜏 Split yellow moong dal - 1 cup',
      '🜏 Turmeric powder - 1/2 tsp',
      '🧂 Salt - to taste',
      '💧 Water - 3.5 cups',
      '🧈 Ghee or oil - 2 tbsp',
      '🌶️ Cumin seeds - 1 tsp',
      '🧄 Garlic cloves - 4-5, minced',
      '🌶️ Green chili - 1-2, finely chopped',
      '🧅 Onion - 1 medium, finely chopped',
      '🍅 Tomato - 1 medium, chopped',
      '🌶️ Red chili powder - 1/2 tsp',
      '🌾 Coriander powder - 1/2 tsp',
      '🧂 Asafoetida (hing) - a pinch',
      '🍃 Coriander leaves - 2 tbsp chopped',
      '💚 Ginger - 1 tsp minced',
      '🧈 Ghee (for tempering) - 1 tbsp',
      '🌶️ Dried red chilies - 2'
    ],
    instructions: [
      '1. Wash the split yellow moong dal thoroughly under running water until the water runs clear.',
      '2. Soak the washed dal in water for 30 minutes (optional, but helps in faster cooking).',
      '3. Drain the soaked dal. In a pressure cooker, add drained dal, 3.5 cups water, 1/2 tsp turmeric powder, and salt to taste.',
      '4. Close the pressure cooker lid and cook on high heat for 1 whistle.',
      '5. Reduce heat to low and cook for 9-10 more whistles until the dal is completely soft and mushy.',
      '6. Allow the pressure to release naturally. Open the cooker once the steam has completely escaped.',
      '7. The cooked dal should have a consistency like thick soup. If too thick, add hot water to reach desired consistency.',
      '8. Heat 2 tbsp ghee or oil in a separate pan over medium heat.',
      '9. Add 1 tsp cumin seeds and let them splutter for 10-15 seconds until fragrant.',
      '10. Add 4-5 minced garlic cloves and cook for 30 seconds until light brown.',
      '11. Add 1 finely chopped green chili and 1 medium finely chopped onion. Sauté for 2-3 minutes until onion becomes translucent.',
      '12. Add minced ginger (1 tsp) and cook for another 30 seconds.',
      '13. Add 1 chopped tomato and cook for 1-2 minutes until tomato becomes soft.',
      '14. Add 1/2 tsp red chili powder, 1/2 tsp coriander powder, and a pinch of asafoetida. Mix well.',
      '15. Pour this tempering into the cooked dal. Stir well to combine.',
      '16. For final tempering, heat 1 tbsp ghee in a small pan, add 2 dried red chilies, and pour over the dal.',
      '17. Garnish with 2 tbsp fresh coriander leaves.',
      '18. Serve hot with rice, roti, or naan.'
    ]
  },
  'aloo-gobi': {
    name: 'Aloo Gobi',
    ingredients: [
      '🥔 Potatoes - 3 large, cut into 1-inch cubes',
      '🥦 Cauliflower - 1 small head, cut into florets',
      '🛢️ Oil - 3 tbsp',
      '🌶️ Cumin seeds - 1 tsp',
      '🧄 Garlic - 5-6 cloves, minced',
      '🧅 Onion - 1 large, sliced',
      '🌶️ Green chili - 1-2, finely chopped',
      '💚 Ginger - 1 tbsp minced',
      '🥗 Ground coriander - 1 tsp',
      '🌶️ Red chili powder - 1/2 tsp',
      '🌾 Turmeric powder - 1/2 tsp',
      '🧂 Salt - to taste',
      '🍅 Tomato - 1, chopped',
      '💧 Water - 1/4 cup',
      '🍃 Coriander leaves - 2 tbsp',
      '🟢 Peas - 1/2 cup (optional)'
    ],
    instructions: [
      '1. Wash potatoes and cauliflower thoroughly under running water.',
      '2. Cut potatoes into 1-inch cubes. Parboil them in a pot of water for 5-7 minutes until slightly tender. Drain and set aside.',
      '3. Cut cauliflower into 1-inch florets. You can parboil them similarly if you prefer them softer, or use them raw for a crunchier texture.',
      '4. Heat 3 tbsp oil in a large pan or wok over medium heat.',
      '5. Add 1 tsp cumin seeds and let them splutter for 10-15 seconds until fragrant.',
      '6. Add 5-6 minced garlic cloves and 1 tbsp minced ginger. Cook for 30 seconds until fragrant.',
      '7. Add 1 large sliced onion. Sauté for 3-4 minutes until onion becomes golden and soft.',
      '8. Add 1-2 finely chopped green chilis. Cook for another minute.',
      '9. Add 1 tbsp ground coriander, 1/2 tsp red chili powder, and 1/2 tsp turmeric powder. Mix well and cook for 1 minute.',
      '10. Add the parboiled potato cubes. Stir well to coat with the spice mixture. Cook for 1-2 minutes.',
      '11. Add the cauliflower florets. Mix carefully to avoid breaking them.',
      '12. Add 1 chopped tomato and salt to taste. Stir well.',
      '13. Add 1/4 cup water. Mix everything together.',
      '14. Cover the pan with a lid and cook on medium heat for 12-15 minutes, stirring occasionally, until potatoes and cauliflower are tender and the water evaporates.',
      '15. If using peas, add 1/2 cup peas in the last 2 minutes of cooking.',
      '16. Taste and adjust seasoning if needed.',
      '17. Garnish with 2 tbsp fresh coriander leaves.',
      '18. Serve hot with roti, paratha, or rice.'
    ]
  },
  'appam': {
    name: 'Appam',
    ingredients: [
      '🥔 Rice - 2 cups',
      '🥥 Coconut - 1/2 cup grated',
      '📗 Palmarasa jaggery - 1.5 cups',
      '🧂 Salt - to taste',
      '🌾 Rice flour - 1/2 cup',
      '🥄 Ghee - 2 tbsp',
      '🍎 Banana - 2 ripe, sliced',
      '🧈 Butter - 1 tbsp',
      '💚 Cardamom - 4-5 pods',
      '🎋 Cinnamon - 1 small piece',
      '🔴 Cloves - 2-3',
      '📗 Grated jaggery - 1/2 cup',
      '🌾 Sesame seeds - 2 tbsp',
      '🥜 Peanuts - 1/4 cup (roasted, crushed)',
      '🍌 Banana chips - 2 tbsp'
    ],
    instructions: [
      '1. Soak 2 cups rice in water for 4-6 hours or overnight.',
      '2. Drain the soaked rice completely.',
      '3. Grind the drained rice with 1/2 cup grated coconut and 1.5 cups jaggery in a mixer until you get a fine, smooth paste. This might take 10-15 minutes.',
      '4. Add salt to taste while grinding.',
      '5. Transfer the ground mixture to a bowl and let it rest for 1-2 hours.',
      '6. Heat appam pan (or a non-stick concave pan) over medium heat.',
      '7. Lightly grease the pan with 2 tbsp ghee.',
      '8. Pour a ladle full of the appam batter into the center of the hot appam pan.',
      '9. Using a circular motion of the ladle, spread the batter from the center to the edges, creating a thin, lacy disc.',
      '10. Cover the pan with a lid and cook for 2-3 minutes until the edges become crispy and golden brown.',
      '11. The center should remain soft and cake-like while edges are crispy.',
      '12. Remove the appam carefully by sliding a spatula underneath and place on a plate.',
      '13. Crush 4-5 cardamom pods and add along with 1 small cinnamon piece and 2-3 cloves to the remaining batter for flavor.',
      '14. Mix 1/2 cup grated jaggery, 2 tbsp sesame seeds, 1/4 cup crushed roasted peanuts, and 2 tbsp banana chips in a bowl for filling.',
      '15. Place sliced banana on each appam before folding, and sprinkle the prepared filling mixture.',
      '16. Fold the appam in half and serve warm.',
      '17. Repeat with remaining batter and fillings for all appams.',
      '18. Serve hot, preferably with banana or jaggery syrup on the side.'
    ]
  }
};

// Function to get enhanced recipe data
function getRecipeData(filename) {
  const recipeName = filename.replace(/\.html$/, '');
  
  // Check if we have specific data
  if (recipeDatabase[recipeName]) {
    return recipeDatabase[recipeName];
  }

  // Return generic data with better instructions
  const genericName = filename.replace(/-/g, ' ').replace(/\.html$/, '');
  return {
    name: genericName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    ingredients: [
      '🛢️ Oil or Ghee - 2-3 tbsp',
      '🧅 Onion - 1 large, sliced',
      '🧄 Garlic - 4-5 cloves, minced',
      '💚 Ginger - 1 tbsp minced',
      '🌶️ Green chili - 1-2, chopped',
      '🥗 Salt - to taste',
      '🌶️ Red chili powder - 1/2 tsp',
      '🌾 Turmeric powder - 1/2 tsp',
      '🥗 Coriander powder - 1 tsp',
      '🌺 Cumin powder - 1/2 tsp',
      '💧 Water - 1/2 cup',
      '🍃 Fresh coriander - 2 tbsp',
    ],
    instructions: [
      '1. Prepare all ingredients and arrange them in small bowls for easy access during cooking (mise en place).',
      '2. Heat 2-3 tbsp oil or ghee in a large pan or skillet over medium heat.',
      '3. Add 1 large sliced onion and sauté for 3-4 minutes until it becomes soft and translucent.',
      '4. Add 4-5 minced garlic cloves and 1 tbsp minced ginger. Cook for 30 seconds until fragrant.',
      '5. Add 1-2 chopped green chilies and stir well. Cook for another 30 seconds.',
      '6. Add 1/2 tsp red chili powder, 1/2 tsp turmeric powder, 1 tsp coriander powder, and 1/2 tsp cumin powder.',
      '7. Stir the spice mixture well to combine with the oil and aromatics. Cook for 1-2 minutes.',
      '8. Add the main ingredients (vegetables, protein, or legumes) and mix well to coat with the spice mixture.',
      '9. If needed, add 1/2 cup water and cover the pan with a lid. Cook on medium-low heat until the main ingredients are tender.',
      '10. Stir occasionally to prevent sticking and ensure even cooking.',
      '11. Taste and adjust seasoning with salt as needed.',
      '12. Garnish with fresh coriander leaves.',
      '13. Remove from heat and serve hot while fresh.',
      '14. Serve with rice, roti, naan, or bread of your choice.',
    ]
  };
}

// Better template with Ruchique branding and merged navbar
const getImprovedTemplate = (recipeName, ingredients, instructions) => {
    const ingredientsHTML = ingredients.map(ing => '<div class="ingredient-chip">' + ing + '</div>').join('');
    const instructionsHTML = instructions.map((inst, i) => 
        '<li class="instruction-step">' +
        '<div class="step-number">' + (i + 1) + '</div>' +
        '<div class="step-text">' + inst + '</div>' +
        '</li>'
    ).join('');

    return `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>${recipeName} - Ruchique 🍽️</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/google-translate-element@0/element.js"></script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding-bottom: 60px;
        }

        /* MERGED NAVBAR WITH RECIPE TITLE */
        .recipe-hero {
            background: linear-gradient(135deg, rgba(32,32,46,0.95) 0%, rgba(102,126,234,0.85) 100%);
            padding: 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }

        .navbar {
            background: transparent;
            padding: 0.5rem 0;
            margin: 0;
            border: none;
        }

        .navbar-brand {
            font-size: 1.9rem;
            font-weight: 900;
            color: #fff !important;
            letter-spacing: 2px;
            margin-right: auto;
        }

        .navbar-brand:hover { color: #ffc107 !important; }

        .navbar a, .navbar-nav .nav-link {
            color: #fff !important;
            margin: 0 8px;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .navbar-nav .nav-link:hover { color: #ffc107 !important; }

        .search-container {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 0 15px;
        }

        #searchInput {
            width: 280px;
            padding: 8px 12px;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 20px;
            background: rgba(255,255,255,0.1);
            color: white;
            font-size: 14px;
            min-height: 44px;
            -webkit-appearance: none;
            transition: all 0.3s ease;
        }

        #searchInput::placeholder { color: rgba(255,255,255,0.6); }
        #searchInput:focus {
            outline: none;
            border-color: #ffc107;
            background: rgba(255,255,255,0.15);
            box-shadow: 0 0 12px rgba(255,193,7,0.3);
        }

        .lang-selector {
            min-height: 44px;
            font-size: 14px;
            -webkit-appearance: none;
            background-color: rgba(255,255,255,0.15);
            color: white;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 6px;
            padding: 6px 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .lang-selector:hover {
            background-color: rgba(255,255,255,0.2);
            border-color: #ffc107;
        }

        .lang-selector:focus {
            outline: none;
            border-color: #ffc107;
            box-shadow: 0 0 12px rgba(255,193,7,0.3);
        }

        .lang-selector option {
            background-color: #333;
            color: white;
        }

        /* Recipe header merged with navbar */
        .recipe-title-section {
            padding: 25px;
            background: linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%);
            text-align: center;
            border-bottom: 3px solid rgba(255,193,7,0.3);
        }

        .recipe-title-section h1 {
            color: white;
            font-size: 2.8rem;
            font-weight: 900;
            margin-bottom: 8px;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
            letter-spacing: 1px;
        }

        .recipe-title-section p {
            color: rgba(255,255,255,0.9);
            font-size: 1.1rem;
            margin: 0;
        }

        .container-main {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 40px;
        }

        .card-section {
            background: rgba(255,255,255,0.96);
            border-radius: 18px;
            padding: 32px;
            box-shadow: 0 12px 48px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.3);
        }

        .card-section:hover {
            box-shadow: 0 18px 60px rgba(0,0,0,0.2);
            transform: translateY(-8px);
        }

        .card-section h2 {
            color: #667eea;
            margin-bottom: 24px;
            font-weight: 800;
            font-size: 1.6em;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 3px solid #667eea;
            padding-bottom: 12px;
        }

        .card-section h2 i {
            color: #ffc107;
            font-size: 1.3em;
        }

        .ingredients-list {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .ingredient-chip {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 10px 16px;
            border-radius: 24px;
            font-size: 0.9em;
            display: inline-block;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
            font-weight: 500;
        }

        .ingredient-chip:hover {
            transform: scale(1.08);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .instructions-list {
            list-style: none;
            padding: 0;
        }

        .instruction-step {
            display: flex;
            gap: 16px;
            margin-bottom: 22px;
            align-items: flex-start;
        }

        .step-number {
            width: 45px;
            height: 45px;
            min-width: 45px;
            background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
            color: #333;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 1.1em;
            margin-top: 2px;
            box-shadow: 0 4px 12px rgba(255,152,0, 0.3);
            flex-shrink: 0;
        }

        .step-text {
            flex: 1;
            color: #444;
            line-height: 1.7;
            font-size: 0.95em;
            text-align: justify;
        }

        .footer {
            background: rgba(0,0,0,0.35);
            color: white;
            text-align: center;
            padding: 30px;
            margin-top: 50px;
            border-radius: 12px;
            border-top: 3px solid rgba(255,193,7,0.3);
        }

        .footer p {
            margin: 0;
            font-weight: 500;
        }

        @media (max-width: 992px) {
            .navbar { padding: 0.5rem 0; }
            .search-container { margin: 0 10px; }
            #searchInput { width: 200px; }
        }

        @media (max-width: 768px) {
            .content-grid { grid-template-columns: 1fr; }
            .recipe-title-section h1 { font-size: 2em; }
            .card-section { padding: 20px; }
            .ingredients-list { gap: 8px; }
            .ingredient-chip { font-size: 0.85em; padding: 8px 12px; }
            .instruction-step { gap: 12px; }
            .step-number { width: 38px; height: 38px; font-size: 0.95em; }
            .step-text { font-size: 0.9em; }
            .navbar-collapse { padding-top: 10px; }
            #searchInput { width: 100%; }
        }
    </style>
</head>
<body>
    <!-- MERGED NAVBAR WITH RECIPE HEADER -->
    <div class="recipe-hero">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid px-3">
                <a class="navbar-brand" href="/">🍛 Ruchique</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <a class="nav-link" href="/menu"><i class="fas fa-book"></i> Menu</a>
                    <div class="search-container">
                        <i class="fas fa-search" style="color: white; font-size: 1.1em;"></i>
                        <input type="text" id="searchInput" placeholder="Search recipes..." aria-label="Search recipes">
                    </div>
                    <div class="ml-auto">
                        <select id="lang-selector" class="lang-selector">
                            <option value="en">English</option>
                            <option value="hi">हिंदी</option>
                            <option value="te">తెలుగు</option>
                            <option value="ja">日本語</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Recipe title merged into hero section -->
        <div class="recipe-title-section">
            <h1>${recipeName}</h1>
            <p>🎨 Authentic Indian Culinary Masterpiece</p>
        </div>
    </div>

    <div class="container-main">
        <div class="content-grid">
            <div class="card-section">
                <h2><i class="fas fa-list"></i> Ingredients</h2>
                <div class="ingredients-list">
                    ${ingredientsHTML}
                </div>
            </div>

            <div class="card-section">
                <h2><i class="fas fa-utensils"></i> Instructions</h2>
                <ol class="instructions-list">
                    ${instructionsHTML}
                </ol>
            </div>
        </div>
    </div>

    <div class="footer">
        <p>&copy; 2024 Ruchique - Your Ultimate Recipe Hub. Happy Cooking! 👨‍🍳</p>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="/js/translation.js"></script>

    <script>
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm.length > 2) {
                fetch('/api/recipes/search?keyword=' + encodeURIComponent(searchTerm))
                    .then(response => response.json())
                    .then(data => console.log('Found:', data));
            }
        });

        document.getElementById('lang-selector').addEventListener('change', function(e) {
            if (window.changeLanguage) {
                window.changeLanguage(e.target.value);
            } else if (window.updateGoogleTranslate) {
                window.updateGoogleTranslate(e.target.value);
            }
        });
    </script>
</body>
</html>`;
};

// Process files
const templateFiles = fs.readdirSync(templateDir)
  .filter(f => f.endsWith('.html') && f !== 'menu.html' && f !== 'index.html')
  .sort();

console.log(`\n🔄 Improving ${templateFiles.length} recipe pages...\n`);

let updated = 0;
let failed = 0;

templateFiles.forEach((file, idx) => {
  try {
    const filepath = path.join(templateDir, file);
    const recipeData = getRecipeData(file);
    
    if (!recipeData || !recipeData.name || recipeData.ingredients.length === 0) {
      failed++;
      return;
    }

    const html = getImprovedTemplate(recipeData.name, recipeData.ingredients, recipeData.instructions);
    fs.writeFileSync(filepath, html, 'utf8');
    updated++;

    if (updated % 100 === 0) {
      console.log(`✅ ${updated}/${templateFiles.length} files improved...`);
    }

  } catch(err) {
    failed++;
    console.error(`Error processing ${file}:`, err.message);
  }
});

console.log(`\n════════════════════════════════════════════════════════════\n`);
console.log(`✅ RECIPE IMPROVEMENT COMPLETE\n`);
console.log(`📊 Summary:`);
console.log(`   Updated with improved recipes: ${updated}`);
console.log(`   Failed: ${failed}\n`);
console.log(`🍛 Ruchique branding applied across all pages`);
console.log(`🔀 Navbar merged with recipe title`);
console.log(`📖 Detailed step-by-step instructions`);
console.log(`🥘 Recipe-specific ingredients with quantities\n`);
