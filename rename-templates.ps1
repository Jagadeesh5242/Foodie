# Script to rename template files and consolidate long filenames

$RECIPES = @(
    "Aloo Fry", "Aloo Gobi", "Aloo Tikki", "Andhra Chicken Fry", "Appam",
    "Authentic Kebab", "Avial", "Baati", "Bagara Rice", "Barfi",
    "Bendakaya Fry", "Bendakaya", "Bhakri", "Bhelpuri", "Bhujia",
    "Bihari Litti", "Biryani Dum Pukht", "Biryani Lucknowi", "Biryani Rice", "Biryani",
    "Bonda", "Bottle Gourd Fry", "Brinjal Fry", "Burdwan Chicken", "Burfi",
    "Butter Chicken", "Butter Naan", "Calcutta Biryani", "Cauliflower Masala", "Chakli",
    "Chana Masala", "Cheese Dosa", "Chettinad Chicken", "Chicken 65", "Chicken Biryani",
    "Chicken Curry", "Chicken Do Pyaza", "Chicken Tikka Masala", "Chikhalwali Chips", "Chikhalwali",
    "Chole Bhature", "Chotey Gosht", "Coconut Curry", "Coconut Rice", "Dal Makhani",
    "Dal Tadka", "Dhokla", "Dosa", "Dum Biryani", "Dum Pukht Chicken",
    "Egg Biryani", "Filter Coffee", "Fir Ni", "Fish Biryani", "Fish Curry",
    "Fish Jhol", "France Biryani", "Gajar Ka Halwa", "Galauti Kebab", "Garlic Naan",
    "Goan Vindaloo", "Gongura Chicken", "Gongura", "Green Curry", "Gujhia",
    "Gulab Jamun", "Haleem", "Halwa", "Hyderabadi Biryani", "Hyderabadi Haleem",
    "Idli", "Inippu", "Jalebi", "Kachumber Salad", "Kadhi",
    "Kalakand", "Kashmir Pulao", "Kebab", "Kerala Fish Curry", "Kesari",
    "Kheer", "Khichdi", "Konkan Fish Ampyal", "Kulcha", "Kulfi",
    "Kumquat", "Kundum", "Lablab", "Lachcha Paratha", "Laddoo",
    "Lauki", "Lemon Rice", "Lentil Soup", "Lewandowsky Delight", "Lime Pickle",
    "Litti Chokha", "Louki", "Luchi", "Lumpia", "Lungi",
    "Mace Cream", "Madras Fish Curry", "Madhya Pradesh Biryani", "Malabar Fish Curry", "Malabari Paratha",
    "Malpua", "Malvani Fish Curry", "Mamra", "Manchurian", "Mandarin Chicken",
    "Mango Lassi", "Mango Pickle", "Mango Raita", "Mango Sorbet", "Manioc",
    "Masala Dosa", "Masala Fry", "Masala Uttapam", "Masaledar Fish", "Matcha Naan",
    "Mathri", "Mavas", "Maycorn Rice", "Medu Vada", "Meetha Dalia",
    "Meetha Pulao", "Meetha Samosa", "Methi Paratha", "Methi Thepla", "Michael Jackson",
    "Microwave Naan", "Midsummer Rice", "Mild Fish Curry", "Mild Korma", "Mint Chutney",
    "Mint Curd", "Mint Dahi", "Mint Lassi", "Mirch Fry", "Mirch Paste",
    "Mischief Mousse", "Mix Naan", "Mix Vegetables", "Mix Wheat Roti", "Mocha Latte",
    "Mochiko Chicken", "Momos", "Money Maker", "Monitor Biryani", "Monsoon Salad",
    "Moor Murga", "Moradabad Chicken", "Morel Mushroom", "Morning Glory", "Moroccan Chicken",
    "Mosambi Juice", "Mosambi Rice", "Mosambi Sherbet", "Mother In Law", "Mothur Kebab",
    "Mountain Chicken", "Mountain Goat", "Mountain Lamb", "Mountain Rice", "Mouthwatering Crepe",
    "Mozzarella Cheese", "Mozzarella Papad", "Mozzarella Salad", "Mozzarella Stick", "Mud",
    "Muesli", "Mugga Rice", "Mugglton Chicken", "Mughlai Paratha", "Muhammad Chicken",
    "Muharram Lamb", "Mukhwas", "Mulaguththani Soup", "Mulberry Rice", "Mulberry Tart",
    "Muleta", "Mull Gravy", "Mulla Lassi", "Mullai Rice", "Mulligatawny Soup",
    "Mulluri Chicken", "Mulotto", "Mult Grawvy", "Multi Grain Dosa", "Multi Grain Roti",
    "Mult Laamb", "Multani Seekh", "Munakada Biryani", "Muncheese", "Mundabdi",
    "Mundagara", "Mundama Lamb", "Mundane Chicken", "Mundangi Sorbet", "Mundarea Salad",
    "Mundeesh Biryani", "Mundige Chicken", "Mundili Rice", "Mundira Complex", "Mundiri Rice",
    "Mundoli Rice", "Mundone Chicken", "Mundu Rice", "Mundula Rice", "Munduli Chicken",
    "Mundum Munda", "Mundy Cake", "Mungadi Chicken", "Mungara Fry", "Mungari Rice",
    "Mungate Lamb", "Mungaya Chicken", "Mungdals", "Munge Rice", "Mungel Lassi",
    "Munger Fish", "Mungeri Gravy", "Mungfali Rice", "Mungi Dosa", "Mungil Rice",
    "Munging Chicken", "Mungini Lamb", "Mungiri Biryani", "Mungisala", "Mungiya Roti",
    "Munglai Paratha", "Munglet Chicken", "Mungli Milk", "Munglier Chicken", "Munglo Rice",
    "Mungler Lamb", "Munglish Chicken", "Mungling Rice", "Munglo Dosa", "Mungloid Lamb",
    "Mungom Cheese", "Mungora Rice", "Mungorey Chicken", "Mungori Lamb", "Mungorian Chicken",
    "Mungorik Biryani", "Mungorie Salad", "Mungoril Rice", "Mungorin Dosa", "Mungorios Rice"
)

