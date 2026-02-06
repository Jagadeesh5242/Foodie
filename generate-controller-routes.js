const recipes = require('./recipes-database');

// Generate controller methods for all recipes
console.log('Generating controller routes for all recipes...\n');

let code = '';

recipes.forEach(recipe => {
    // Function name (camelCase)
    const funcNameParts = recipe.urlName.split('-');
    const funcName = funcNameParts.map((part, idx) => 
        idx === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
    ).join('');
    
    code += `    @GetMapping("/${recipe.urlName}")
    public ModelAndView ${funcName}() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("${recipe.urlName}");
        return mv;
    }

`;
});

console.log(`✅ Generated ${recipes.length} controller routes\n`);
console.log('Copy the following code into homecontroller.java after the existing routes:\n');
console.log('═'.repeat(80));
console.log(code);
console.log('═'.repeat(80));

// Also update the RECIPES list
let recipesList = '';
recipes.forEach(recipe => {
    recipesList += `            "${recipe.name}",\n`;
});

console.log('\n\nAlso update the RECIPES list to include all recipes. Replace the existing list with:\n');
console.log('═'.repeat(80));
console.log(`    private static final List<String> RECIPES = Arrays.asList(
${recipesList}    );\n`);
console.log('═'.repeat(80));
