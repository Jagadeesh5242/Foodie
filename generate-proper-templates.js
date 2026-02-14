const fs = require('fs');
const path = require('path');

// Content database with variants per cooking style
const recipeDatabase = {
  'butter-chicken': {
    title: 'Butter Chicken',
    baseDescription: 'Creamy Tomato-Based Curry with Tender Chicken',
    variants: {
      'coastal-classic': {
        description: 'Coastal Indian Recipe | Light & Authentic with Coconut',
        ingredients: [
          '🍗 Chicken - 600g, cut into medium pieces',
          '🥥 Coconut Milk - 1 cup (light)',
          '🫒 Virgin Coconut Oil - 2 tbsp',
          '🍅 Tomato - 3 medium, pureed',
          '🧅 Onions - 2, finely sliced',
          '🧄 Garlic - 5 cloves, minced',
          '🫚 Ginger - 1.5 inch, grated',
          '🌶️ Green Chilies - 2, slit',
          '🥒 Ginger-Garlic Paste - 1 tbsp',
          '🧂 Salt - to taste',
          '✨ Turmeric Powder - 1/4 tsp',
          '🌶️ Red Chili Powder - 3/4 tsp',
          '🌾 Cumin Powder - 1/2 tsp',
          '🥗 Coriander Powder - 1 tsp',
          '✨ Garam Masala - 1/2 tsp',
          '🍃 Fresh Cilantro - 3 tbsp',
          '🍃 Fresh Curry Leaves - 8-10',
          '💧 Water - 1/2 cup'
        ],
        instructions: [
          'Marinate chicken with salt, turmeric, red chili powder, and half the ginger-garlic paste for 20 minutes in coastal style',
          'Heat coconut oil in a heavy-bottom pan over medium heat',
          'Add curry leaves and sauté for 30 seconds to release aroma',
          'Add sliced onions and sauté until golden and translucent (5-6 minutes)',
          'Add remaining ginger-garlic paste and sauté for 1-2 minutes',
          'Add green chilies and cook for 1 minute',
          'Add tomato puree and cook stirring frequently for 4-5 minutes until oil separates',
          'Add coriander powder, cumin powder, and remaining red chili powder, stir well',
          'Add marinated chicken pieces and cook for 8-10 minutes on high heat',
          'Add coconut milk slowly, stir gently to prevent curdling',
          'Add water and bring to a gentle simmer',
          'Cook on low-medium heat for 12-15 minutes until chicken is fully cooked and tender',
          'Add garam masala and salt to taste',
          'Simmer for 2 more minutes',
          'Garnish generously with fresh cilantro and serve hot with rice or coastal breads'
        ]
      },
      'coastal-creamy': {
        description: 'Coastal Indian Recipe | Rich & Extra Creamy with Double Coconut',
        ingredients: [
          '🍗 Chicken - 600g, cut into medium pieces',
          '🥥 Coconut Milk - 1.5 cups (full fat)',
          '🥥 Coconut Cream - 1/2 cup',
          '🫒 Virgin Coconut Oil - 3 tbsp',
          '🍅 Tomato - 2 medium, pureed',
          '🥛 Yogurt - 1/4 cup (optional, for richness)',
          '🧅 Onions - 2, finely sliced',
          '🧄 Garlic - 6 cloves, minced',
          '🫚 Ginger - 2 inch, minced',
          '🌶️ Green Chilies - 1-2, slit',
          '🥒 Ginger-Garlic Paste - 1.5 tbsp',
          '🧂 Salt - to taste',
          '✨ Turmeric Powder - 1/4 tsp',
          '🌶️ Red Chili Powder - 1/2 tsp (mild)',
          '🌾 Coriander Powder - 1 tsp',
          '✨ Garam Masala - 3/4 tsp',
          '🍯 Honey or Sugar - 1 tsp (for balance)',
          '🍃 Fresh Cilantro - 4 tbsp',
          '🍃 Fresh Mint - 3 tbsp',
          '💧 Water - 1/4 cup',
          '💌 Lemon Juice - 1 tsp'
        ],
        instructions: [
          'Marinate chicken with yogurt (if using), turmeric, and salt for 30 minutes',
          'Heat coconut oil in a heavy-bottom pan on medium heat',
          'Add sliced onions and cook until deep golden brown (6-7 minutes for extra flavor)',
          'Add ginger-garlic paste and cook for 2 minutes',
          'Add tomato puree and cook for 5-6 minutes until oil separates',
          'Lower heat, add coriander powder and garam masala, stir for 30 seconds',
          'Add marinated chicken and cook for 10-12 minutes until 60% cooked',
          'Pour in coconut cream first, stir gently for 1 minute',
          'Slowly add coconut milk in stages, stirring constantly to achieve silky texture',
          'Add green chilies and water, bring to gentle simmer',
          'Cook on low heat for 12-15 minutes, stirring occasionally',
          'Add honey/sugar to balance acidity and richness',
          'Add fresh mint leaves and cook for 1 minute',
          'Season with salt and finish with lemon juice',
          'Garnish with cilantro and serve immediately with rice, naan, or appam'
        ]
      },
      'north-indian-classic': {
        description: 'North Indian Recipe | Authentic Delhi-Style with Rich Tomato Gravy',
        ingredients: [
          '🍗 Chicken - 700g, boneless cubed',
          '🫒 Ghee or Butter - 4 tbsp',
          '🍅 Tomato Puree - 1 cup',
          '🍅 Tomato Sauce - 2 tbsp',
          '🧅 Onions - 2.5 large, finely chopped',
          '🥛 Yogurt - 1/2 cup',
          '🧄 Garlic - 8 cloves, minced',
          '🫚 Ginger - 2 inch, minced',
          '🌶️ Red Chili Powder - 1 tsp',
          '🌾 Garam Masala - 1 tsp',
          '🌾 Coriander Powder - 1 tsp',
          '🌾 Cumin Powder - 1/2 tsp',
          '✨ Turmeric - 1/4 tsp',
          '🧂 Salt - to taste',
          '🌿 Kasuri Methi (dried fenugreek) - 1/2 tsp',
          '💚 Green Cardamom - 3-4, crushed',
          '🍯 Honey or Sugar - 2 tsp',
          '💧 Water - 1 cup',
          '🍃 Fresh Cilantro & Mint - 4 tbsp',
          '🌶️ Green Chili - 1-2, minced'
        ],
        instructions: [
          'Marinate chicken in yogurt, 1 tsp ginger-garlic paste, and salt for 30 minutes',
          'Heat ghee in a heavy-bottomed pan on medium-high heat, add crushed cardamom',
          'Add finely chopped onions and fry until dark golden brown (8-9 minutes)',
          'Reduce heat to medium, add ginger-garlic paste and cook for 1 minute',
          'Add green chilies and cook for 30 seconds',
          'Add all dry spices (chili powder, coriander, cumin, turmeric) and fry for 1 minute',
          'Add tomato puree and tomato sauce, stir well and cook for 6-7 minutes until oil separates',
          'Add marinated chicken with yogurt and cook on high heat for 10-12 minutes',
          'Stir in water, bring to boil, then reduce to low-medium heat',
          'Add kasuri methi by rubbing between palms and sprinkling',
          'Simmer for 15-18 minutes until chicken is completely cooked and tender',
          'Add honey/sugar to balance the spices and acidity',
          'Add garam masala powder and simmer for 1-2 minutes',
          'Finish with fresh cilantro and mint',
          'Serve hot with basmati rice, tandoori naan, or traditional Indian breads'
        ]
      },
      'south-indian-spicy': {
        description: 'South Indian Recipe | Bold & Fiery with Aromatic Spices',
        ingredients: [
          '🍗 Chicken - 700g, chunky cut',
          '🫒 Coconut Oil or Ghee - 4 tbsp',
          '🍅 Tomato - 4 medium, pureed',
          '🧅 Large Onions - 3, sliced thick',
          '🥥 Coconut Paste - 1/4 cup',
          '🌶️ Red Chilies (whole) - 6-8',
          '🌶️ Green Chilies - 3-4, slit',
          '🧄 Garlic - 10 cloves, minced',
          '🫚 Ginger - 2.5 inch, minced',
          '🌾 Mustard Seeds - 1 tsp',
          '🌾 Fenugreek Seeds - 3/4 tsp',
          '🌾 Cumin Seeds - 3/4 tsp',
          '🌾 Coriander Seeds - 1 tsp (crushed)',
          '✨ Turmeric Powder - 1/2 tsp',
          '🌿 Curry Leaves - 12-15',
          '🍃 Fresh Cilantro - 4 tbsp',
          '💧 Coconut Water - 1 cup',
          '💧 Water - 1/2 cup',
          '🧂 Salt & Black Pepper - to taste',
          '💌 Tamarind Paste - 1 tsp'
        ],
        instructions: [
          'Dry roast red chilies, mustard seeds, fenugreek seeds, and cumin seeds separately until fragrant',
          'Grind roasted seeds with 3 tbsp water to make a coarse paste',
          'Heat coconut oil in a pan, add curry leaves and sauté until crispy',
          'Add thickly sliced onions and fry until deep golden brown (8-10 minutes)',
          'Add minced garlic and ginger, cook for 2 minutes until golden',
          'Add green chilies and tomato puree, cook for 5-6 minutes until oil comes out',
          'Add the roasted spice paste and stir for 2 minutes allowing flavors to bloom',
          'Add coconut paste and mix well, cook for 1-2 minutes',
          'Add chicken pieces and cook on high heat for 10-12 minutes',
          'Add coconut water and regular water, bring to boil',
          'Reduce heat and simmer for 15 minutes until chicken is 75% cooked',
          'Add turmeric powder and tamarind paste, stir well',
          'Continue simmering for 8-10 minutes until chicken is very tender',
          'Adjust salt and add black pepper to taste',
          'Finish with fresh cilantro',
          'Serve piping hot with steamed rice, roti, or parotta'
        ]
      }
    }
  },
  'dal-tadka': {
    title: 'Dal Tadka',
    baseDescription: 'Lentil Curry with Aromatic Tempering',
    variants: {
      'north-indian-classic': {
        description: 'North Indian Recipe | Creamy Delhi-Style with Aromatic Tadka',
        ingredients: [
          '🫘 Red Lentils (Masoor) - 1 cup',
          '🫒 Ghee or Oil - 4 tbsp',
          '🧅 Onions - 2 medium, finely sliced',
          '🧄 Garlic - 6 cloves, minced',
          '🫚 Ginger - 1.5 inch, minced',
          '🌶️ Red Chili - 2 whole',
          '🌶️ Green Chilies - 2, slit',
          '🌾 Cumin Seeds - 1 tsp',
          '🌾 Mustard Seeds - 1 tsp',
          '🌾 Fenugreek Seeds - 1/2 tsp',
          '🍃 Curry Leaves - 10-12',
          '✨ Turmeric Powder - 1/2 tsp',
          '🌾 Coriander Powder - 1 tsp',
          '🌶️ Red Chili Powder - 1/2 tsp',
          '🌾 Garam Masala - 1/2 tsp',
          '🧂 Salt - to taste',
          '🍯 Sugar - 1/4 tsp',
          '💧 Water - 4 cups',
          '🍃 Fresh Cilantro - 3 tbsp',
          '💌 Lemon Juice - 1 tsp'
        ],
        instructions: [
          'Rinse red lentils under running water until water runs clear (about 3-4 times)',
          'Boil water in a pot with turmeric and salt',
          'Add lentils to boiling water, stir well',
          'Let it come to boil, then reduce heat and simmer for 20-25 minutes until lentils are completely soft',
          'Mash the softly cooked lentils with a spoon or use an immersion blender for creamy texture',
          'Add coriander powder and chili powder, stir well and keep on low heat',
          'For tadka: Heat 3 tbsp ghee in a tadka pan on medium heat',
          'Add cumin seeds and let them splutter for 10 seconds',
          'Add mustard seeds, fenugreek seeds, and red chilies, let them splutter',
          'Add curry leaves and fry until they become fragrant and crispy',
          'Add sliced onions and fry until golden brown (5-6 minutes)',
          'Add minced garlic and cook for 1-2 minutes until golden',
          'Add slit green chilies and cook for 30 seconds',
          'Pour the hot tadka into the cooked dal slowly, stirring continuously',
          'Add garam masala and sugar to balance flavors',
          'Simmer on low heat for 3-4 minutes',
          'Add salt to taste and finish with lemon juice',
          'Garnish generously with fresh cilantro',
          'Serve hot with rice, roti, or flatbread'
        ]
      },
      'south-indian-mild': {
        description: 'South Indian Recipe | Mild & Light Preparation with Coconut Finish',
        ingredients: [
          '🫘 Red Lentils - 3/4 cup',
          '🫘 Moong Lentils - 1/4 cup (for mildness)',
          '🥥 Coconut Oil - 2 tbsp',
          '🫒 Sesame Oil - 1 tbsp',
          '🧅 Shallots - 4-5, thinly sliced',
          '🧄 Garlic - 4 cloves, thinly sliced',
          '🫚 Ginger - 1 inch, minced',
          '🌶️ Green Chilies - 2, slit',
          '🌾 Mustard Seeds - 1/2 tsp',
          '🌾 Cumin Seeds - 1/2 tsp',
          '🌾 Urad Lentils - 1 tsp (for tadka)',
          '🍃 Curry Leaves - 8-10',
          '✨ Turmeric Powder - 1/4 tsp',
          '🌾 Coriander Powder - 1/2 tsp',
          '🌶️ Red Chili Powder - 1/4 tsp (mild)',
          '🥛 Coconut Milk - 1/2 cup',
          '💧 Water - 4 cups',
          '🧂 Salt - to taste',
          '🍃 Cilantro - 3 tbsp',
          '🍯 Jaggery - 1/4 tsp (optional)'
        ],
        instructions: [
          'Soak red lentils and moong lentils together for 15 minutes',
          'Drain and rinse the lentils under running water',
          'Bring water to a boil in a vessel with turmeric',
          'Add drained lentils and cook for 18-20 minutes until completely soft',
          'Mash gently with spoon to achieve smooth consistency',
          'Add coriander powder and mild red chili powder',
          'Heat coconut oil in a tadka pan, add curry leaves and fry for 20 seconds',
          'Add mustard seeds, cumin seeds, and urad lentils, let them splutter',
          'Add thin shallot slices and fry until light golden (3-4 minutes)',
          'Add slit green chilies and cook for 30 seconds',
          'Add sliced garlic and minced ginger, fry for 1 minute on low heat',
          'Pour this tadka into the lentils slowly, stirring gently',
          'Add sesame oil and stir well',
          'Add coconut milk slowly and mix thoroughly',
          'Simmer for 2-3 minutes on low heat',
          'Add jaggery for slight sweetness if desired',
          'Season with salt and finish with cilantro',
          'Serve warm with white rice or ragi roti'
        ]
      }
    }
  }
};

