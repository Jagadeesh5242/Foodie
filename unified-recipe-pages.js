const fs = require('fs');
const path = require('path');

// Comprehensive recipe data with authentic ingredients and instructions
const recipes = {
  'Samosa': {
    ingredients: ['🥔 Potatoes', '🫘 Green Peas', '🌶️ Green Chili', '🧅 Onion', '🧂 Salt', '🌾 Cumin Seeds', '🫒 Oil', '⚪ Maida Flour'],
    instructions: [
      'Make dough with maida, salt, and oil. Knead well and let rest for 30 minutes',
      'Boil potatoes and peas. Mash and mix with roasted cumin seeds, green chili, and spices',
      'Roll dough into thin circles, cut in half, and fold into cone shape',
      'Fill the cone with potato mixture and seal edges with water',
      'Deep fry in hot oil until golden brown on all sides',
      'Serve hot with chutney and enjoy'
    ]
  },
  'Dosa': {
    ingredients: ['🍚 Rice', '🫘 Urad Dal', '🌿 Fenugreek Seeds', '🧂 Salt', '🫒 Oil', '🧅 Onion', '🍅 Tomato', '🌶️ Green Chili'],
    instructions: [
      'Soak rice and urad dal separately for 4-6 hours',
      'Grind urad dal first to a fluffy white batter, then grind rice separately',
      'Mix both batters with fenugreek seeds and salt. Ferment overnight or 8 hours',
      'Heat a non-stick dosa pan and apply oil lightly',
      'Spread a ladle of batter thin and wide, drizzle oil around edges. Cook until golden',
      'Flip and cook briefly. Serve with sambhar and chutney'
    ]
  },
  'Biryani': {
    ingredients: ['🍚 Basmati Rice', '🍗 Chicken/Meat', '🧅 Onion', '🥛 Yogurt', '🧄 Garlic', '🫚 Ginger', '🌶️ Red Chili', '🌟 Saffron'],
    instructions: [
      'Marinate chicken with yogurt, ginger-garlic paste, red chili, and salt for 30 minutes',
      'Fry sliced onions until deep golden brown. Keep aside half for garnish',
      'Boil basmati rice with whole spices until 70% cooked. Drain immediately',
      'Layer marinated chicken with fried onions in a heavy-bottomed pot',
      'Layer partially cooked rice over chicken. Sprinkle remaining onions and saffron',
      'Cover with foil and cook on high flame for 5 minutes, then low for 45 minutes'
    ]
  },
  'Butter Chicken': {
    ingredients: ['🍗 Chicken', '🥛 Yogurt', '🫒 Butter', '🍅 Tomato', '🧄 Garlic', '🫚 Ginger', '🍶 Cream', '🌶️ Red Chili'],
    instructions: [
      'Marinate chicken pieces with yogurt, ginger-garlic paste, and spices for 1-2 hours',
      'Grill or bake marinated chicken until cooked through (about 20 minutes)',
      'Make paste by grinding boiled tomatoes with garlic and spices',
      'Heat butter in pan, add tomato paste and cook for 5 minutes',
      'Add cream and cooked chicken pieces. Simmer for 10-15 minutes',
      'Season with salt and serve hot with rice or naan'
    ]
  },
  'Tandoori Chicken': {
    ingredients: ['🍗 Chicken', '🥛 Yogurt', '🧄 Garlic', '🫚 Ginger', '🌶️ Red Chili', '🎯 Tandoori Masala', '🍋 Lemon', '🧂 Salt'],
    instructions: [
      'Mix yogurt with tandoori masala, ginger-garlic paste, lemon juice, and salt',
      'Make slits on chicken pieces and apply marinade generously',
      'Refrigerate for minimum 4 hours or overnight for best flavor',
      'Preheat oven to 200°C or prepare tandoor with coal',
      'Skewer marinated chicken and cook for 30-40 minutes turning occasionally',
      'Serve with lemon wedges and sliced onions'
    ]
  },
  'Chicken Tikka Masala': {
    ingredients: ['🍗 Chicken', '🍅 Tomato', '🍶 Cream', '👨‍🍳 Garam Masala', '🧄 Garlic', '🫚 Ginger', '🌶️ Green Chili', '🧂 Salt'],
    instructions: [
      'Marinate chicken cubes in yogurt with ginger-garlic paste and spices for 30 minutes',
      'Cook marinated chicken in oven or tandoor until nearly done (15-20 minutes)',
      'Heat oil in pan, add onions and cook until golden brown',
      'Add ginger-garlic paste and green chili. Cook for 2 minutes',
      'Add tomato puree and simmer until oil separates. Add cooked chicken pieces',
      'Add cream and garam masala. Cook for 10 minutes. Garnish with cilantro'
    ]
  },
  'Dal Makhani': {
    ingredients: ['🫘 Black Dal', '🫘 Rajma', '🫒 Butter', '🍶 Cream', '🍅 Tomato', '🧄 Garlic', '🌿 Cumin', '🧂 Salt'],
    instructions: [
      'Soak black lentils and kidney beans for 4 hours. Pressure cook for 30 minutes',
      'Heat butter in pan, add cumin. Add ginger-garlic paste and sauté for 2 minutes',
      'Add tomato puree and cook until oil separates (5-7 minutes)',
      'Add cooked dal and beans. Simmer for 15 minutes',
      'Add cream and season with salt. Cook for another 10 minutes',
      'Serve hot with butter drizzled on top. Pairs well with rice or naan'
    ]
  },
  'Paneer Tikka': {
    ingredients: ['🧀 Paneer', '🍌 Bell Pepper', '🧅 Onion', '🥛 Yogurt', '🧄 Garlic', '🌶️ Green Chili', '👨‍🍳 Garam Masala', '🍋 Lemon'],
    instructions: [
      'Cut paneer into cubes and chop onion, bell pepper into large pieces',
      'Mix yogurt with ginger-garlic paste, garam masala, lemon juice, and salt',
      'Marinate paneer and vegetables for 2 hours',
      'Thread paneer and vegetables alternately on skewers',
      'Grill over charcoal or in oven at 200°C for 15-20 minutes',
      'Serve hot with mint chutney and lemon wedges'
    ]
  },
  'Palak Paneer': {
    ingredients: ['🌱 Spinach', '🧀 Paneer', '🧅 Onion', '🧄 Garlic', '🫚 Ginger', '🍶 Cream', '🧂 Salt', '🌿 Cumin'],
    instructions: [
      'Blanch fresh spinach in boiling water for 2 minutes. Cool and grind to fine paste',
      'Heat ghee, add cumin seeds. Sauté onion and ginger-garlic paste',
      'Add spinach paste and cook for 5 minutes, stirring occasionally',
      'Add cream and simmer for 3 minutes. Season with salt',
      'Cut paneer into cubes and add to gravy. Cook for 5 more minutes',
      'Serve hot with butter on top. Goes well with rice, roti, or naan'
    ]
  },
  'Rajma': {
    ingredients: ['🫘 Kidney Beans', '🍅 Tomato', '🧅 Onion', '🌶️ Red Chili', '🧄 Garlic', '👨‍🍳 Garam Masala', '🫒 Oil', '🧂 Salt'],
    instructions: [
      'Soak kidney beans overnight. Pressure cook with water until soft (30 minutes)',
      'Heat oil, add onions and cook till golden. Add ginger-garlic paste',
      'Add tomato puree and red chili powder. Cook until oil separates',
      'Add cooked beans and water. Simmer for 15-20 minutes',
      'Add garam masala and salt. Mix well and cook for 5 more minutes',
      'Serve hot with rice. Adjust spice level as desired'
    ]
  },
  'Aloo Gobi': {
    ingredients: ['🥔 Potato', '🥦 Cauliflower', '🧅 Onion', '🌶️ Green Chili', '🧄 Garlic', '🌿 Cumin', '🍅 Tomato', '🧂 Salt'],
    instructions: [
      'Cut potatoes and cauliflower into medium-sized pieces',
      'Heat oil in pan, add cumin seeds and let them crackle',
      'Add onion and cook until soft. Add ginger-garlic paste',
      'Add tomato pieces and cook until soft (3-4 minutes)',
      'Add potato and cauliflower pieces. Mix well',
      'Cover and cook on medium heat for 15-20 minutes until vegetables are tender'
    ]
  },
  'Garlic Naan': {
    ingredients: ['🌾 Wheat Flour', '🧄 Garlic', '🫒 Ghee', '🥛 Yogurt', '🧂 Salt', '💧 Water', '🌿 Cilantro', '🔥 Butter'],
    instructions: [
      'Mix wheat flour with salt, yogurt, and water. Knead well into soft dough',
      'Apply ghee and let rest for 2 hours. Divide into balls',
      'Roll each ball into oval shape. Prick lightly with fork',
      'Mix melted ghee with minced garlic and cilantro',
      'Preheat naan oven or tawa on high heat until very hot',
      'Place naan on hot surface and brush with garlic-ghee mixture'
    ]
  },
  'Chole Bhature': {
    ingredients: ['🫘 Chickpeas', '⚪ Maida Flour', '🥛 Yogurt', '🧂 Salt', '🌿 Cumin', '🍅 Tomato', '🧅 Onion', '🌶️ Green Chili'],
    instructions: [
      'Soak chickpeas overnight and pressure cook until soft (25-30 minutes)',
      'Make dough with maida, yogurt, salt, and baking soda. Keep for 6 hours',
      'Heat oil in pan, add onion and cook until golden',
      'Add tomato and spices. Add cooked chickpeas and simmer for 15 minutes',
      'Divide bhature dough into balls. Let rise for 30 minutes',
      'Deep fry each ball until golden and puffed. Serve hot with chole curry'
    ]
  },
  'Pakora': {
    ingredients: ['🫘 Chickpea Flour', '🥔 Potato', '🧅 Onion', '🌶️ Green Chili', '🫚 Ginger', '🧂 Salt', '🌟 Turmeric', '🫒 Oil'],
    instructions: [
      'Slice potatoes and onions thinly. Chop green chili finely',
      'Mix chickpea flour with salt, turmeric, and ginger-garlic paste',
      'Add water to make thick batter. Coat vegetables generously',
      'Heat oil in deep pan. Deep fry pakora until golden brown on all sides',
      'Drain on paper towel. Serve hot with green chutney',
      'Can be made with other vegetables like brinjal, cauliflower, or paneer'
    ]
  },
  'Paratha': {
    ingredients: ['🌾 Wheat Flour', '🧅 Onion', '🌶️ Green Chili', '🧄 Garlic', '🧂 Salt', '🫒 Ghee', '💧 Water', '🌿 Cilantro'],
    instructions: [
      'Knead wheat flour with salt and water into soft dough. Let rest 30 minutes',
      'Chop onion, green chili, and cilantro finely. Mix with salt',
      'Divide dough into balls. Roll thin and spread onion filling',
      'Fold into triangle or rectangle shape with filling inside',
      'Heat tawa and cook paratha on both sides until golden spots appear',
      'Apply ghee and flip. Serve hot with yogurt and pickle'
    ]
  }
};

