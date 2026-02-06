const fs = require('fs');
const path = require('path');

// Recipe ingredients database - authentic Indian recipes
const recipeIngredients = {
  'Samosa': ['🥔 Potatoes', '🫘 Green Peas', '🌶️ Green Chili', '🧅 Onion', '🧂 Salt', '🌾 Cumin Seeds', '🫒 Oil', '⚪ Maida Flour'],
  'Dosa': ['🍚 Rice', '🫘 Urad Dal', '🌿 Fenugreek Seeds', '🧂 Salt', '🫒 Oil', '🧅 Onion', '🍅 Tomato', '🌶️ Green Chili'],
  'Biryani': ['🍚 Basmati Rice', '🍗 Chicken/Meat', '🧅 Onion', '🥛 Yogurt', '🧄 Garlic', '🫚 Ginger', '🌶️ Red Chili', '🌟 Saffron'],
  'Biryani Rice': ['🍚 Basmati Rice', '🧅 Onion', '🌿 Bay Leaf', '💚 Green Cardamom', '🧂 Salt', '🫒 Ghee', '🌟 Saffron', '🌶️ Red Chili'],
  'Idli': ['🍚 Rice', '🫘 Urad Dal', '🌿 Fenugreek Seeds', '🧂 Salt', '🥄 Baking Soda'],
  'Gulab Jamun': ['🥜 Khoya', '⚪ Maida', '🥛 Milk', '🍬 Sugar', '🌹 Rose Syrup', '🫒 Ghee', '🎀 Cardamom', '🌰 Nuts'],
  'Pakora': ['🫘 Chickpea Flour', '🥔 Potato', '🧅 Onion', '🌶️ Green Chili', '🫚 Ginger', '🧂 Salt', '🌟 Turmeric', '🫒 Oil'],
  'Paratha': ['🌾 Wheat Flour', '🧅 Onion', '🌶️ Green Chili', '🧄 Garlic', '🧂 Salt', '🫒 Ghee', '💧 Water', '🌿 Cilantro'],
  'Butter Chicken': ['🍗 Chicken', '🥛 Yogurt', '🫒 Butter', '🍅 Tomato', '🧄 Garlic', '🫚 Ginger', '🍶 Cream', '🌶️ Red Chili'],
  'Tandoori Chicken': ['🍗 Chicken', '🥛 Yogurt', '🧄 Garlic', '🫚 Ginger', '🌶️ Red Chili', '🎯 Tandoori Masala', '🍋 Lemon', '🧂 Salt'],
  'Chicken Tikka Masala': ['🍗 Chicken', '🍅 Tomato', '🍶 Cream', '👨‍🍳 Garam Masala', '🧄 Garlic', '🫚 Ginger', '🌶️ Green Chili', '🧂 Salt'],
  'Rogan Josh': ['🐑 Lamb/Mutton', '🍅 Tomato', '🥛 Yogurt', '🧅 Onion', '🌶️ Red Chili', '👨‍🍳 Garam Masala', '🫚 Ginger', '🧂 Salt'],
  'Dal Makhani': ['🫘 Black Dal', '🫘 Rajma', '🫒 Butter', '🍶 Cream', '🍅 Tomato', '🧄 Garlic', '🌿 Cumin', '🧂 Salt'],
  'Chole Bhature': ['🫘 Chickpeas', '⚪ Maida Flour', '🥛 Yogurt', '🧂 Salt', '🌿 Cumin', '🍅 Tomato', '🧅 Onion', '🌶️ Green Chili'],
  'Paneer Tikka': ['🧀 Paneer', '🍌 Bell Pepper', '🧅 Onion', '🥛 Yogurt', '🧄 Garlic', '🌶️ Green Chili', '👨‍🍳 Garam Masala', '🍋 Lemon'],
  'Palak Paneer': ['🌱 Spinach', '🧀 Paneer', '🧅 Onion', '🧄 Garlic', '🫚 Ginger', '🍶 Cream', '🧂 Salt', '🌿 Cumin'],
  'Rajma': ['🫘 Kidney Beans', '🍅 Tomato', '🧅 Onion', '🌶️ Red Chili', '🧄 Garlic', '👨‍🍳 Garam Masala', '🫒 Oil', '🧂 Salt'],
  'Aloo Gobi': ['🥔 Potato', '🥦 Cauliflower', '🧅 Onion', '🌶️ Green Chili', '🧄 Garlic', '🌿 Cumin', '🍅 Tomato', '🧂 Salt'],
  'Aloo Fry': ['🥔 Potato', '🧅 Onion', '🌶️ Green Chili', '🧄 Garlic', '🫚 Ginger', '👨‍🍳 Garam Masala', '🫒 Oil', '🧂 Salt'],
  'Garlic Naan': ['🌾 Wheat Flour', '🧄 Garlic', '🫒 Ghee', '🥛 Yogurt', '🧂 Salt', '💧 Water', '🌿 Cilantro', '🔥 Butter'],
  'Chana Masala': ['🫘 Chickpeas', '🍅 Tomato', '🧅 Onion', '🌶️ Red Chili', '🌿 Cumin', '👨‍🍳 Garam Masala', '🧄 Garlic', '🫒 Oil'],
  'Dhokla': ['🫘 Chickpea Flour', '⚪ Maida', '🥛 Yogurt', '🧂 Salt', '🌿 Cumin', '🍅 Tomato', '🌶️ Green Chili', '💨 Salt'],
  'Kachumber Salad': ['🍅 Tomato', '🥒 Cucumber', '🧅 Onion', '🌶️ Green Chili', '🧂 Salt', '🍋 Lemon', '🌿 Cilantro', '🌿 Cumin'],
  'Raita': ['🥛 Yogurt', '🥒 Cucumber', '🍅 Tomato', '🧂 Salt', '🌶️ Red Chili', '🌿 Cumin', '🌿 Cilantro', '🧄 Garlic'],
  'Kheer': ['🍚 Rice', '🥛 Milk', '🍬 Sugar', '🌰 Nuts', '🎀 Cardamom', '🫒 Ghee', '🌟 Saffron', '🍂 Cinnamon'],
  'Jalebi': ['⚪ Maida', '🥛 Yogurt', '🍬 Sugar Syrup', '🌿 Saffron', '🎀 Cardamom', '🫒 Ghee', '💨 Baking Soda', '💧 Water'],
  'Ladoo': ['🫘 Chickpea Flour', '🥜 Peanuts', '🍬 Sugar', '🫒 Ghee', '🧂 Salt', '🎀 Cardamom', '🌰 Nuts', '🍂 Cinnamon'],
  'Halwa': ['🫘 Chickpea Flour', '🫒 Ghee', '🍬 Sugar', '💧 Milk', '🌰 Nuts', '🎀 Cardamom', '🌟 Saffron', '🔥 Heat'],
  'Upma': ['🍚 Semolina', '🌶️ Green Chili', '🧅 Onion', '🌿 Cumin', '🫒 Oil', '💧 Water', '🧂 Salt', '🌿 Cilantro'],
  'Poha': ['⚪ Flattened Rice', '🥔 Potato', '🧅 Onion', '🌶️ Green Chili', '🌿 Cumin', '🫒 Oil', '🌿 Cilantro', '🧂 Salt'],
  'Vada': ['🫘 Urad Dal', '🥔 Potato', '🌶️ Green Chili', '🧂 Salt', '🫒 Oil', '🧅 Onion', '🌿 Cumin', '🍺 Asafoetida'],
  'Uttapam': ['🍚 Rice', '🫘 Urad Dal', '🧅 Onion', '🌶️ Green Chili', '🍅 Tomato', '🧂 Salt', '🫒 Oil', '🌿 Cilantro'],
  'Pesarattu': ['🫘 Moong Dal', '🌶️ Green Chili', '🧅 Onion', '🫚 Ginger', '🧄 Garlic', '🧂 Salt', '🫒 Oil', '🌿 Cilantro'],
  'Gongura': ['🌾 Gongura Leaves', '🫒 Oil', '🌶️ Red Chili', '🧄 Garlic', '🌿 Cumin', '🧂 Salt', '🫘 Lentils', '💧 Water'],
  'Unappakaya': ['🍎 Apple', '🍬 Jaggery', '🌿 Cinnamon', '💚 Cardamom', '🌰 Nuts', '🫒 Oil', '🧂 Salt', '🔥 Ghee'],
  'Bendakaya': ['🫘 Okra', '🧅 Onion', '🌶️ Red Chili', '🍅 Tomato', '🌿 Cumin', '🫒 Oil', '🧄 Garlic', '🧂 Salt'],
  'Natu Kodi': ['🍗 Chicken', '🧄 Garlic', '🫚 Ginger', '🌶️ Red Chili', '👨‍🍳 Garam Masala', '🧅 Onion', '🍅 Tomato', '🧂 Salt'],
  'Biryani Dum Pukht': ['🍚 Basmati Rice', '🍗 Chicken', '🧅 Onion', '🌟 Saffron', '🫒 Ghee', '🥛 Yogurt', '💚 Cardamom', '🌶️ Red Chili'],
  'Mirchi Ka Salan': ['🌶️ Green Chili', '🥜 Peanuts', '🍅 Tomato', '🌿 Sesame', '🧄 Garlic', '🫚 Ginger', '🫒 Oil', '🧂 Salt'],
  'Haleem': ['🫘 Lentils', '🍗 Meat', '🌾 Wheat', '🧅 Onion', '🌶️ Red Chili', '👨‍🍳 Garam Masala', '🫒 Oil', '🧂 Salt'],
  'Nihari': ['🥩 Beef/Lamb', '🍅 Tomato', '🧄 Garlic', '🫚 Ginger', '🌶️ Red Chili', '👨‍🍳 Garam Masala', '🫒 Oil', '🧂 Salt'],
  'Kebab': ['🥩 Meat', '🧅 Onion', '🌶️ Green Chili', '🧄 Garlic', '🌿 Cilantro', '🥛 Yogurt', '🧂 Salt', '👨‍🍳 Garam Masala'],
  'Sheekh Kabab': ['🥩 Ground Meat', '🧅 Onion', '🌶️ Green Chili', '🧄 Garlic', '🌿 Cilantro', '🫚 Ginger', '🧂 Salt', '🥛 Yogurt'],
  'Shami Kabab': ['🥩 Ground Meat', '🫘 Lentils', '🧅 Onion', '🧄 Garlic', '🌶️ Green Chili', '🌿 Cilantro', '🫚 Ginger', '🥚 Egg'],
  'Paya': ['🐑 Lamb Trotters', '🧅 Onion', '🌶️ Red Chili', '🫚 Ginger', '🧄 Garlic', '👨‍🍳 Garam Masala', '💧 Water', '🧂 Salt'],
  'Bihari Litti': ['⚪ Maida', '🫘 Chickpea Flour', '🧅 Onion', '🌶️ Red Chili', '🧄 Garlic', '🌿 Cumin', '🫒 Oil', '🧂 Salt'],
  'Khichdi': ['🍚 Rice', '🫘 Moong Dal', '🧂 Salt', '🌿 Turmeric', '😜 Asafoetida', '🫒 Ghee', '🌶️ Red Chili', '💧 Water'],
  'Kadhi': ['🥛 Yogurt', '🫘 Chickpea Flour', '🧅 Onion', '🌿 Cumin', '🌶️ Red Chili', '🍃 Cilantro', '🧂 Salt', '🌿 Fenugreek'],
  'Pongal': ['🍚 Rice', '🫘 Moong Dal', '🥜 Peanuts', '🧅 Onion', '🌶️ Green Chili', '🫒 Ghee', '🧂 Salt', '💨 Pepper'],
  'Uttam Idli': ['🍚 Rice', '🫘 Urad Dal', '🧂 Salt', '🌿 Fenugreek', '💧 Water', '🥄 Baking Soda', '🫒 Oil', '🌶️ Red Chili'],
  'Appam': ['🍚 Rice', '🥥 Coconut', '🍶 Yeast', '🧂 Salt', '🍬 Sugar', '💧 Water', '🥚 Egg', '🌿 Cilantro'],
  'Puttu': ['⚪ Rice Flour', '🥜 Peanuts', '🌿 Fenugreek', '🧂 Salt', '🌿 Cumin', '💧 Water', '🫒 Oil', '🧅 Onion'],
  'Inippu': ['🫘 Lentils', '🥜 Peanuts', '🍬 Jaggery', '🥥 Coconut', '🌿 Cinnamon', '🎀 Cardamom', '🌰 Nuts', '🫒 Ghee'],
  'Pulihora': ['🍚 Rice', '🌶️ Red Chili', '🌿 Cumin', '🫒 Oil', '🧂 Salt', '🍋 Lemon', '🌿 Cilantro', '🌰 Peanuts'],
  'Avial': ['🥒 Cucumber', '🍌 Plantain', '🥕 Carrot', '🫘 Green Beans', '🥥 Coconut', '🌿 Cumin', '🌶️ Green Chili', '🧂 Salt'],
  'Sambar': ['🍅 Tomato', '🫘 Lentils', '🌶️ Red Chili', '🧂 Salt', '🌿 Cumin', '🌿 Fenugreek', '🍃 Curry Leaves', '🫒 Oil'],
  'Rasam': ['🍅 Tomato', '🌶️ Red Chili', '🧄 Garlic', '🫚 Ginger', '🌿 Cumin', '🌿 Cilantro', '🧂 Salt', '💧 Water'],
  'Chikhalwali': ['🫘 Chickpea Flour', '🍬 Jaggery', '🫒 Ghee', '🥜 Peanuts', '🌰 Nuts', '🎀 Cardamom', '🌟 Saffron', '🧂 Salt'],
  'Puri': ['⚪ Maida', '🫒 Oil', '💧 Water', '🧂 Salt', '😜 Asafoetida', '🫒 Oil for frying', '💨 Baking Soda', '🧅 Onion'],
  'Luchi': ['⚪ Maida', '🥛 Milk', '🧂 Salt', '🫒 Oil', '💨 Baking Soda', '💧 Water', '🌿 Nigella Seeds', '🧅 Onion'],
  'Roti': ['🌾 Wheat Flour', '💧 Water', '🧂 Salt', '🫒 Ghee', '🧅 Onion', '🌿 Cumin', '🌶️ Red Chili', '🔥 Heat'],
  'Naan': ['⚪ Maida', '🧂 Salt', '🥛 Yogurt', '💨 Baking Soda', '🧄 Garlic', '🧅 Onion', '🫒 Butter', '🌿 Cilantro'],
  'Bhakri': ['🌾 Jowar Flour', '💧 Water', '🧂 Salt', '🫒 Oil', '🧅 Onion', '🌿 Cumin', '🌶️ Red Chili', '🔥 Heat'],
  'Makki Ki Roti': ['🌾 Corn Flour', '🌾 Wheat Flour', '💧 Water', '🧂 Salt', '🫒 Ghee', '🧅 Onion', '🌿 Cilantro', '🔥 Heat'],
  'Poori': ['⚪ Maida', '🫘 Semolina', '🥛 Yogurt', '🧂 Salt', '🫒 Oil', '💨 Baking Soda', '💧 Water', '🔥 Heat'],
  'Baati': ['⚪ Maida', '🫘 Semolina', '🧂 Salt', '🫒 Ghee', '🍬 Jaggery', '🌰 Nuts', '💧 Water', '🔥 Heat'],
  'Chakli': ['🌾 Rice Flour', '🫘 Lentil Flour', '🌌 Black Sesame', '🧂 Salt', '🌿 Cumin', '🌶️ Red Chili', '🫒 Oil', '💧 Water'],
  'Bhujia': ['🫘 Chickpea Flour', '🌶️ Red Chili', '🧂 Salt', '🌿 Cumin', '👨‍🍳 Garam Masala', '🫒 Oil', '🌿 Asafoetida', '💧 Water'],
  'Murukku': ['🌾 Rice Flour', '🫘 Urad Dal', '🌿 Cumin', '🌶️ Red Chili', '🫒 Oil', '🧂 Salt', '🌿 Fenugreek', '🌌 Black Sesame'],
  'Bonda': ['🫘 Chickpea Flour', '🥔 Potato', '🧅 Onion', '🌶️ Green Chili', '🧂 Salt', '🌿 Cumin', '🫒 Oil for frying', '💧 Water'],
  'Medu Vada': ['🫘 Urad Dal', '🌶️ Green Chili', '🧅 Onion', '🧂 Salt', '🌿 Cumin', '🫒 Oil for frying', '🌶️ Pepper', '💧 Water'],
  'Gujhia': ['⚪ Maida', '🫒 Ghee', '🥜 Peanuts', '🍬 Jaggery', '🧂 Salt', '🌰 Nuts', '🎀 Cardamom', '🌟 Saffron'],
  'Barfi': ['🧀 Khoya', '🍬 Sugar', '🫒 Ghee', '🌰 Nuts', '💨 Milk Powder', '🎀 Cardamom', '🌟 Saffron', '💨 Salt'],
  'Petha': ['🍈 Ash Gourd', '🍬 Sugar', '🌟 Saffron', '🎀 Cardamom', '🧤 Alum', '💧 Water', '🌰 Nuts', '🫒 Oil'],
  'Kalakand': ['🧀 Khoya', '🍬 Sugar', '🌿 Ricotta Cheese', '🌟 Saffron', '🎀 Cardamom', '🌰 Nuts', '🫒 Ghee', '🧂 Salt'],
  'Rasogulla': ['🧀 Chenna (Milk Solids)', '🌾 Semolina', '🍬 Sugar', '🌟 Saffron', '🎀 Cardamom', '💧 Water', '🍋 Lemon Juice', '🧂 Salt'],
  'Sandesh': ['🧀 Chenna', '🍬 Sugar', '🌿 Ricotta', '🎀 Cardamom', '🌟 Saffron', '🌰 Nuts', '🫒 Ghee', '🧂 Salt'],
  'Peda': ['🧀 Khoya', '🍬 Sugar', '🫒 Ghee', '🌰 Nuts', '🎀 Cardamom', '💨 Milk Powder', '⚡ Condensed Milk', '🧂 Salt'],
  'Burfi': ['🧀 Khoya', '🍬 Sugar', '🫒 Ghee', '🌰 Nuts', '🎀 Cardamom', '🌟 Saffron', '💨 Milk Powder', '🧂 Salt'],
  'Payesh': ['🍚 Rice', '🥛 Milk', '🍬 Sugar', '🌿 Cinnamon', '🎀 Cardamom', '🫒 Ghee', '🌟 Saffron', '🌰 Nuts'],
  'Kesari': ['🌾 Semolina', '🫒 Ghee', '🍬 Sugar', '🌟 Saffron', '🎀 Cardamom', '🌰 Nuts', '💧 Water', '🧂 Salt'],
};

