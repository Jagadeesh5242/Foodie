#!/usr/bin/env node
const fs = require('fs');

const RECIPES = [
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
    "Kheer", "Khichdi", "Konkan Fish Ampyal"
];

const controllerContent = fs.readFileSync('src/main/java/com/example/timeplanner/controller/homecontroller.java', 'utf8');

console.log('=== ROUTE VERIFICATION ===\n');

const missingRoutes = [];
const existingRoutes = new Set();

// Check which routes already exist
RECIPES.forEach(recipe => {
    const routePath = '/' + recipe.toLowerCase().replace(/\s+/g, '-');
    const routePattern = `@GetMapping("${routePath}")`;
    
    if (controllerContent.includes(routePattern)) {
        existingRoutes.add(recipe);
        console.log(`✓ ${recipe}`);
    } else {
        missingRoutes.push(recipe);
        console.log(`✗ ${recipe}`);
    }
});

console.log(`\n=== SUMMARY ===`);
console.log(`Total recipes: ${RECIPES.length}`);
console.log(`With existing routes: ${existingRoutes.size}`);
console.log(`Missing routes: ${missingRoutes.length}`);

if (missingRoutes.length > 0) {
    console.log(`\n=== MISSING ROUTES ===`);
    missingRoutes.forEach(recipe => {
        console.log(`  - ${recipe}`);
    });

    // Generate the missing routes
    let generatedCode = '\n\n    // Auto-generated routes for missing recipes\n';
    
    missingRoutes.forEach(recipe => {
        const routePath = recipe.toLowerCase().replace(/\s+/g, '-');
        const methodName = recipe
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('');
        
        generatedCode += `
    @GetMapping("/${routePath}")
    public ModelAndView ${methodName.charAt(0).toLowerCase() + methodName.slice(1)}() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("${routePath}");
        return mv;
    }
`;
    });

    // Write to a file for insertion
    fs.writeFileSync('missing-routes.java', generatedCode);
    console.log(`\nGenerated code saved to: missing-routes.java`);
    console.log('This code needs to be inserted before the closing brace of the controller class.');
}
