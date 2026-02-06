const fs = require('fs');
const path = require('path');

// Read the controller file to get all existing routes
const controllerContent = fs.readFileSync('./src/main/java/com/example/timeplanner/controller/homecontroller.java', 'utf8');

// Extract all @GetMapping routes
const routeMatches = controllerContent.match(/@GetMapping\("([^"]+)"\)/g);
const existingRoutes = new Set(routeMatches.map(r => r.match(/@GetMapping\("([^"]+)"\)/)[1]));

// Get all HTML template files
const templatesDir = './src/main/resources/templates';
const htmlFiles = fs.readdirSync(templatesDir)
    .filter(file => file.endsWith('.html') && file !== 'index.html')
    .sort();

// Convert filename to route URL (e.g., "butter-chicken.html" -> "/butter-chicken")
const missingRoutes = [];
const existingRouteFiles = [];

htmlFiles.forEach(file => {
    const routeName = '/' + file.replace('.html', '');
    
    if (!existingRoutes.has(routeName)) {
        missingRoutes.push({
            file: file,
            route: routeName,
            methodName: file.replace('.html', '').replace(/-([a-z])/g, (g) => g[1].toUpperCase())
        });
    } else {
        existingRouteFiles.push(routeName);
    }
});

console.log('===== ROUTE ANALYSIS =====\n');
console.log(`Total HTML files: ${htmlFiles.length}`);
console.log(`Existing routes: ${existingRoutes.size}`);
console.log(`Missing routes: ${missingRoutes.length}\n`);

if (missingRoutes.length > 0) {
    console.log('MISSING ROUTES (need @GetMapping added):\n');
    
    missingRoutes.forEach(item => {
        console.log(`  • ${item.file}`);
        console.log(`    Route: ${item.route}`);
        console.log(`    Method: ${item.methodName}()\n`);
    });
    
    // Generate Java code for missing routes
    console.log('\n===== JAVA CODE TO ADD =====\n');
    
    missingRoutes.forEach(item => {
        console.log(`    @GetMapping("${item.route}")`);
        console.log(`    public ModelAndView ${item.methodName}() {`);
        console.log(`        ModelAndView mv = new ModelAndView();`);
        console.log(`        mv.setViewName("${item.file.replace('.html', '')}");`);
        console.log(`        return mv;`);
        console.log(`    }\n`);
    });
}