// Grand list of all recipes
const allRecipes = Object.keys(recipeIngredients).sort();

function generateTemplate(recipeName) {
    const ingredients = recipeIngredients[recipeName] || [
        '🥘 Primary Ingredient',
        '🧂 Salt',
        '🫒 Oil',
        '🧅 Onion',
        '🌶️ Spices'
    ];

    const instructions = [
        'Gather all ingredients',
        'Prepare the main ingredient',
        'Add spices and seasonings',
        'Cook until done',
        'Serve hot and enjoy'
    ];

    const kebabName = recipeName.toLowerCase().replace(/\s+/g, '-');
    
    let ingredientCards = ingredients.map(ing => {
        return '                    <div class="ingredient-card">' + ing + '</div>';
    }).join('\n');
    
    let instructionItems = instructions.map((inst, idx) => {
        return '                        <li class="instruction-item">\n' +
               '                            <div class="instruction-number">' + (idx + 1) + '</div>\n' +
               '                            <div class="instruction-text">' + inst + '</div>\n' +
               '                        </li>';
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${recipeName} - Ruchique 🍽️</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            min-height: 100vh;
            position: relative;
        }

        .navbar {
            background: linear-gradient(90deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            padding: 0.5rem 0;
        }

        .navbar-brand {
            color: #fff !important;
            font-size: 1.8rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .autocomplete-container {
            position: relative;
            flex: 1;
            margin: 0 20px;
            max-width: 400px;
        }

        #searchInput {
            width: 100%;
            padding: 8px 15px;
            border: none;
            border-radius: 20px;
            outline: none;
            background: rgba(255,255,255,0.95);
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            font-size: 0.9rem;
        }

        #searchInput:focus {
            box-shadow: 0 4px 12px rgba(255,215,0,0.5);
            background: #fff;
        }

        #suggestionsList {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #fff;
            border-radius: 8px;
            list-style: none;
            margin-top: 5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            max-height: 300px;
            overflow-y: auto;
            z-index: 1000;
            display: none;
        }

        #suggestionsList li {
            padding: 10px 15px;
            cursor: pointer;
            border-bottom: 1px solid #eee;
            transition: background 0.2s;
        }

        #suggestionsList li:hover {
            background: #fff3cd;
            color: #d4af37;
        }

        #suggestionsList li:last-child {
            border-bottom: none;
        }

        .navbar-nav {
            margin-left: auto;
            align-items: center;
        }

        .language-selector {
            padding: 6px 12px;
            border: 1px solid #d4af37;
            border-radius: 5px;
            background: rgba(255,255,255,0.1);
            color: #fff;
            cursor: pointer;
            font-size: 0.9rem;
            margin-left: 10px;
        }

        .language-selector:hover {
            background: rgba(255,215,0,0.2);
        }

        .container-custom {
            max-width: 1000px;
            margin: 30px auto;
            padding: 0 15px;
        }

        .recipe-header {
            background: rgba(255,255,255,0.95);
            border-radius: 15px;
            padding: 40px 30px;
            text-align: center;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            margin-bottom: 30px;
        }

        .recipe-title {
            font-size: 2.5rem;
            color: #1a1a2e;
            font-weight: bold;
            margin-bottom: 10px;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }

        .recipe-description {
            color: #666;
            font-size: 1.1rem;
            margin-bottom: 20px;
        }

        .recipe-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }

        .ingredients-section, .instructions-section {
            background: rgba(255,255,255,0.95);
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .section-title {
            font-size: 1.8rem;
            color: #1a1a2e;
            margin-bottom: 20px;
            border-bottom: 3px solid #d4af37;
            padding-bottom: 10px;
            text-align: center;
        }

        .ingredients-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        .ingredient-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 15px;
            border-radius: 8px;
            font-weight: 500;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .ingredient-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.3);
        }

        .instructions-list {
            list-style: none;
        }

        .instruction-item {
            display: flex;
            gap: 15px;
            margin-bottom: 15px;
            align-items: flex-start;
        }

        .instruction-number {
            background: #d4af37;
            color: #1a1a2e;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
        }

        .instruction-text {
            padding-top: 5px;
            font-size: 1rem;
            color: #333;
        }

        .button-container {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin: 30px 0;
            flex-wrap: wrap;
        }

        .btn-custom {
            padding: 12px 30px;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 1rem;
            text-decoration: none;
            display: inline-block;
        }

        .btn-primary-custom {
            background: linear-gradient(90deg, #667eea, #764ba2);
            color: white;
            box-shadow: 0 4px 12px rgba(102,126,234,0.4);
        }

        .btn-primary-custom:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(102,126,234,0.6);
            text-decoration: none;
            color: white;
        }

        .btn-secondary-custom {
            background: #fff;
            color: #667eea;
            border: 2px solid #667eea;
        }

        .btn-secondary-custom:hover {
            background: #667eea;
            color: white;
            transform: translateY(-2px);
            text-decoration: none;
        }

        footer {
            background: #1a1a2e;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 50px;
        }

        #google_translate_element {
            display: none;
        }

        @media (max-width: 768px) {
            .recipe-content {
                grid-template-columns: 1fr;
            }

            .recipe-title {
                font-size: 1.8rem;
            }

            .ingredients-grid {
                grid-template-columns: 1fr;
            }

            .button-container {
                flex-direction: column;
            }

            .btn-custom {
                width: 100%;
            }

            .autocomplete-container {
                max-width: 100%;
                margin: 10px 0;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">🍽️ Ruchique</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="autocomplete-container">
                    <input type="text" id="searchInput" placeholder="Search recipes..." autocomplete="off">
                    <ul id="suggestionsList"></ul>
                </div>
                <div class="navbar-nav">
                    <select id="languageSelector" class="language-selector">
                        <option value="en">English</option>
                        <option value="te">Telugu</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>
            </div>
        </div>
    </nav>

    <div class="container-custom">
        <div class="recipe-header">
            <h1 class="recipe-title">${recipeName}</h1>
            <p class="recipe-description">A delicious traditional Indian dish</p>
        </div>

        <div class="recipe-content">
            <div class="ingredients-section">
                <h2 class="section-title">📋 Ingredients</h2>
                <div class="ingredients-grid">
${ingredientCards}
                </div>
            </div>

            <div class="instructions-section">
                <h2 class="section-title">👨‍🍳 Instructions</h2>
                <ul class="instructions-list">
${instructionItems}
                </ul>
            </div>
        </div>

        <div class="button-container">
            <a href="/" class="btn-custom btn-secondary-custom">← Back to Home</a>
            <a href="https://www.youtube.com/results?search_query=${recipeName}+recipe" target="_blank" class="btn-custom btn-primary-custom">📺 Watch Video</a>
        </div>
    </div>

    <div id="google_translate_element"></div>

    <footer>
        <p>&copy; 2024 Ruchique - Indian Recipes. All rights reserved. Made with ❤️</p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        // Improved search functionality
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

// Update all recipe templates
const templateDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');

let count = 0;
allRecipes.forEach(recipe => {
    const filename = recipe.toLowerCase().replace(/\s+/g, '-') + '.html';
    const filePath = path.join(templateDir, filename);
    const content = generateTemplate(recipe);
    
    try {
        fs.writeFileSync(filePath, content, 'utf8');
        count++;
    } catch (err) {
        console.log('✗ Failed to update ' + filename);
    }
});

console.log('\n==== Update Complete ====');
console.log('✓ Updated: ' + count + ' recipe files with unique ingredients');
console.log('✓ Each recipe now has authentic, unique ingredients');
console.log('✓ Professional UI with ingredient cards maintained');