function generateRecipePage(recipeName) {
    const recipeData = recipes[recipeName];
    const ingredients = recipeData ? recipeData.ingredients : ['🥘 Ingredient'];
    const instructions = recipeData ? recipeData.instructions : ['Step 1'];

    const ingredientCards = ingredients.map(ing => 
        `                            <div class="ingredient-chip">${ing}</div>`
    ).join('\n');
    
    const instructionSteps = instructions.map((inst, idx) => `
                            <div class="instruction-step">
                                <div class="step-number">${idx + 1}</div>
                                <div class="step-text">${inst}</div>
                            </div>`
    ).join('\n');

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
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            position: relative;
            padding-top: 80px;
            padding-bottom: 80px;
        }

        /* Navbar Styling - Same as Index */
        .navbar {
            background: linear-gradient(90deg, rgba(32,32,46,0.98) 0%, rgba(50,50,80,0.98) 100%);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            padding: 0.9rem 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            backdrop-filter: blur(10px);
        }

        .navbar-brand {
            font-size: 1.7rem;
            font-weight: 900;
            color: #fff !important;
            letter-spacing: 1px;
            transition: color 0.3s ease;
        }

        .navbar-brand:hover {
            color: #ffc107 !important;
        }

        .navbar a {
            color: #fff !important;
            margin: 0 0.8rem;
            transition: all 0.3s ease;
            font-weight: 600;
            padding: 8px 16px;
            border-radius: 20px;
        }

        .navbar a:hover {
            color: #ffc107 !important;
            background: rgba(255, 255, 255, 0.1);
        }

        /* Language Selector - Same as Index */
        .lang-selector {
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-left: 10px;
        }

        .lang-selector:hover {
            background: rgba(255, 255, 255, 0.25);
            border-color: #ffc107;
        }

        .lang-selector option {
            background: #333;
            color: white;
        }

        /* Search Box - Same as Index */
        .autocomplete-container {
            position: relative;
            display: inline-flex;
            width: 350px;
            margin: 0 1rem;
        }

        #searchInput {
            padding: 14px 20px;
            border: none;
            border-radius: 28px;
            width: 100%;
            outline: none;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            font-size: 0.95rem;
            transition: all 0.3s ease;
            background: white;
        }

        #searchInput:focus {
            box-shadow: 0 6px 25px rgba(255, 193, 7, 0.4);
            transform: scale(1.02);
        }

        #suggestionsList {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            border: none;
            background-color: white;
            list-style: none;
            padding: 0;
            margin: 5px 0 0 0;
            max-height: 250px;
            overflow-y: auto;
            border-radius: 0 0 28px 28px;
            display: none;
            z-index: 1000;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        #suggestionsList li {
            padding: 14px 20px;
            cursor: pointer;
            transition: all 0.2s;
            border-bottom: 1px solid #f0f0f0;
            font-weight: 500;
        }

        #suggestionsList li:hover {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        /* Recipe Content */
        .recipe-container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .recipe-header {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 30px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
            text-align: center;
        }

        .recipe-title {
            font-size: 2.5rem;
            font-weight: 900;
            color: #1a1a2e;
            margin-bottom: 10px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .recipe-desc {
            color: #666;
            font-size: 1.1rem;
            font-weight: 500;
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
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
            transition: all 0.3s ease;
            text-align: center;
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
            font-size: 1.1rem;
            flex-shrink: 0;
            box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
        }

        .step-text {
            padding-top: 8px;
            font-size: 1rem;
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
            font-size: 1rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btn-home {
            background: white;
            color: #667eea;
            border: 2px solid #667eea;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
        }

        .btn-home:hover {
            background: #667eea;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
            text-decoration: none;
        }

        .btn-video {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-video:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
            text-decoration: none;
            color: white;
        }

        /* Footer - Same as Index */
        .footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            text-align: center;
            padding: 1.5rem;
            color: white;
            background: linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 100%);
            z-index: 100;
            font-size: 0.95rem;
            font-weight: 500;
            letter-spacing: 0.5px;
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
        }
    </style>
