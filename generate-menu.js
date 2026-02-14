const fs = require('fs');
const path = require('path');

// Get all recipe HTML files
const templateDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');
const files = fs.readdirSync(templateDir).filter(f => f.endsWith('.html') && f !== 'menu.html');

// Extract recipe names from filenames
const recipes = files.map(file => {
  const name = file.replace('.html', '');
  // Convert kebab-case to Title Case
  const title = name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    filename: file,
    name: title,
    link: '/' + name
  };
}).sort((a, b) => a.name.localeCompare(b.name));

// Group recipes by first letter
const groupedRecipes = {};
recipes.forEach(recipe => {
  const firstLetter = recipe.name.charAt(0).toUpperCase();
  if (!groupedRecipes[firstLetter]) {
    groupedRecipes[firstLetter] = [];
  }
  groupedRecipes[firstLetter].push(recipe);
});

// Create menu HTML
const menuHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Menu - All Recipes</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
        }

        .navbar {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            padding: 15px 0;
        }

        .navbar-brand {
            font-weight: 900;
            font-size: 1.5em;
            color: white !important;
        }

        .navbar-brand i {
            margin-right: 10px;
        }

        .lang-selector {
            min-height: 44px;
            font-size: 16px;
            -webkit-appearance: none;
            background-color: white;
            border: 2px solid #667eea;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .lang-selector:hover {
            background-color: #f5f5f5;
        }

        .lang-selector:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
        }

        .menu-container {
            max-width: 1400px;
            margin: 40px auto;
            padding: 20px;
        }

        .menu-header {
            text-align: center;
            margin-bottom: 50px;
            animation: slideDown 0.6s ease;
        }

        .menu-header h1 {
            font-size: 3em;
            font-weight: 900;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
        }

        .menu-header p {
            font-size: 1.2em;
            color: #666;
            margin-bottom: 20px;
        }

        .search-box {
            max-width: 500px;
            margin: 0 auto 30px;
            position: relative;
        }

        .search-box input {
            width: 100%;
            padding: 15px 20px 15px 45px;
            font-size: 1em;
            border: 2px solid #667eea;
            border-radius: 50px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.1);
        }

        .search-box input:focus {
            outline: none;
            border-color: #764ba2;
            box-shadow: 0 4px 25px rgba(102, 126, 234, 0.2);
        }

        .search-box i {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #667eea;
            font-size: 1.2em;
        }

        .recipe-count {
            text-align: center;
            color: #999;
            margin-bottom: 30px;
            font-size: 1.1em;
        }

        .recipe-section {
            margin-bottom: 40px;
            animation: fadeIn 0.6s ease;
        }

        .section-letter {
            font-size: 2em;
            font-weight: 900;
            color: #667eea;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #667eea;
            display: inline-block;
        }

        .recipe-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .recipe-card {
            background: white;
            border-radius: 12px;
            padding: 20px;
            text-decoration: none;
            color: inherit;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            border-left: 5px solid transparent;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .recipe-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
            border-left-color: #667eea;
            color: inherit;
            text-decoration: none;
        }

        .recipe-icon {
            font-size: 2em;
            min-width: 50px;
            text-align: center;
        }

        .recipe-info h3 {
            margin: 0 0 5px 0;
            color: #333;
            font-weight: 700;
            font-size: 1.1em;
        }

        .recipe-info p {
            margin: 0;
            color: #999;
            font-size: 0.9em;
        }

        .no-results {
            text-align: center;
            padding: 40px;
            color: #999;
            font-size: 1.2em;
        }

        .footer {
            text-align: center;
            padding: 30px;
            color: #999;
            margin-top: 50px;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .stats {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .stat-box {
            text-align: center;
        }

        .stat-number {
            font-size: 2.5em;
            font-weight: 900;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stat-label {
            color: #999;
            font-size: 0.95em;
        }

        @media (max-width: 768px) {
            .menu-header h1 {
                font-size: 2em;
            }

            .recipe-grid {
                grid-template-columns: 1fr;
            }

            .stats {
                gap: 20px;
            }

            .stat-number {
                font-size: 1.8em;
            }
        }

        .hidden {
            display: none;
        }

        .lang-selector {
            min-height: 44px;
            font-size: 16px;
            -webkit-appearance: none;
            appearance: none;
            background-position: right 10px center;
            background-repeat: no-repeat;
            padding-right: 35px;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="/">
                <i class="fas fa-utensils"></i>Time Planner
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            <i class="fas fa-home"></i> Home
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/menu">
                            <i class="fas fa-book"></i> Menu
                        </a>
                    </li>
                </ul>
                <select id="lang-selector" class="form-control lang-selector ml-3" style="width: 150px;">
                    <option value="en">English</option>
                    <option value="hi">हिंदी</option>
                    <option value="te">తెలుగు</option>
                    <option value="ja">日本語</option>
                </select>
            </div>
        </div>
    </nav>

    <div class="menu-container">
        <div class="menu-header">
            <h1>🍽️ Restaurant Menu</h1>
            <p>Explore our extensive collection of authentic recipes</p>
            
            <div class="stats">
                <div class="stat-box">
                    <div class="stat-number">${recipes.length}</div>
                    <div class="stat-label">Total Recipes</div>
                </div>
                <div class="stat-box">
                    <div class="stat-number">${Object.keys(groupedRecipes).length}</div>
                    <div class="stat-label">Categories</div>
                </div>
                <div class="stat-box">
                    <div class="stat-number">4</div>
                    <div class="stat-label">Languages</div>
                </div>
            </div>
        </div>

        <div class="search-box">
            <i class="fas fa-search"></i>
            <input 
                type="text" 
                id="searchInput" 
                placeholder="Search recipes by name... 🔍"
                aria-label="Search recipes"
            >
        </div>

        <div class="recipe-count">
            <span id="resultCount">Showing all <strong>${recipes.length}</strong> recipes</span>
        </div>

        <div id="recipesContainer">
            ${Object.keys(groupedRecipes).sort().map(letter => {
                const letterHTML = groupedRecipes[letter].map(recipe => `
                            <a href="${recipe.link}" class="recipe-card" data-recipe="${recipe.name.toLowerCase()}">
                                <div class="recipe-icon">🍛</div>
                                <div class="recipe-info">
                                    <h3>${recipe.name}</h3>
                                    <p>Click to view recipe</p>
                                </div>
                            </a>
                        `).join('');
                return `
                <div class="recipe-section" data-letter="${letter}">
                    <div class="section-letter">${letter}</div>
                    <div class="recipe-grid">
                        ${letterHTML}
                    </div>
                </div>
            `;
            }).join('')}
        </div>

        <div id="noResults" class="no-results hidden">
            <i class="fas fa-search" style="font-size: 3em; color: #ccc; display: block; margin-bottom: 15px;"></i>
            <p>No recipes found matching your search.</p>
            <p style="font-size: 0.9em; margin-top: 10px;">Try searching with different keywords.</p>
        </div>
    </div>

    <div class="footer">
        <p>&copy; 2024 Time Planner - All Recipes | Made with ❤️ for Food Lovers</p>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/google-translate-element@0/element.js"></script>
    <script src="/js/translation.js"></script>

    <script>
        // Search functionality
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const recipeCards = document.querySelectorAll('.recipe-card');
            const sections = document.querySelectorAll('.recipe-section');
            let visibleCount = 0;

            recipeCards.forEach(card => {
                const recipeName = card.getAttribute('data-recipe');
                if (recipeName.includes(searchTerm)) {
                    card.parentElement.parentElement.style.display = '';
                    visibleCount++;
                } else {
                    card.parentElement.parentElement.style.display = 'none';
                }
            });

            // Hide empty sections
            sections.forEach(section => {
                const visibleCards = section.querySelectorAll('.recipe-card:not(.hidden)');
                const cards = section.querySelectorAll('.recipe-card');
                const hiddenCards = section.querySelectorAll('.recipe-card[style*="display: none"]');
                
                if (hiddenCards.length === cards.length) {
                    section.style.display = 'none';
                } else {
                    section.style.display = '';
                }
            });

            // Update result count and show/hide no results message
            const resultCount = document.getElementById('resultCount');
            const noResults = document.getElementById('noResults');
            
            if (visibleCount === 0) {
                resultCount.style.display = 'none';
                noResults.classList.remove('hidden');
            } else {
                resultCount.style.display = '';
                resultCount.innerHTML = \`Showing <strong>\${visibleCount}</strong> of <strong>\${recipeCards.length}</strong> recipes\`;
                noResults.classList.add('hidden');
            }
        });

        // Clear search on clicking a recipe
        document.querySelectorAll('.recipe-card').forEach(card => {
            card.addEventListener('click', function() {
                document.getElementById('searchInput').value = '';
            });
        });
    </script>
</body>
</html>`;

// Save menu.html
const menuPath = path.join(templateDir, 'menu.html');
fs.writeFileSync(menuPath, menuHTML);

console.log('✅ Menu page created successfully!');
console.log(`📊 Total recipes listed: ${recipes.length}`);
console.log(`📂 Location: ${menuPath}`);
console.log(`🔗 Access at: /menu`);
console.log('\n✨ Features:');
console.log('  ✓ All recipes organized alphabetically');
console.log('  ✓ Real-time search functionality');
console.log('  ✓ Mobile responsive design');
console.log('  ✓ Restaurant-style presentation');
console.log('  ✓ Language selector (4 languages)');
console.log('  ✓ Statistics display');
