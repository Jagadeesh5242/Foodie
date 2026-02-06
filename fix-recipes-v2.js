const fs = require('fs');
const path = require('path');

const templatesPath = 'src/main/resources/templates';

const recipes = [
    "samosa","butter-chicken","chicken-tikka-masala","paneer-tikka","dal-makhani","rajma",
    "rogan-josh","tandoori-chicken","aloo-gobi","biryani","dosa","idli","vada","uttapam",
    "appam","masala-dosa","medhu-vada","upma","puttu","filter-coffee","chicken-biryani",
    "mutton-biryani","fish-biryani","france-biryani","paneer-biryani","egg-biryani",
    "munakada-biryani","vankai-biryani","panasa-kaya-biryani","ulava-caru-biryani","gongura",
    "pesarattu","bagara-rice","lemon-rice","tamarind-rice","coconut-rice","bendakaya-fry",
    "brinjal-fry","bottle-gourd-fry","chikhalwali","aloo-fry","chicken-65","gongura-chicken",
    "andhra-chicken-fry","chicken-curry","mutton-curry","fish-curry","shrimp-curry","cheese-dosa",
    "roti","kulcha","puri","butter-naan","khichdi","saag-roti","makai-roti","tortilla",
    "lachcha-paratha","kheer","rasmalai","barfi","halwa","jalebi","laddu","rasgulla","payesh",
    "fir-ni","malpua","mohan-thal","milk-cake","peda","gajar-ka-halwa","spring-roll","samosa-chat",
    "bhelpuri","pani-puri","sev-tameta","chikhalwali-chips","masala-peanuts","onion-bhajiya",
    "aloo-tikki","paneer-tikka-masala","mutter-paneer","paneer-chakli","mushroom-curry",
    "cauliflower-masala","tomato-based-gravy","green-curry","red-curry","nihari","coconut-curry",
    "hyderabadi-haleem","nawabi-keema","dum-pukht-chicken","burdwan-chicken","lucknowi-kebab",
    "kashmir-pulao","dum-biryani","authentic-kebab","seekh-kebab","galauti-kebab","chole-bhature"
];