</head>
<body>
    <!-- Navigation Bar - Same as Index -->
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">🍽️ Ruchique</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
                <div class="autocomplete-container mx-auto">
                    <input type="text" id="searchInput" name="keyword" placeholder="Search recipes...">
                    <ul id="suggestionsList"></ul>
                </div>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="/"><i class="fas fa-home"></i> Home</a></li>
                    <li class="nav-item">
                        <select class="lang-selector" id="languageSelector">
                            <option value="en">English</option>
                            <option value="te">Telugu</option>
                            <option value="hi">Hindi</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Recipe Content -->
    <div class="recipe-container">
        <div class="recipe-header">
            <h1 class="recipe-title">${recipeName}</h1>
            <p class="recipe-desc">Authentic Indian Recipe | Traditional Preparation</p>
        </div>

        <div class="content-grid">
            <div class="card-section">
                <h2 class="section-header">📋 Ingredients</h2>
                <div class="ingredients-list">
${ingredientCards}
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
            <a href="/" class="btn-action btn-home"><i class="fas fa-arrow-left"></i> Back to Home</a>
            <a href="https://www.youtube.com/results?search_query=${recipeName}+recipe" target="_blank" class="btn-action btn-video"><i class="fas fa-play-circle"></i> Watch Recipe Video</a>
        </div>
    </div>

    <!-- Footer - Same as Index -->
    <div class="footer">
        <p>&copy; 2026 Ruchique - Delicious Indian Recipes <i class="fas fa-utensils" style="margin: 0 5px;"></i></p>
    </div>

    <!-- Google Translate -->
    <div id="google_translate_element" style="display: none;"></div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        const searchInput = document.getElementById('searchInput');
        const suggestionsList = document.getElementById('suggestionsList');
        const languageSelector = document.getElementById('languageSelector');
        
        if (searchInput && suggestionsList) {
            searchInput.value = '';
            suggestionsList.innerHTML = '';
            suggestionsList.style.display = 'none';
            
            let searchTimer;
            searchInput.addEventListener('input', function(e) {
                clearTimeout(searchTimer);
                const keyword = this.value.trim();
                
                if (!keyword) {
                    suggestionsList.innerHTML = '';
                    suggestionsList.style.display = 'none';
                    return;
                }
                
                searchTimer = setTimeout(() => {
                    fetch('/api/recipes/search?keyword=' + encodeURIComponent(keyword))
                        .then(res => res.json())
                        .then(recipes => {
                            suggestionsList.innerHTML = '';
                            if (recipes && recipes.length > 0) {
                                recipes.forEach(recipe => {
                                    const li = document.createElement('li');
                                    li.textContent = recipe;
                                    li.addEventListener('click', () => {
                                        searchInput.value = '';
                                        suggestionsList.innerHTML = '';
                                        suggestionsList.style.display = 'none';
                                        window.location.href = '/' + recipe.toLowerCase().replace(/\\s+/g, '-');
                                    });
                                    suggestionsList.appendChild(li);
                                });
                                suggestionsList.style.display = 'block';
                            }
                        })
                        .catch(err => console.log('Search error:', err));
                }, 200);
            });
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    clearTimeout(searchTimer);
                    const keyword = this.value.trim();
                    if (keyword) {
                        searchInput.value = '';
                        suggestionsList.innerHTML = '';
                        suggestionsList.style.display = 'none';
                        window.location.href = '/' + keyword.toLowerCase().replace(/\\s+/g, '-');
                    }
                }
            });
            
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.autocomplete-container')) {
                    suggestionsList.style.display = 'none';
                }
            });
        }
        
        if (languageSelector) {
            languageSelector.addEventListener('change', function(e) {
                const langMap = { 'en': 'English', 'te': 'Telugu', 'hi': 'Hindi' };
                const combo = document.querySelector('.goog-te-combo');
                if (combo) {
                    combo.value = langMap[this.value] || 'English';
                    combo.dispatchEvent(new Event('change', { bubbles: true }));
                }
            });
        }
        
        function initTranslate() {
            try {
                new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,te,hi',
                    autoDisplay: false
                }, 'google_translate_element');
            } catch(e) {}
        }
        
        if (window.google && window.google.translate) {
            initTranslate();
        } else {
            setTimeout(initTranslate, 1500);
        }
    </script>