// Template generator function
function generateTemplate(title, variant, description, ingredients, instructions) {
  
  const ingredientChips = ingredients
    .map(ing => `<div class="ingredient-chip">${ing}</div>`)
    .join('');
  
  const instructionSteps = instructions
.map((instr, idx) => `
    <div class="instruction-step">
      <div class="step-number">${idx + 1}</div>
      <div class="step-text">${instr}</div>
    </div>`)
    .join('');

  return `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>${title} ${variant.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - Ruchique 🍽️</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding-top: 240px;
            padding-bottom: 80px;
        }

        .navbar {
            background: linear-gradient(90deg, rgba(32,32,46,0.98) 0%, rgba(50,50,80,0.98) 100%);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            padding: 0.9rem 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
        }

        .navbar-brand {
            font-size: 1.7rem;
            font-weight: 900;
            color: #fff !important;
            letter-spacing: 1px;
        }

        .navbar a {
            color: #fff !important;
            margin: 0 0.8rem;
            font-weight: 600;
        }

        .navbar a:hover {
            color: #ffc107 !important;
        }

        .autocomplete-container {
            position: relative;
            width: 400px;
            margin: 0 auto;
        }

        #searchInput {
            width: 100%;
            padding: 12px 20px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 25px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-weight: 500;
        }

        #searchInput:focus {
            outline: none;
            border-color: #ffc107;
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
        }

        #searchInput::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }

        #suggestionsList {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(32, 32, 46, 0.98);
            border: 2px solid #ffc107;
            border-top: none;
            border-radius: 0 0 20px 20px;
            list-style: none;
            max-height: 300px;
            overflow-y: auto;
            display: none;
            z-index: 1001;
        }

        #suggestionsList li {
            padding: 12px 20px;
            color: white;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        #suggestionsList li:hover {
            background: rgba(255, 193, 7, 0.2);
        }

        .recipe-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 30px 15px;
        }

        .recipe-header {
            text-align: center;
            margin-bottom: 40px;
            color: white;
        }

        .recipe-title {
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 10px;
        }

        .recipe-desc {
            font-size: 1.1rem;
            opacity: 0.95;
        }

        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }

        .card-section {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }

        .section-header {
            font-size: 1.6rem;
            font-weight: 900;
            color: #1a1a2e;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid #ffc107;
        }

        .ingredients-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .ingredient-chip {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 16px;
            border-radius: 25px;
            font-weight: 600;
            text-align: center;
            transition: all 0.3s ease;
        }

        .ingredient-chip:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
        }

        .instructions-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .instruction-step {
            display: flex;
            gap: 15px;
            align-items: flex-start;
        }

        .step-number {
            background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            flex-shrink: 0;
        }

        .step-text {
            padding-top: 8px;
            color: #333;
            line-height: 1.6;
            font-weight: 500;
        }

        .action-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .btn-action {
            padding: 14px 32px;
            border: none;
            border-radius: 28px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btn-home {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .btn-video {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
        }

        .footer {
            background: rgba(0, 0, 0, 0.3);
            color: white;
            text-align: center;
            padding: 2rem;
            border-top: 2px solid rgba(255, 193, 7, 0.3);
        }

        @media (max-width: 768px) {
            .content-grid { grid-template-columns: 1fr; }
            .ingredients-list { grid-template-columns: 1fr; }
            .recipe-title { font-size: 1.8rem; }
            #searchInput { font-size: 0.9rem; }
            .autocomplete-container { width: 100%; max-width: 280px; }
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">🍛 Ruchique</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
                <div class="autocomplete-container mx-auto">
                    <input type="text" id="searchInput" placeholder="Search recipes...">
                    <ul id="suggestionsList"></ul>
                </div>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="recipe-container">
        <div class="recipe-header">
            <h1 class="recipe-title">${title} - ${variant.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</h1>
            <p class="recipe-desc">${description}</p>
        </div>

        <div class="content-grid">
            <div class="card-section">
                <h2 class="section-header">📋 Ingredients</h2>
                <div class="ingredients-list">
                    ${ingredientChips}
                </div>
            </div>

            <div class="card-section">
                <h2 class="section-header">👨‍🍳 Instructions</h2>
                <div class="instructions-list">
                    ${instructionSteps}
                </div>
            </div>
        </div>

        <div class="action-buttons">
            <a href="/" class="btn-action btn-home">Back to Home</a>
            <a href="https://www.youtube.com/results?search_query=${title.replace(/\s+/g, '+')}+${variant.replace(/-/g, '+')}" target="_blank" class="btn-action btn-video">Watch Recipe Video</a>
        </div>
    </div>

    <div class="footer">
        <p>&copy; 2026 Ruchique - Delicious Indian Recipes</p>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            const keyword = this.value.trim();
            if (keyword.length > 2) {
                fetch('/api/recipes/search?keyword=' + encodeURIComponent(keyword))
                    .then(res => res.json())
                    .then(recipes => {
                        const list = document.getElementById('suggestionsList');
                        list.innerHTML = '';
                        if (recipes && recipes.length > 0) {
                            recipes.forEach(recipe => {
                                const li = document.createElement('li');
                                li.textContent = recipe;
                                li.onclick = () => window.location.href = '/' + recipe.toLowerCase().replace(/\s+/g, '-');
                                list.appendChild(li);
                            });
                            list.style.display = 'block';
                        }
                    })
                    .catch(err => console.error('Search failed:', err));
            }
        });
    </script>
</body>
</html>`;
}

// Write templates for all variants
let count = 0;
const templatesDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');

for (const [recipeName, recipeData] of Object.entries(recipeDatabase)) {
  for (const [variantName, variantData] of Object.entries(recipeData.variants)) {
    const fileName = `${recipeName}-${variantName}.html`;
    const filePath = path.join(templatesDir, fileName);
    
    const title = recipeData.title;
    const description = variantData.description;
    const ingredients = variantData.ingredients;
    const instructions = variantData.instructions;
    
    try {
      const template = generateTemplate(title, variantName, description, ingredients, instructions);
      fs.writeFileSync(filePath, template, 'utf8');
      console.log(`✅ Created: ${fileName}`);
      count++;
    } catch (err) {
      console.error(`❌ Error creating ${fileName}:`, err.message);
    }
  }
}

console.log(`\n✨ Successfully created/updated ${count} recipe templates with proper style-specific content!`);