function toTitle(str) {
    return str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

const fixedScript = `// Enhanced JavaScript for search and language functionality
        document.addEventListener('DOMContentLoaded', function() {
            const searchInput = document.getElementById('searchInput');
            const suggestionsList = document.getElementById('suggestionsList');
            const languageSelector = document.getElementById('languageSelector');
            
            if (!searchInput || !suggestionsList) return;

            // Clear search input on page load
            searchInput.value = '';
            suggestionsList.innerHTML = '';
            suggestionsList.style.display = 'none';

            // Search functionality with debounce
            let searchTimeout;
            
            function performSearch(keyword) {
                if (!keyword.trim()) {
                    suggestionsList.style.display = 'none';
                    suggestionsList.innerHTML = '';
                    return;
                }

                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(async () => {
                    try {
                        const response = await fetch(\\\`/api/recipes/search?keyword=\\\${encodeURIComponent(keyword)}\\\`);
                        if (!response.ok) throw new Error('Search failed');
                        
                        const recipes = await response.json();
                        suggestionsList.innerHTML = '';
                        
                        if (recipes && recipes.length > 0) {
                            recipes.forEach(recipe => {
                                const li = document.createElement('li');
                                li.textContent = recipe;
                                li.style.cursor = 'pointer';
                                li.addEventListener('click', () => {
                                    const recipePath = recipe.toLowerCase().replace(/\\s+/g, '-');
                                    searchInput.value = '';
                                    suggestionsList.innerHTML = '';
                                    suggestionsList.style.display = 'none';
                                    window.location.href = '/' + recipePath;
                                });
                                suggestionsList.appendChild(li);
                            });
                            suggestionsList.style.display = 'block';
                        } else {
                            suggestionsList.innerHTML = '<li style="color: #999; padding: 14px 20px;">No recipes found<\/li>';
                            suggestionsList.style.display = 'block';
                        }
                    } catch (error) {
                        console.error('Search error:', error);
                        suggestionsList.innerHTML = '<li style="color: #999; padding: 14px 20px;">Error searching<\/li>';
                        suggestionsList.style.display = 'block';
                    }
                }, 300);
            }

            // Input event for searching
            searchInput.addEventListener('input', (e) => {
                performSearch(e.target.value.trim());
            });

            // Focus event to show suggestions
            searchInput.addEventListener('focus', (e) => {
                if (e.target.value.trim().length > 0) {
                    performSearch(e.target.value.trim());
                }
            });

            // Handle Enter key
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    clearTimeout(searchTimeout);
                    const keyword = searchInput.value.trim();
                    if (keyword) {
                        const recipePath = keyword.toLowerCase().replace(/\\s+/g, '-');
                        searchInput.value = '';
                        suggestionsList.innerHTML = '';
                        suggestionsList.style.display = 'none';
                        window.location.href = '/' + recipePath;
                    }
                }
            });

            // Close suggestions when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.autocomplete-container') && 
                    !e.target.closest('#suggestionsList')) {
                    suggestionsList.style.display = 'none';
                }
            });

            // Language selector
            if (languageSelector) {
                languageSelector.addEventListener('change', function(e) {
                    const selectedLang = e.target.value;
                    const langMap = {
                        'en': 'English',
                        'te': 'Telugu',
                        'hi': 'Hindi'
                    };
                    
                    try {
                        const combo = document.querySelector('.goog-te-combo');
                        if (combo) {
                            combo.value = langMap[selectedLang] || 'English';
                            combo.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                    } catch (err) {
                        console.log('Language change error:', err);
                    }
                });
            }
        });

        // Google Translate initialization
        function googleTranslateElementInit() {
            try {
                new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,te,hi',
                    autoDisplay: false
                }, 'google_translate_element');
            } catch (e) {
                console.log('Translate init error');
            }
        }

        // Retry initialization
        setTimeout(() => {
            if (window.google && window.google.translate) {
                googleTranslateElementInit();
            }
        }, 1500);`;

function generateTemplate(name) {
    return `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\${name} - Ruchique</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/google-translate-element@0/element.js"><\/script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { height: 100%; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-image: url('./logodes.jpeg'); background-size: cover; background-position: center; background-attachment: fixed; min-height: 100vh; position: relative; padding-bottom: 100px; }
        body::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.35); pointer-events: none; z-index: 0; }
        
        /* Navbar Styles */
        .navbar { background: linear-gradient(90deg, rgba(32,32,46,0.98) 0%, rgba(50,50,80,0.98) 100%); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); padding: 0.6rem 0; position: relative; z-index: 100; }
        .navbar-brand { font-size: 1.5rem; font-weight: 900; color: #fff !important; letter-spacing: 1px; transition: color 0.3s ease; }
        .navbar-brand:hover { color: #ffc107 !important; }
        .navbar a { color: #fff !important; transition: all 0.3s ease; font-weight: 600; padding: 8px 12px; border-radius: 20px; font-size: 0.9rem; }
        .navbar a:hover { color: #ffc107 !important; background: rgba(255, 255, 255, 0.1); }
        
        /* Language Selector */
        .lang-selector { background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.3); color: white; padding: 6px 12px; border-radius: 20px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; font-size: 0.85rem; }
        .lang-selector:hover { background: rgba(255, 255, 255, 0.25); border-color: #ffc107; }
        .lang-selector option { background: #333; color: white; }
        
        /* Search Container */
        .autocomplete-container { position: relative; display: inline-flex; width: 280px; margin: 0 0.5rem; }
        #searchInput { padding: 10px 16px; border: none; border-radius: 28px; width: 100%; outline: none; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); font-size: 0.9rem; transition: all 0.3s ease; background: white; }
        #searchInput:focus { box-shadow: 0 6px 20px rgba(255, 193, 7, 0.4); }
        #suggestionsList { position: absolute; top: 100%; left: 0; right: 0; border: none; background-color: white; list-style: none; padding: 0; margin: 5px 0 0 0; max-height: 250px; overflow-y: auto; border-radius: 0 0 28px 28px; display: none; z-index: 1000; box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
        #suggestionsList li { padding: 12px 16px; cursor: pointer; transition: all 0.2s; border-bottom: 1px solid #f0f0f0; font-weight: 500; font-size: 0.9rem; }
        #suggestionsList li:hover { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
        #suggestionsList li:last-child { border-bottom: none; }
        
        /* Content */
        .recipe-container { max-width: 1000px; margin: 1.5rem auto; position: relative; z-index: 10; padding: 0 12px; }
        .recipe-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2.5rem 1.5rem; border-radius: 20px; text-align: center; margin-bottom: 1.5rem; box-shadow: 0 8px 30px rgba(0,0,0,0.3); animation: slideInDown 0.6s ease; }
        @keyframes slideInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        .recipe-header h1 { font-size: 2.2rem; font-weight: 900; margin-bottom: 0.5rem; text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3); letter-spacing: 1px; }
        .recipe-header p { font-size: 1rem; margin: 0; opacity: 0.95; font-weight: 500; }
        
        /* Sections */
        .about-section, .ingredients-section, .instructions-section { background: rgba(255, 255, 255, 0.95); padding: 1.5rem; border-radius: 15px; margin-bottom: 1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
        .about-section { border-left: 5px solid #667eea; }
        .ingredients-section { border-left: 5px solid #ff9800; }
        .instructions-section { border-left: 5px solid #4caf50; }
        
        .about-section h3, .ingredients-section h3, .instructions-section h3 { font-weight: 700; margin-bottom: 1rem; font-size: 1.2rem; display: flex; align-items: center; gap: 8px; }
        .about-section h3 { color: #667eea; }
        .ingredients-section h3 { color: #ff9800; }
        .instructions-section h3 { color: #4caf50; }
        
        .about-section p { color: #555; line-height: 1.8; font-size: 0.95rem; }
        
        /* Ingredients Grid */
        .ingredient-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }
        .ingredient-item { display: flex; align-items: center; gap: 12px; padding: 1rem; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 12px; transition: all 0.3s ease; }
        .ingredient-item:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
        .ingredient-icon { font-size: 1.8rem; flex-shrink: 0; min-width: 45px; text-align: center; }
        .ingredient-text { flex: 1; font-size: 0.9rem; font-weight: 500; line-height: 1.4; }
        
        /* Instructions */
        .instruction-item { display: flex; gap: 12px; margin-bottom: 1.2rem; padding-bottom: 1.2rem; border-bottom: 1px solid #eee; }
        .instruction-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .step-number { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; font-size: 1rem; }
        .step-text { flex: 1; color: #444; line-height: 1.7; font-size: 0.95rem; padding-top: 3px; }
        
        /* Buttons */
        .button-section { display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem; flex-wrap: wrap; }
        .recipe-btn { padding: 11px 26px; border: none; border-radius: 25px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: white; }
        .btn-home { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .btn-home:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4); }
        .btn-video { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .btn-video:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(245, 87, 108, 0.4); }
        
        /* Footer */
        .footer { position: fixed; bottom: 0; width: 100%; text-align: center; padding: 1rem; color: white; background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 100%); z-index: 10; font-size: 0.85rem; font-weight: 500; }
        
        /* Tablet & Mobile Responsive */
        @media (max-width: 991px) {
            .navbar { padding: 0.5rem 0; }
            .navbar-brand { font-size: 1.3rem; }
            .autocomplete-container { width: 100%; max-width: 230px; margin: 0.25rem 0; }
            .navbar .collapse { padding: 0.5rem 0; }
            .navbar a { padding: 6px 10px; font-size: 0.85rem; }
            .lang-selector { padding: 5px 10px; font-size: 0.8rem; margin-left: 5px; }
        }
        
        @media (max-width: 768px) {
            .recipe-header { padding: 2rem 1.2rem; }
            .recipe-header h1 { font-size: 1.8rem; }
            .recipe-header p { font-size: 0.95rem; }
            
            .recipe-container { padding: 0 10px; margin: 1rem auto; }
            
            .about-section, .ingredients-section, .instructions-section { padding: 1.2rem; margin-bottom: 1.2rem; }
            
            .ingredient-grid { grid-template-columns: 1fr; gap: 0.8rem; }
            .ingredient-item { padding: 0.8rem; }
            .ingredient-icon { font-size: 1.5rem; }
            .ingredient-text { font-size: 0.85rem; }
            
            .instruction-item { gap: 10px; }
            .step-number { width: 34px; height: 34px; font-size: 0.9rem; }
            .step-text { font-size: 0.9rem; }
            
            .button-section { gap: 0.8rem; flex-direction: column; }
            .recipe-btn { width: 100%; justify-content: center; padding: 10px 20px; }
            
            .footer { padding: 0.8rem; font-size: 0.8rem; }
            
            .navbar-brand { font-size: 1.2rem; }
            .autocomplete-container { max-width: 100%; width: 95%; margin: 0.3rem auto; }
        }
        
        @media (max-width: 576px) {
            .navbar { padding: 0.4rem 0; }
            .navbar-brand { font-size: 1.1rem; letter-spacing: 0; }
            
            .recipe-header { padding: 1.5rem 1rem; margin-bottom: 1rem; }
            .recipe-header h1 { font-size: 1.6rem; margin-bottom: 0.25rem; }
            .recipe-header p { font-size: 0.9rem; }
            
            .autocomplete-container { width: 90%; }
            #searchInput { padding: 8px 14px; font-size: 0.85rem; }
            #suggestionsList li { padding: 10px 14px; font-size: 0.85rem; }
            
            .recipe-container { padding: 0 8px; }
            
            .about-section h3, .ingredients-section h3, .instructions-section h3 { font-size: 1.1rem; }
            
            .ingredient-grid { gap: 0.6rem; }
            .ingredient-item { padding: 0.7rem; gap: 10px; }
            .ingredient-icon { font-size: 1.4rem; min-width: 40px; }
            .ingredient-text { font-size: 0.8rem; }
            
            .instruction-item { gap: 8px; margin-bottom: 1rem; padding-bottom: 1rem; }
            .step-number { width: 32px; height: 32px; font-size: 0.85rem; }
            .step-text { font-size: 0.85rem; }
            
            .recipe-btn { padding: 9px 18px; font-size: 0.85rem; gap: 6px; }
            
            .footer { padding: 0.6rem; font-size: 0.75rem; }
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid px-2">
            <a class="navbar-brand" href="/">🍽️ Ruchique</a>
            <button class="navbar-toggler btn-sm" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent">
                <span class="navbar-toggler-icon"><\/span>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
                <div class="autocomplete-container">
                    <input type="text" id="searchInput" name="keyword" placeholder="Search recipes...">
                    <ul id="suggestionsList"><\/ul>
                </div>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="/"><i class="fas fa-home"><\/i> Home<\/a><\/li>
                    <li class="nav-item">
                        <select class="lang-selector" id="languageSelector">
                            <option value="en">English<\/option>
                            <option value="te">Telugu<\/option>
                            <option value="hi">Hindi<\/option>
                        <\/select>
                    <\/li>
                <\/ul>
            <\/div>
        <\/div>
    <\/nav>

    <div class="recipe-container">
        <div class="recipe-header">
            <h1>\${name}<\/h1>
            <p>A delicious Indian recipe prepared with authentic spices<\/p>
        <\/div>

        <div class="about-section">
            <h3><i class="fas fa-book"><\/i> About<\/h3>
            <p>This is a classic Indian recipe prepared with traditional spices and authentic cooking techniques. Perfect for serving at family gatherings or special occasions. Enjoy the wonderful flavors and aromas of India!<\/p>
        <\/div>

        <div class="ingredients-section">
            <h3><i class="fas fa-shopping-basket"><\/i> Ingredients<\/h3>
            <div class="ingredient-grid">
                <div class="ingredient-item"><div class="ingredient-icon">🥔<\/div><div class="ingredient-text">Main ingredient<\/div><\/div>
                <div class="ingredient-item"><div class="ingredient-icon">🌶️<\/div><div class="ingredient-text">Spices & seasonings<\/div><\/div>
                <div class="ingredient-item"><div class="ingredient-icon">🧅<\/div><div class="ingredient-text">Aromatics (onion, garlic)<\/div><\/div>
                <div class="ingredient-item"><div class="ingredient-icon">🫒<\/div><div class="ingredient-text">Oil or Ghee<\/div><\/div>
                <div class="ingredient-item"><div class="ingredient-icon">🧂<\/div><div class="ingredient-text">Salt to taste<\/div><\/div>
                <div class="ingredient-item"><div class="ingredient-icon">🍅<\/div><div class="ingredient-text">Fresh produce<\/div><\/div>
            <\/div>
        <\/div>

        <div class="instructions-section">
            <h3><i class="fas fa-tasks"><\/i> Instructions<\/h3>
            <div class="instruction-item"><div class="step-number">1<\/div><div class="step-text">Gather and prepare all ingredients as needed<\/div><\/div>
            <div class="instruction-item"><div class="step-number">2<\/div><div class="step-text">Heat oil or ghee in a pan and add whole spices<\/div><\/div>
            <div class="instruction-item"><div class="step-number">3<\/div><div class="step-text">Add aromatics and cook until fragrant<\/div><\/div>
            <div class="instruction-item"><div class="step-number">4<\/div><div class="step-text">Add the main ingredients and mix well<\/div><\/div>
            <div class="instruction-item"><div class="step-number">5<\/div><div class="step-text">Cook on medium heat until fully cooked<\/div><\/div>
            <div class="instruction-item"><div class="step-number">6<\/div><div class="step-text">Adjust seasoning and garnish before serving<\/div><\/div>
        <\/div>

        <div class="button-section">
            <a href="/" class="recipe-btn btn-home"><i class="fas fa-home"><\/i> Back to Home<\/a>
            <button class="recipe-btn btn-video" onclick="alert('Video coming soon!')"><i class="fas fa-play-circle"><\/i> Watch Video<\/button>
        <\/div>
    <\/div>

    <div class="footer">
        <p>&copy; 2026 Ruchique - Delicious Indian Recipes <i class="fas fa-utensils" style="margin: 0 5px;"><\/i><\/p>
    <\/div>

    <div id="google_translate_element" style="display: none;"><\/div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"><\/script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"><\/script>
    <script>
${fixedScript}
    <\/script>
<\/body>
<\/html>`;
}

let updated = 0;
let skipped = 0;

recipes.forEach(recipe => {
    const file = path.join(templatesPath, `${recipe}.html`);
    try {
        if (fs.existsSync(file)) {
            const name = toTitle(recipe);
            const content = generateTemplate(name);
            fs.writeFileSync(file, content, 'utf8');
            console.log(`✓ Updated: ${recipe}.html`);
            updated++;
        } else {
            skipped++;
        }
    } catch (err) {
        console.error(`✗ ${recipe}.html: ${err.message}`);
    }
});

console.log(`\n==== Update Complete ====`);
console.log(`Updated: ${updated} recipe files`);
console.log(`\nImprovements:`);
console.log(`✓ Enhanced search - works on repeated searches without reload`);
console.log(`✓ Better mobile responsiveness (tablet & phone)`);
console.log(`✓ Improved navbar for all screen sizes`);
console.log(`✓ Better button styling on mobile`);
console.log(`✓ Fixed footer positioning`);
console.log(`✓ Optimized ingredient grid for mobile`);
console.log(`✓ Better viewport meta tag for mobile`);