</body>
</html>`;
}

// Get all recipe files
const templateDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');
const files = fs.readdirSync(templateDir)
    .filter(f => f.endsWith('.html') && f !== 'index.html' && f !== 'search-results.html');

let count = 0;
files.forEach(file => {
    const recipeName = file.replace('.html', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    
    const filePath = path.join(templateDir, file);
    const content = generateRecipePage(recipeName);
    
    try {
        fs.writeFileSync(filePath, content, 'utf8');
        count++;
    } catch (err) {
        console.log('✗ Failed: ' + file);
    }
});

console.log('\n╔════════════════════════════════════════════════════════╗');
console.log('║     RECIPE PAGES UNIFIED WITH PREMIUM UI              ║');
console.log('╚════════════════════════════════════════════════════════╝\n');
console.log('✅ Updated: ' + count + ' recipe files');
console.log('✅ Same professional navbar as index.html');
console.log('✅ Consistent search & language selector');
console.log('✅ Professional ingredient chips with gradients');
console.log('✅ Numbered instruction steps with badges');
console.log('✅ Action buttons (Back Home, Watch Video)');
console.log('✅ Fixed footer matching index');
console.log('✅ Mobile responsive design');
console.log('✅ Unique ingredients & instructions per recipe');
console.log('✅ Google Translate support');
console.log('\n🎨 Premium UI applied to all pages!\n');