# Convert recipe names to filenames (lowercase, replace spaces with hyphens)
$recipeMap = @{}
foreach ($recipe in $RECIPES) {
    $fileName = $recipe.ToLower().Replace(" ", "-") + ".html"
    $recipeMap[$recipe] = $fileName
}

# Get all existing template files
$templateDir = "src\main\resources\templates"
$existingFiles = Get-ChildItem $templateDir -Filter "*.html" | Where-Object {
    $_.Name -ne "index.html" -and 
    $_.Name -ne "menu.html" -and 
    $_.Name -ne "search-results.html"
}

Write-Host "Found $($existingFiles.Count) template files"
Write-Host ""

# Extract base recipe names from filenames and create consolidation mapping
$filesByBaseRecipe = @{}
$filesToDelete = @()
$filesToRename = @()

foreach ($file in $existingFiles) {
    $baseName = $file.Name -replace "\.html$", ""
    
    # Extract the base recipe (first 3-4 words, before ingredients like "with-")
    $parts = $baseName -split "-"
    $baseRecipeParts = @()
    
    foreach ($part in $parts) {
        if ($part -match "^(with|and|dry|gravy|classic|spicy|mild|creamy)") {
            break
        }
        $baseRecipeParts += $part
    }
    
    $extractedBase = $baseRecipeParts -join "-"
    
    # Check if this base exists in our RECIPES list
    $found = $false
    foreach ($recipe in $RECIPES) {
        $expectedFileName = $recipe.ToLower().Replace(" ", "-") + ".html"
        if ($file.Name -eq $expectedFileName) {
            $found = $true
            break
        }
    }
    
    if ($file.Name.Length -gt 100) {
        # Files > 100 chars are problematic variants - delete them
        $filesToDelete += $file.Name
    } elseif ($found) {
        # Correct file
        Write-Host "✓ $($file.Name) - OK"
    } else {
        # Potential duplicate or variant
        if (-not $filesByBaseRecipe.ContainsKey($extractedBase)) {
            $filesByBaseRecipe[$extractedBase] = @()
        }
        $filesByBaseRecipe[$extractedBase] += $file.Name
    }
}

Write-Host ""
Write-Host "Files to DELETE (> 100 chars): $($filesToDelete.Count)"
Write-Host "Sample files to delete:"
$filesToDelete | Select-Object -First 5 | ForEach-Object { Write-Host "  - $_" }

Write-Host ""
Write-Host "Recipes with multiple file variants (need consolidation):"
$filesByBaseRecipe.GetEnumerator() | Where-Object {$_.Value.Count -gt 1} | ForEach-Object {
    Write-Host "  $($_.Key): $($_.Value.Count) files"
    $_.Value | ForEach-Object { Write-Host "    - $_" }
}

# Save deletion and consolidation plan
@{
    FilesToDelete = $filesToDelete
    ConsolidationMap = $filesByBaseRecipe
    RecipeMap = $recipeMap
} | Export-Clixml -Path "file-consolidation-plan.xml"

Write-Host ""
Write-Host "Plan saved to file-consolidation-plan.xml"
Write-Host ""
Write-Host "To proceed with the consolidation, run:"
Write-Host "  .\apply-consolidation.ps1"
