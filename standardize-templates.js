const fs = require('fs');
const path = require('path');

// Professional standard HTML template for all recipes
const getStandardTemplate = (recipe) => `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>${recipe.name} - Ruchique 🍽️</title>
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
            backdrop-filter: blur(10px);
        }

        .navbar-brand {
            font-size: 1.7rem;
            font-weight: 900;
            color: #fff !important;
            letter-spacing: 1px;
            text-decoration: none;
        }

        .navbar-brand:hover {
            color: #ffc107 !important;
        }

        .navbar a, .navbar-nav .nav-link {
            color: #fff !important;
            margin: 0 10px;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .navbar-nav .nav-link:hover {
            color: #ffc107 !important;
        }

        .search-container {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 1;
            max-width: 400px;
            margin: 0 20px;
        }

        #searchInput {
            width: 100%;
            padding: 10px 15px;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 25px;
            background: rgba(255,255,255,0.1);
            color: white;
            font-size: 14px;
            transition: all 0.3s ease;
            min-height: 44px;
            font-size: 16px;
            -webkit-appearance: none;
        }

        #searchInput::placeholder {
            color: rgba(255,255,255,0.6);
        }

        #searchInput:focus {
            outline: none;
            border-color: #ffc107;
            background: rgba(255,255,255,0.15);
            box-shadow: 0 0 15px rgba(255,193,7,0.3);
        }

        .lang-selector {
            min-height: 44px;
            font-size: 16px;
            -webkit-appearance: none;
            appearance: none;
            background-color: rgba(255,255,255,0.1);
            color: white;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 8px;
            padding: 8px 12px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .lang-selector:hover {
            background-color: rgba(255,255,255,0.15);
            border-color: #ffc107;
        }

        .lang-selector:focus {
            outline: none;
            border-color: #ffc107;
            box-shadow: 0 0 15px rgba(255,193,7,0.3);
        }

        .lang-selector option {
            background-color: #333;
            color: white;
        }

        .container-main {
            max-width: 1200px;
            margin: 40px auto;
            padding: 20px;
        }

        .recipe-header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
        }

        .recipe-header h1 {
            font-size: 2.5em;
            font-weight: 900;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .recipe-header p {
            font-size: 1.1em;
            opacity: 0.9;
            margin: 0;
        }

        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 40px;
        }

        .card-section {
            background: rgba(255,255,255,0.95);
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
        }

        .card-section:hover {
            box-shadow: 0 15px 50px rgba(0,0,0,0.2);
            transform: translateY(-5px);
        }

        .card-section h2 {
            color: #667eea;
            margin-bottom: 20px;
            font-weight: 700;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .ingredients-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .ingredient-chip {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 10px 16px;
            border-radius: 20px;
            font-size: 0.95em;
            display: inline-block;
            transition: all 0.3s ease;
        }

        .ingredient-chip:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .instructions-list {
            list-style: none;
        }

        .instruction-step {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
            align-items: flex-start;
        }

        .step-number {
            width: 40px;
            height: 40px;
            min-width: 40px;
            background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            margin-top: 2px;
        }

        .step-text {
            flex: 1;
            color: #555;
            line-height: 1.6;
            font-size: 0.95em;
        }

        .footer {
            background: rgba(0,0,0,0.3);
            color: white;
            text-align: center;
            padding: 30px;
            margin-top: 50px;
            border-radius: 10px;
        }

        @media (max-width: 768px) {
            body {
                padding-top: 300px;
            }

            .content-grid {
                grid-template-columns: 1fr;
            }

            .recipe-header h1 {
                font-size: 1.8em;
            }

            .search-container {
                max-width: 250px;
                margin: 0 10px;
            }

            .navbar {
                padding: 0.5rem 0;
            }

            .card-section {
                padding: 20px;
            }
        }

        .search-results-container {
            margin-top: 20px;
            padding: 20px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            color: white;
            display: none;
        }

        .search-results-container.active {
            display: block;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                🍛 Time Planner
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <a class="nav-link" href="/menu">
                    <i class="fas fa-book"></i> Menu
                </a>
                <div class="search-container">
                    <i class="fas fa-search" style="color: white;"></i>
                    <input 
                        type="text" 
                        id="searchInput" 
                        placeholder="Search recipes..." 
                        aria-label="Search recipes"
                    >
                </div>
                <div class="ml-auto d-flex align-items-center">
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

    <div class="container-main">
        <div class="recipe-header">
            <h1>${recipe.name}</h1>
            <p>🍽️ Authentic Indian Recipe</p>
        </div>

        <div class="content-grid">
            <div class="card-section">
                <h2><i class="fas fa-list"></i> Ingredients</h2>
                <div class="ingredients-list">
                    ${recipe.ingredients.map(ing => 
                        `<div class="ingredient-chip">🥘 ${ing}</div>`
                    ).join('')}
                </div>
            </div>

            <div class="card-section">
                <h2><i class="fas fa-utensils"></i> Instructions</h2>
                <ol class="instructions-list">
                    ${recipe.instructions.map((inst, idx) => 
                        `<li class="instruction-step">
                            <div class="step-number">${idx + 1}</div>
                            <div class="step-text">${inst}</div>
                        </li>`
                    ).join('')}
                </ol>
            </div>
        </div>
    </div>

    <div class="footer">
        <p>&copy; 2024 Time Planner - All Recipes Reserved. Happy Cooking! 👨‍🍳</p>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="/js/translation.js"></script>

    <script>
        // Search functionality
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm.length > 2) {
                // Fetch search suggestions from API
                fetch('/api/recipes/search?keyword=' + encodeURIComponent(searchTerm))
                    .then(response => response.json())
                    .then(data => {
                        // Show suggestions or redirect
                        if (data.length > 0) {
                            console.log('Found recipes:', data);
                        }
                    });
            }
        });

        // Language selector
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

module.exports = { getStandardTemplate };
