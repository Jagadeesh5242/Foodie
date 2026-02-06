$templatePath = "e:\Time planner\timeplanner\src\main\resources\templates"

$recipes = @(
    "Medhu Vada",
    "Upma",
    "Puttu",
    "Filter Coffee",
    "Cheese Dosa",
    "Roti",
    "Kulcha",
    "Puri",
    "Khichdi",
    "Saag Roti",
    "Makai Roti",
    "Tortilla",
    "Lachcha Paratha",
    "Butter Naan",
    "Kheer",
    "Rasmalai",
    "Barfi",
    "Halwa",
    "Jalebi",
    "Laddu",
    "Rasgulla",
    "Payesh",
    "Fir Ni",
    "Malpua",
    "Mohan Thal",
    "Milk Cake",
    "Peda",
    "Gajar Ka Halwa",
    "Spring Roll",
    "Samosa Chat",
    "Bhelpuri",
    "Pani Puri",
    "Sev Tameta",
    "Chikhalwali Chips",
    "Masala Peanuts",
    "Onion Bhajiya",
    "Aloo Tikki",
    "Paneer Tikka Masala",
    "Mutter Paneer",
    "Paneer Chakli",
    "Mushroom Curry",
    "Cauliflower Masala",
    "Tomato Based Gravy",
    "Green Curry",
    "Red Curry",
    "Nihari",
    "Hyderabadi Haleem",
    "Nawabi Keema",
    "Dum Pukht Chicken",
    "Burdwan Chicken",
    "Lucknowi Kebab",
    "Kashmir Pulao",
    "Dum Biryani",
    "Authentic Kebab",
    "Seekh Kebab",
    "Galauti Kebab"
)

$htmlTemplate = @'
<!DOCTYPE html><html><head><meta charset="UTF-8"><title>{0} - Ruchique</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"><script src="https://cdn.jsdelivr.net/npm/google-translate-element@0/element.js"></script><style>body{{font-family:"Segoe UI";background:linear-gradient(135deg,#667eea,#764ba2);min-height:100vh}}.navbar{{background:linear-gradient(90deg,rgba(32,32,46,0.98),rgba(50,50,80,0.98));padding:.9rem 0}}.navbar-brand{{font-size:1.7rem;font-weight:900;color:#fff!important}}.container{{margin:5rem auto 3rem;max-width:900px}}.recipe-card{{background:rgba(255,255,255,0.95);border-radius:20px;padding:3rem;box-shadow:0 10px 40px rgba(0,0,0,0.3);border-left:6px solid #ffc107}}h1{{color:#667eea;font-weight:900;font-size:2.5rem}}h2{{color:#667eea;font-weight:800;margin-top:2rem;border-bottom:3px solid #ffc107;padding-bottom:.5rem}}.ingredient-list{{background:#f9f9f9;padding:1.5rem;border-radius:12px}}.ingredient-item{{padding:.8rem 0;border-bottom:1px solid #e0e0e0}}.btn{{border-radius:25px;font-weight:700;padding:12px 30px;margin-top:2rem;margin-right:1rem;border:none}}.btn-secondary{{background:linear-gradient(135deg,#ff6b6b,#ee5a3f);color:#fff}}.btn-primary{{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}}.footer{{position:fixed;bottom:0;width:100%;background:rgba(0,0,0,0.8);color:#fff;text-align:center;padding:1rem}}.lang-selector{{float:right;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:#fff;padding:8px 15px;border-radius:20px;margin:5px}}</style></head><body><nav class="navbar"><div class="container-fluid"><a class="navbar-brand" href="/">R Ruchique</a><select class="lang-selector"><option value="en">English</option><option value="te">Telugu</option><option value="hi">Hindi</option></select></div></nav><div class="container"><div class="recipe-card"><h1>{0}</h1><p><strong>Authentic Indian Recipe</strong></p><div style="background:rgba(255,193,7,0.1);border-left:4px solid #ffc107;padding:1.5rem;border-radius:10px;margin:2rem 0"><p>This is an authentic Indian recipe prepared with traditional methods and ingredients.</p></div><h2>Ingredients</h2><div class="ingredient-list"><div class="ingredient-item">Main ingredient - 1 portion</div><div class="ingredient-item">Spices - To taste</div><div class="ingredient-item">Salt - 1 tsp</div><div class="ingredient-item">Water or Oil - As needed</div></div><h2>Instructions</h2><ol><li>Prepare all ingredients</li><li>Heat oil or ghee in a pan</li><li>Add spices and aromatics</li><li>Add main ingredients</li><li>Cook until done</li><li>Adjust seasoning</li><li>Serve hot with accompaniments</li></ol><button class="btn btn-secondary" onclick="alert('"'"'Please share a video link!'\'')">Watch Video</button><a href="/" class="btn btn-primary">Back Home</a></div></div><div class="footer"><p>&copy; 2026 Ruchique</p></div><div id="google_translate_element" style="display:none"></div><script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script><script>function googleTranslateElementInit(){{try{{new google.translate.TranslateElement({{pageLanguage:"en",includedLanguages:"en,te,hi",autoDisplay:false}},"google_translate_element");}}catch(e){{}}}}</script></body></html>
'@

foreach ($recipe in $recipes) {
    $fileName = $recipe.ToLower().Replace(" ", "-") + ".html"
    $filePath = Join-Path $templatePath $fileName
    $html = $htmlTemplate -f $recipe
    Set-Content -Path $filePath -Value $html
    Write-Host "Created: $fileName"
}

Write-Host "All $($recipes.Count) recipe templates created successfully!"
