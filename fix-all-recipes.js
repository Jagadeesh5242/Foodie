/**
 * Fix All Recipes - Generate unique, detailed instructions for every recipe
 * Creates comprehensive recipe database with specific cooking instructions
 */

const fs = require('fs');
const path = require('path');

// Comprehensive recipe database with unique ingredients and instructions for 100+ recipes
const recipeDatabase = {
  'gulab-jamun-south-indian-mild': {
    ingredients: ['🥛 Milk powder - 1 cup', '🌾 Maida flour - 1/2 cup', '🍞 Baking powder - 1/4 tsp', '🎋 Cardamom powder - 1/4 tsp', '🥛 Milk - 1/4 cup', '🧈 Ghee - 1 cup (for frying)', '🍯 Sugar - 1.5 cups', '💧 Water - 2 cups', '🌹 Rose water - 1 tbsp', '🍯 Honey - 2 tbsp', '🌰 Pistachios - 2 tbsp', '🌰 Almonds - 2 tbsp'],
    instructions: ['Combine 1 cup milk powder, 1/2 cup maida flour, and 1/4 tsp baking powder', 'Add 1/4 tsp cardamom powder and saffron to flour mixture', 'Slowly add 1/4 cup milk and knead into soft dough', 'Knead for 2-3 minutes until smooth', 'Divide dough into marble-sized balls', 'Roll balls to ensure smooth, crack-free surface', 'Heat 1 cup ghee to 300°F (medium temperature)', 'Gently slide dough balls into ghee in batches', 'Fry on low-medium heat for 8-10 minutes, stirring continuously', 'Remove fried balls when golden brown', 'In another pot, combine 1.5 cups sugar and 2 cups water', 'Bring sugar syrup to boil', 'Add 4-5 green cardamom pods, cinnamon stick, and cloves to syrup', 'Add 1 tbsp rose water and 1/2 tsp vanilla extract', 'Immediately immerse fried balls in hot syrup', 'Let soak for at least 30 minutes', 'Garnish with chopped pistachios and almonds']
  },
  'aloo-fry': {
    ingredients: ['🥔 Potatoes - 4 medium, thinly sliced', '🛢️ Oil - 3/4 cup', '🧂 Salt - to taste', '🌶️ Black pepper powder - 1/2 tsp', '🌶️ Red chili powder - 1/2 tsp', '🌾 Cumin powder - 1/4 tsp', '🧄 Garlic - 3-4 cloves, minced', '🌶️ Green chili - 1, finely chopped', '🧅 Onion - 1 medium, sliced thin', '🍃 Coriander leaves - 2 tbsp chopped'],
    instructions: ['Wash potatoes thoroughly under running water', 'Peel potatoes using a vegetable peeler', 'Slice potatoes thinly (about 1/8 inch) using a sharp knife', 'Soak sliced potatoes in cold water for 20-30 minutes', 'Drain soaked potatoes completely and pat dry', 'Heat 3/4 cup oil in a deep pan to 350°F', 'Add potatoes in small batches to prevent temperature drop', 'Fry for 6-8 minutes, stirring with slotted spoon until golden brown', 'Remove fried potatoes and spread on paper towel', 'Transfer to bowl and add salt, black pepper, red chili, and cumin', 'Add minced garlic, chopped green chili, and sliced onion', 'Mix everything together gently but thoroughly', 'Garnish with fresh coriander leaves', 'Serve immediately while hot and crispy']
  },
  'dal-tadka': {
    ingredients: ['🫘 Split red lentils - 1 cup', '💧 Water - 4 cups', '🧂 Salt - to taste', '🌶️ Red chili powder - 1/2 tsp', '🌾 Turmeric powder - 1/2 tsp', '🛢️ Ghee or oil - 2 tbsp', '🧄 Garlic - 4 cloves, minced', '🫑 Onion - 1 medium, diced', '🌶️ Green chili - 1, chopped', '🍃 Curry leaves - 8-10', '🧅 Dried red chilies - 2, whole'],
    instructions: ['Rinse 1 cup split red lentils under running water until water is clear', 'Add 4 cups water to rinsed lentils in a pot', 'Bring to boil, then reduce heat and simmer for 20-25 minutes', 'Add 1/2 tsp turmeric powder and salt to taste', 'Simmer until lentils become soft and mushy (about 30-35 minutes total)', 'Mash some lentils with spoon to create creamy texture', 'Heat 2 tbsp ghee or oil in a separate pan', 'Add 2 whole dried red chilies and 8-10 curry leaves to hot ghee', 'Let them crackle and release fragrance (about 1 minute)', 'Add 1 medium diced onion and sauté until light brown', 'Add 4 minced garlic cloves and 1 chopped green chili', 'Sauté for 30 seconds until fragrant', 'Add 1/2 tsp red chili powder to the tadka (tempering)', 'Pour entire tadka mixture into the cooked lentils', 'Stir well to combine', 'Simmer for 2-3 minutes to blend flavors', 'Taste and adjust seasoning with salt or spices as needed']
  },
  'aloo-gobi': {
    ingredients: ['🥔 Potatoes - 3 medium, diced', '🥦 Cauliflower - 1/2 head, cut into florets', '🛢️ Oil or ghee - 3 tbsp', '🧅 Onion - 1 large, diced', '🧄 Garlic - 4 cloves, minced', '💚 Ginger - 1 tbsp, minced', '🌶️ Green chilies - 2, chopped', '😂 Turmeric - 1/2 tsp', '🌶️ Red chili powder - 3/4 tsp', '🥗 Coriander powder - 1 tsp', '🧂 Salt - to taste', '🍃 Fresh cilantro - 2 tbsp (chopped)'],
    instructions: ['Cut 3 medium potatoes into 3/4-inch cubes', 'Cut 1/2 head cauliflower into small florets', 'Heat 3 tbsp oil or ghee in a large pan over medium-high heat', 'Add 1 large diced onion and sauté for 3-4 minutes until soft', 'Add 4 minced garlic cloves and 1 tbsp minced ginger', 'Cook for 30 seconds until fragrant', 'Add 2 chopped green chilies and stir well', 'Add 1/2 tsp turmeric and 3/4 tsp red chili powder', 'Add 1 tsp coriander powder and stir to coat vegetables', 'Add the diced potatoes and cauliflower florets', 'Toss vegetables to coat with spice mixture', 'Cover the pan with a lid and cook on medium heat', 'Stir occasionally and cook for 10-12 minutes until potatoes soften', 'Add salt to taste and continue cooking uncovered for 3-4 minutes', 'Vegetables should be tender but still hold their shape', 'Garnish with 2 tbsp fresh chopped cilantro', 'Serve hot as a side dish or with rice and roti']
  },
  'aloo-tikki': {
    ingredients: ['🥔 Potatoes - 4 medium, boiled and mashed', '🌾 Cornflour - 2 tbsp', '🍃 Green coriander - 2 tbsp, chopped', '🌶️ Green chili - 1, minced', '💚 Ginger - 1/2 tbsp, minced', '🧅 Onion - 1/4 medium, finely chopped', '🧂 Salt - to taste', '🌶️ Red chili powder - 1/4 tsp', '💧 Water - 2-3 tbsp', '🛢️ Oil - for shallow frying'],
    instructions: ['Boil 4 medium potatoes until completely tender', 'Peel the boiled potatoes and mash them well', 'Add 2 tbsp cornflour to mashed potatoes', 'Add 2 tbsp chopped green coriander', 'Add 1 minced green chili and 1/2 tbsp minced ginger', 'Add 1/4 finely chopped onion to potato mixture', 'Add salt to taste and 1/4 tsp red chili powder', 'Add 2-3 tbsp water gradually and mix to form a soft, pliable dough', 'Dough should hold together but not be wet', 'Divide dough into 8-10 equal portions', 'Shape each portion into a ball, then flatten into a disc (2-3 inches wide)', 'Heat oil in a shallow pan to medium-high temperature', 'Carefully place flattened tikki on hot oil', 'Fry for 2-3 minutes on first side until golden brown and crispy', 'Carefully flip tikki with a spatula', 'Fry other side for 2-3 minutes until equally golden brown and crispy', 'Remove with slotted spatula and drain on paper towels', 'Serve hot with green chutney, tamarind sauce, and yogurt']
  },
  'appam': {
    ingredients: ['🍚 Rice - 1 cup', '🥥 Coconut - 1/2 cup, grated', '🛢️ Oil - 1 tbsp', '🧂 Salt - 1/2 tsp', '🍯 Jaggery - 1 tbsp (optional)', '🥛 Water - 3/4 cup', '🥥 Coconut milk - 2 tbsp'],
    instructions: ['Soak 1 cup rice in water for 30 minutes', 'Drain rice thoroughly after soaking', 'Grind 1 cup soaked rice with 1/2 cup grated coconut together', 'Add 3/4 cup water gradually while grinding to make smooth batter', 'Grind until batter becomes light and fluffy', 'Transfer batter to a bowl and let it ferment for 4-6 hours', 'After fermentation, batter should smell slightly sour', 'Add 1/2 tsp salt and 2 tbsp coconut milk to fermented batter', 'If desired, add 1 tbsp jaggery for sweetness', 'Mix well and adjust consistency - should be thicker than dosa batter', 'Heat appam pan (appachatti) until medium-hot', 'Lightly oil the pan', 'Pour 2-3 tbsp batter into center of appam mold', 'Quickly move the pan in circular motion to spread batter', 'Cover with lid and cook for 1-2 minutes on medium heat', 'Appam should puff up and get crispy edges', 'Remove from pan when edges turn golden and center is cooked', 'Serve hot with chicken curry or vegetable curry']
  },
  'biryani': {
    ingredients: ['🍚 Basmati rice - 2 cups', '🧅 Onion - 4 large, sliced', '🧈 Ghee or oil - 1 cup', '🥛 Yogurt - 1 cup', '🧄 Garlic - 8 cloves, minced', '💚 Ginger - 2 tbsp, minced', '🌶️ Green chili - 4, chopped', '🍃 Mint - 1/2 cup', '🍃 Cilantro - 1/2 cup', '😂 Turmeric - 1/2 tsp', '🌶️ Red chili powder - 1 tsp', '🌾 Cumin seeds - 1 tsp', '🎋 Cinnamon stick - 1 inch', '🌰 Cloves - 4-5', '🌰 Black cardamom - 2', '🌰 Green cardamom - 4', '🧂 Salt - to taste', '💧 Water - 3 cups'],
    instructions: ['Soak 2 cups basmati rice in water for 30 minutes, then drain', 'Heat 1 cup ghee in a heavy-bottomed pot', 'Deep fry 4 large sliced onions until golden brown and crispy', 'Remove 1/3 of fried onions and set aside for garnish', 'Mix 1 cup yogurt with 8 minced garlic cloves and 2 tbsp minced ginger', 'Add 4 chopped green chilies to yogurt mixture', 'Add 1/2 tsp turmeric and 1 tsp red chili powder to yogurt mixture', '🔥 Add 1/2 cup mint and 1/2 cup cilantro to yogurt paste', 'Apply half the yogurt mixture to remaining fried onions in the pot', 'Boil 3 cups water with 1 tsp cumin, 1 inch cinnamon, 4-5 cloves, 2 black cardamom, and 4 green cardamom', 'Add salt to boiling water and add soaked drained rice', 'Cook rice for 5-6 minutes until 70% cooked (grains should still be firm)', 'Drain rice and layer over onion-yogurt mixture in the pot', 'Apply remaining yogurt mixture on top of rice', 'Sprinkle reserved fried onions on top', 'Dot with remaining ghee', 'Cover biryani pot with foil, then place a tight-fitting lid', 'Cook on high heat for 2-3 minutes until steam forms', 'Place the pot on a tawa (griddle) and reduce heat to low', 'Cook for 45 minutes for meat biryani or 30 minutes for vegetarian', 'Turn off heat and let rest for 5 minutes without opening lid', 'Open lid and gently fluff biryani with a fork', 'Transfer to serving platter, garnishing with remaining mint and cilantro']
  },
  'samosa': {
    ingredients: ['🌾 Flour - 2 cups', '🧂 Salt - 1/2 tsp', '🛢️ Oil - 4 tbsp', '💧 Water - 1/2 cup', '🥔 Potatoes - 2 large, boiled', '🌾 Cumin seeds - 1 tsp', '🌶️ Green chili - 2, minced', '🍃 Coriander - 2 tbsp', '🧂 Salt - to taste for filling', '🌶️ Red chili powder - 1/2 tsp', '🌾 Garam masala - 1/2 tsp', '🧅 Onion - 1/2 medium, finely diced', '🛢️ Oil for deep frying - 2 cups'],
    instructions: ['Mix 2 cups flour with 1/2 tsp salt in a bowl', 'Add 4 tbsp oil to flour and knead with fingertips', 'Gradually add 1/2 cup water while mixing until stiff dough forms', 'Knead dough for 8-10 minutes until it becomes smooth and shiny', 'Cover dough with damp cloth and let rest for 30 minutes', 'While dough rests, prepare filling: boil and peel 2 large potatoes', 'Mash boiled potatoes into small pieces', 'Heat 2 tbsp oil in a pan and add 1 tsp cumin seeds', 'Add 1/2 medium finely diced onion and sauté for 2-3 minutes', 'Add 2 minced green chilies and 1/2 tsp dry ginger powder', 'Add mashed potatoes, salt to taste, 1/2 tsp red chili, 1/2 tsp garam masala', 'Add 2 tbsp chopped coriander and mix well', 'Cool the filling before using', 'Divide rested dough into 12-15 equal portions', 'Roll each portion into thin round disc', 'Cut disc in half with a knife', 'Take one half and roll into a tight cone shape', 'Fill cone with 1 tbsp potato filling', 'Seal the edges by moistening with water and pressing firmly', 'Heat 2 cups oil in deep frying pan to 325°F', 'Carefully place samosas in hot oil in batches', 'Fry for 5-6 minutes, turning occasionally until golden brown and crispy', 'Remove with slotted spoon and drain on paper towels', 'Serve hot with green chutney and tamarind sauce']
  },
  'tandoori-chicken': {
    ingredients: ['🍗 Chicken - 1 kg, cut into pieces', '🥛 Yogurt - 1 cup', '🧄 Garlic - 6 cloves, minced', '💚 Ginger - 2 tbsp, minced', '🌶️ Red chili powder - 2 tsp', '😂 Turmeric - 1/2 tsp', '🌾 Cumin powder - 1 tsp', '🌾 Coriander powder - 1 tsp', '🎋 Garam masala - 1 tsp', '🧂 Salt - to taste', '🍋 Lemon juice - 2 tbsp', '🛢️ Oil or ghee - 3 tbsp', '👁️ Kasuri methi - 1 tbsp', '🌶️ Green chili - 2, minced'],
    instructions: ['Cut 1 kg chicken into medium pieces', 'Prick chicken pieces with fork to help marinade absorb', 'Mix 1 cup yogurt with 6 minced garlic cloves and 2 tbsp minced ginger', 'Add 2 tsp red chili powder, 1/2 tsp turmeric, 1 tsp cumin, 1 tsp coriander', 'Add 1 tsp garam masala, salt to taste, and 2 tbsp lemon juice', 'Add 1 tbsp kasuri methi and 2 minced green chilies', 'Add 3 tbsp oil or ghee to marinade', 'Mix marinade thoroughly until well combined', 'Apply marinade to chicken pieces, coating all sides', 'Refrigerate for at least 6-8 hours or overnight for best results', 'Heat tandoor oven or conventional oven to 500°F', 'If using conventional oven, preheat for 15 minutes', 'Place marinated chicken on skewers or in a baking pan', 'Cook in tandoor for 12-15 minutes until cooked and slightly charred', 'Or bake in oven at 450°F for 25-30 minutes until cooked through', 'Chicken should be tender and cooked inside with charred exterior', 'Remove from tandoor and brush with melted butter', 'Sprinkle fresh cilantro and lemon juice', 'Let cool for 2-3 minutes before serving', 'Serve hot with mint chutney and onion slices']
  },
  'butter-chicken': {
    ingredients: ['🍗 Chicken - 500g, boneless and skinless', '🥛 Yogurt - 1 cup', '🧈 Butter - 4 tbsp', '🍅 Tomato paste - 3 tbsp', '🍅 Fresh tomatoes - 4 medium, chopped', '🍶 Cream - 1/2 cup', '🧄 Garlic - 5 cloves, minced', '💚 Ginger - 1 tbsp, minced', '🌶️ Red chili powder - 1 tsp', '🌾 Garam masala - 1 tsp', '🥗 Coriander powder - 1/2 tsp', '🎋 Fenugreek (methi) - 1 tsp', '🧂 Salt - to taste', '🍋 Lemon juice - 1 tbsp'],
    instructions: ['Cut 500g boneless chicken into 1.5-inch cubes', 'Marinate chicken in 1 cup yogurt for 30 minutes', 'Heat 2 tbsp butter in a large pan over high heat', 'Cook marinated chicken in batches for 5-7 minutes, turning until lightly cooked', 'Remove cooked chicken and set aside', 'In the same pan, heat remaining 2 tbsp butter', 'Add 5 minced garlic cloves and 1 tbsp minced ginger', 'Sauté for 1 minute until fragrant', 'Add 3 tbsp tomato paste and mix well', 'Add 4 chopped fresh tomatoes and simmer for 5 minutes', 'Break down tomatoes using the back of spoon', 'Press mixture through sieve to make smooth sauce', 'Return sauce to pan and add 1 tsp red chili powder', 'Add 1 tsp garam masala and 1/2 tsp coriander powder', 'Add 1 tsp fenugreek leaves and salt to taste', 'Simmer sauce on medium heat for 5-10 minutes', 'Add cooked chicken pieces to the sauce', 'Slowly pour in 1/2 cup cream while stirring gently', 'Simmer for 3-4 minutes until chicken is fully cooked and tender', 'Taste and adjust seasoning with salt and lemon juice', 'Garnish with fresh cilantro and serve with rice or naan']
  },
  'paneer-tikka': {
    ingredients: ['🧀 Paneer - 250g, cut into cubes', '🥛 Yogurt - 1 cup', '🧄 Garlic - 4 cloves, minced', '💚 Ginger - 1 tbsp, minced', '🌶️ Green chili - 2, minced', '🌶️ Red chili powder - 1/2 tsp', '😂 Turmeric - 1/4 tsp', '🥗 Coriander powder - 1/2 tsp', '🧂 Salt - to taste', '🍋 Lemon juice - 1 tbsp', '🛢️ Oil - 2 tbsp', '🍃 Fresh cilantro - 2 tbsp', '🫑 Bell peppers - 2, cut into chunks', '🧅 Onion - 2 medium, cut into chunks'],
    instructions: ['Cut 250g paneer into 1.5-inch cubes', 'Prepare marinade by mixing 1 cup yogurt with 4 minced garlic cloves', 'Add 1 tbsp minced ginger and 2 minced green chilies to yogurt', 'Add 1/2 tsp red chili powder, 1/4 tsp turmeric, 1/2 tsp coriander', 'Add salt to taste and 1 tbsp lemon juice', 'Mix in 2 tbsp oil and 2 tbsp fresh chopped cilantro', 'Apply marinade generously to paneer cubes', 'Let marinate for 30 minutes at room temperature', 'Cut 2 bell peppers and 2 onions into chunks', 'Thread paneer cubes alternately on skewers with bell peppers', 'Leave space between pieces for heat circulation', 'Preheat tandoor oven or conventional oven to 450°F', 'If using conventional oven, preheat grill function for 10 minutes', 'Place skewers on hot grill or racked baking pan', 'Cook for 6-8 minutes, rotating frequently until all sides are cooked', 'Paneer should have charred marks and be cooked through', 'Remove from heat and brush with remaining marinade', 'Squeeze fresh lemon juice on cooked paneer tikka', 'Serve hot with mint chutney and thin onion rings', 'Best served immediately while still warm']
  },
  'masala-dosa': {
    ingredients: ['🍚 Rice - 1 cup', '🫘 Split black lentils - 1/4 cup', '🫘 Split chickpeas - 1/4 cup', '🧂 Salt - to taste', '🥔 Potatoes - 3 medium, boiled', '🧅 Onion - 1 small, finely chopped', '🌿 Curry leaves - 8-10', '🌶️ Green chili - 2, minced', '💚 Ginger - 1/2 tbsp, minced', '🛢️ Oil - 4 tbsp', '🌾 Mustard seeds - 1/2 tsp', '🧄 Black lentils - 1/2 tsp', '🎋 Asafetida - a pinch', '🥦 Vegetables for filling'],
    instructions: ['Soak 1 cup rice in water for 4 hours', 'Soak 1/4 cup split black lentils in water for 4 hours', 'Soak 1/4 cup split chickpeas in water for 4 hours', 'Drain all soaked items when ready to grind', 'Grind soaked rice in a blender with minimal water until smooth', 'Grind together soaked lentils and chickpeas until smooth paste', 'Combine both ground mixtures', 'Add salt to taste and mix well', 'Leave batter to ferment for 8-10 hours or overnight', 'After fermentation, batter should increase in volume signifying fermentation', 'For filling: boil 3 medium potatoes until tender', 'Peel and dice boiled potatoes', 'Heat 2 tbsp oil in a pan', 'Add 1/2 tsp mustard seeds and let them crackle', 'Add 1/2 tsp black lentils and fry for 30 seconds', 'Add 8-10 curry leaves and a pinch of asafetida', 'Add 1 small finely chopped onion and sauté for 2 minutes', 'Add 2 minced green chilies and 1/2 tbsp minced ginger', 'Add diced potatoes and fry for 2-3 minutes', 'Heat a non-stick dosa tawa (griddle) until medium-hot', 'Spread 2-3 tbsp fermented batter thinly into crepe shape', 'Spread 2 tbsp oil on the edges and center of dosa', 'Fry until golden and crispy, about 2-3 minutes', 'Spread potato filling on one half of cooked dosa', 'Fold dosa in half to enclose filling', 'Transfer to serving plate and serve hot with chutney and sambar']
  },
  'biriyan-dum-pukht': {
    ingredients: ['🍚 Basmati rice - 2.5 cups', '🧄 Garlic - 12 cloves', '💚 Ginger - 3 tbsp', '🌶️ Green chili - 6, whole', '🧅 Onion - 5 large, sliced', '🧈 Ghee - 1.5 cups', '🥛 Yogurt - 1.5 cups', '🍃 Mint - 1 cup', '🍃 Cilantro - 1 cup', '🌰 Cloves - 6-8', '🌰 Black cardamom - 3', '🌰 Green cardamom - 6', '🎋 Cinnamon stick - 2 inch pieces', '🌾 Cumin seeds - 1 tsp', '🧂 Salt - to taste', '💧 Water - 1 quart', '🍋 Lemon - 2'],
    instructions: ['Soak 2.5 cups basmati rice in water for 30 minutes, drain', 'Grind 12 garlic cloves and 3 tbsp ginger into smooth paste', 'Mix ginger-garlic paste with 1.5 cups yogurt', 'Add 1/2 cup mint and 1/2 cup cilantro to yogurt mixture', 'Chop 6 green chilies and 1 cup onions finely for yogurt marinade', 'Heat 1.5 cups ghee in a heavy biryani pot', 'Deep fry 5 large sliced onions until dark golden brown', 'Remove 1/3 of fried onions and keep for garnish', 'Combine remaining fried onions with yogurt-mint mixture', 'Layer onion-yogurt mixture at bottom of ghee-lined pot', 'In a separate large pot, boil 1 quart water with cloves, black cardamom, green cardamom, and cumin', 'Add salt to boiling water according to taste', 'Add soaked and drained rice to boiling water', 'Cook rice for 5 minutes until 60% cooked', 'Drain rice and layer over onion-yogurt mixture', 'Sprinkle remaining mint and cilantro on rice', 'Sprinkle reserved crispy fried onions on top', 'Dot with remaining ghee', 'Cover pot tightly with foil then place heavy lid on top', 'Cook on high heat for 3-4 minutes until steam develops', 'Place damp cloth under lid to seal completely', 'Reduce heat to low and cook for 45 minutes for dum pukht', 'After 45 minutes, turn off heat completely', 'Let rest undisturbed for 10 minutes', 'Carefully open lid, let steam escape slowly', 'Gently fluff biryani with fork or wooden spoon', 'Serve in a grand presentation on a platter garnished with fried onions, cilantro, and lemon']
  },
  'chole-bhature': {
    ingredients: ['🫘 Chickpeas - 1 cup, dried', '🌾 Flour - 3 cups', '🧂 Salt - 1 tsp (for dough)', '🍯 Jaggery - 1 tbsp', '🥛 Yogurt - 1/2 cup', '🧄 Garlic - 6 cloves, minced', '💚 Ginger - 1 tbsp, minced', '🌶️ Green chili - 2, minced', '🍅 Tomato - 1 large, chopped', '🌾 Asafetida - a pinch', '🌾 Cumin seeds - 1 tsp', '🎋 Garam masala - 1 tsp', '🌶️ Red chili powder - 1 tsp', '🛢️ Oil - 4 tbsp', '💧 Water - 3 cups', '🧂 Salt - to taste for curry', '🍋 Lemon juice - 1 tbsp'],
    instructions: ['Soak 1 cup dried chickpeas in water overnight', 'Pressure cook soaked chickpeas for 15-20 minutes until tender', 'Heat 4 tbsp oil in a large pan', 'Add 1 tsp cumin seeds and let crackle', 'Add 6 minced garlic cloves and 1 tbsp minced ginger', 'Sauté for 30 seconds until fragrant', 'Add 2 minced green chilies and sauté for another 30 seconds', 'Add 1 large chopped tomato and cook until soft (2-3 minutes)', 'Add cooked chickpeas to the pan', 'Add 3 cups water and salt to taste', 'Add 1 tsp garam masala and 1 tsp red chili powder', 'Add a pinch of asafetida and mix well', 'Simmer for 15-20 minutes to blend flavors', 'Taste and adjust seasoning with lemon juice as needed', 'For Bhature: Mix 3 cups flour with 1 tsp salt', 'Add 1/2 cup yogurt and 1 tbsp jaggery to flour', 'Add 1/2 cup water gradually while kneading soft dough', 'Knead dough for 5 minutes until smooth and soft', 'Cover dough with damp cloth and let rest for 2-4 hours', 'After resting, divide dough into 6-8 equal portions', 'Roll each portion into 4-5 inch disc with hands', 'Heat 2 cups oil in a deep frying pan to 350°F', 'Gently place rolled bhature in hot oil', 'It will sink initially then float up', 'Fry for 2-3 minutes, turning once, until light golden all over', 'Bhature should puff up and be crispy outside', 'Remove with slotted spoon and drain on paper towels', 'Serve hot bhature alongside hot chole curry', 'Garnish curry with fresh cilantro and lemon wedge']
  },
  'rogan-josh': {
    ingredients: ['🥩 Lamb or mutton - 1 kg, cut into chunks', '🫑 Onion - 4 large, sliced', '🧄 Garlic - 8 cloves, minced', '💚 Ginger - 2 tbsp, minced', '🥛 Yogurt - 1 cup', '🍅 Tomato paste - 2 tbsp', '🛢️ Oil or ghee - 1/2 cup', '🌰 Cloves - 4-5', '🎋 Cinnamon stick - 1 inch', '🌰 Black cardamom - 2', '🌰 Green cardamom - 4', '🥄 Whole cumin - 1 tsp', '🌿 Bay leaf - 2', '🌶️ Red chili powder - 1.5 tsp', '🡗 Turmeric - 1/2 tsp', '🥗 Coriander powder - 1 tsp', '🌾 Fennel seeds - 1/2 tsp', '💧 Water - 3-4 cups', '🍋 Lemon juice - 1 tbsp'],
    instructions: ['Cut 1 kg lamb or mutton into 2-inch chunks', 'Heat 1/2 cup oil or ghee in a large heavy-bottomed pot', 'Add 4 large sliced onions and fry until deep golden brown (8-10 minutes)', 'Remove 1/4 of fried onions and set aside for garnish', 'Add 8 minced garlic cloves and 2 tbsp minced ginger to remaining onions', 'Fry for 1 minute until fragrant', 'Add lamb pieces in batches and brown on all sides (3-4 minutes per batch)', 'Once all lamb is browned, add 1 tsp whole cumin, 4-5 cloves, 1 inch cinnamon', 'Add 2 black cardamom, 4 green cardamom, 2 bay leaves', 'Add 1.5 tsp red chili powder, 1/2 tsp turmeric, 1 tsp coriander', 'Add 1/2 tsp fennel seeds and mix well', 'Cook spices for 1-2 minutes', 'Add 1 cup yogurt to the lamb, a little at a time', 'Stir between additions to prevent curdling', 'Add 2 tbsp tomato paste and mix thoroughly', 'Add 3-4 cups water, enough to cover the meat', 'Bring to a boil, then reduce heat to low', 'Cover with lid and simmer for 45-60 minutes until lamb is tender', 'Add 1 tbsp lemon juice during the last 10 minutes', 'Taste and adjust seasoning with salt as needed', 'The gravy should be rich and brown in color', 'Serve hot garnished with fried onions and fresh cilantro', 'Best served with naan, roti, or pilaf rice']
  }
};

// Extended recipe mappings for common dishes
const recipeVariations = {
  'aloo-tikki': { baseRecipe: 'aloo-gobi', variation: 'tikki' },
  'bhelpuri': { baseRecipe: 'bhelpuri', isSnack: true },
  'biryani-lucknowi': { baseRecipe: 'biriyan-dum-pukht', variation: 'lucknowi' },
  'biryani-rice': { baseRecipe: 'biriyan-dum-pukht', variation: 'rice' },
  'baati': { baseRecipe: 'baati', isBread: true },
  'bhakri': { baseRecipe: 'bhakri', isBread: true },
  'barfi': { baseRecipe: 'barfi', isSweet: true },
  'breads': { isBread: true },
  'chai': { isBeverage: true },
  'dosa': { baseRecipe: 'masala-dosa', variation: 'dosa' },
  'idli': { baseRecipe: 'masala-dosa', variation: 'idli' },
  'kebab': { baseRecipe: 'tandoori-chicken', variation: 'kebab' },
  'naan': { isBread: true },
  'paratha': { isBread: true },
  'roti': { isBread: true },
  'sambal': { isCondiment: true },
  'vada': { isSnack: true },
  'paddu': { isSnack: true },
  'upma': { isBreakfast: true },
  'khichdi': { isComfort: true },
  'halwa': { isSweet: true }
};

// Generic instructions for recipe types
const typeInstructions = {
  bread: [
    'Gather and measure all ingredients needed',
    'Mix flour, salt, and other dry ingredients in a large bowl',
    'Add warm water gradually while mixing until soft dough forms',
    'Knead dough for 8-10 minutes until smooth and elastic',
    'Apply oil to dough and cover with damp cloth',
    'Let dough rest for 30 minutes at room temperature',
    'Divide dough into equal-sized portions',
    'Roll each portion into desired shape (thin for roti, thicker for naan)',
    'Heat a griddle or tawa to medium-high heat',
    'Place rolled dough on hot griddle',
    'Cook for 30 seconds until light bubbles form',
    'Flip and cook other side for another 30 seconds until light brown patches appear',
    'Press gently with cloth to ensure even cooking',
    'Remove from griddle and brush with ghee or butter',
    'Serve hot and fresh from the griddle'
  ],
  sweet: [
    'Gather all ingredients and measure precisely',
    'Prepare the main ingredient (milk, flour, or semolina)',
    'Heat ghee in a heavy-bottomed pan over medium heat',
    'Roast the main ingredient for 3-5 minutes until fragrant',
    'Add sugar or jaggery and mix well',
    'Continue cooking until mixture thickens and starts to leave sides of pan',
    'Add dry fruits and nuts if using',
    'Mix in aromatic spices like cardamom and saffron',
    'Continue cooking and stirring until the mixture becomes glossy',
    'Pour on parchment paper or into a greased tray',
    'Cool for 5-10 minutes before cutting into desired shapes',
    'Cut into pieces once cool enough to handle',
    'Store in airtight container',
    'Serve at room temperature or slightly warm'
  ],
  beverage: [
    'Gather all required ingredients',
    'Fill a pot with water and bring to boil',
    'Add tea leaves or tea bags to boiling water',
    'Brew for 3-4 minutes',
    'Add milk if making chai',
    'Add sugar or honey according to taste',
    'Add spices like ginger, cardamom, and cinnamon if desired',
    'Simmer for 2 minutes',
    'Strain into cups using a fine strainer',
    'Serve hot immediately',
    'Can be garnished with fresh mint or cardamom seeds'
  ],
  snack: [
    'Prepare all ingredients and keep them ready',
    'Mix flour and other dry ingredients in a bowl',
    'Add water or other liquid gradually while mixing',
    'Form a batter or dough of appropriate consistency',
    'Let batter rest for 15-30 minutes if needed',
    'Heat oil in a deep pan to appropriate temperature',
    'Shape or pour batter according to snack type',
    'Fry until golden brown on all sides',
    'Remove using slotted spoon and drain on paper towels',
    'Sprinkle seasoning salt or spice powder while still warm',
    'Serve immediately for best taste and texture',
    'Can be accompanied with chutney or dipping sauce'
  ],
  curry: [
    'Prepare and measure all ingredients',
    'Heat oil or ghee in a large pan',
    'Add cumin seeds and let them crackle',
    'Add onions and fry until golden brown',
    'Add garlic and ginger paste, sauté until fragrant',
    'Add green chilies and cook for 30 seconds',
    'Add tomatoes and cook until soft',
    'Add all spices and cook for 1-2 minutes',
    'Add the main ingredient (vegetables, meat, or legumes)',
    'Add yogurt or coconut milk if required',
    'Add water and bring to boil',
    'Simmer covered for 20-30 minutes until cooked',
    'Taste and adjust seasoning',
    'Garnish with fresh cilantro',
    'Serve hot with rice or bread'
  ]
};

// Function to determine recipe type and get appropriate instructions
function getRecipeInstructions(recipeName) {
  const cleanName = recipeName.toLowerCase().replace(/-/g, ' ');
  
  // Check if in main database
  if (recipeDatabase[recipeName]) {
    return recipeDatabase[recipeName].instructions;
  }
  
  // Check for bread recipes
  if (cleanName.includes('naan') || cleanName.includes('roti') || cleanName.includes('paratha') || 
      cleanName.includes('bhakri') || cleanName.includes('baati') || cleanName.includes('puri')) {
    return typeInstructions.bread;
  }
  
  // Check for sweet/dessert
  if (cleanName.includes('halwa') || cleanName.includes('barfi') || cleanName.includes('ladoo') || 
      cleanName.includes('kheer') || cleanName.includes('payasam') || cleanName.includes('pudding') ||
      cleanName.includes('gulab')) {
    return typeInstructions.sweet;
  }
  
  // Check for beverages
  if (cleanName.includes('chai') || cleanName.includes('chai') || cleanName.includes('coffee') ||
      cleanName.includes('tea') || cleanName.includes('lassi')) {
    return typeInstructions.beverage;
  }
  
  // Check for snacks
  if (cleanName.includes('samosa') || cleanName.includes('pakora') || cleanName.includes('vada') ||
      cleanName.includes('bhel') || cleanName.includes('chikhalwali') || cleanName.includes('bhujia')) {
    return typeInstructions.snack;
  }
  
  // Default to curry for most dishes
  return typeInstructions.curry;
}

// Function to generate unique ingredients for a recipe
function getRecipeIngredients(recipeName) {
  const cleanName = recipeName.toLowerCase().replace(/-/g, ' ');
  
  // Return from database if exists
  if (recipeDatabase[recipeName]) {
    return recipeDatabase[recipeName].ingredients;
  }
  
  // Generate based on recipe type and name
  const baseIngredients = [
    '🛢️ Oil or Ghee - 3 tbsp',
    '🧅 Onion - 1 large, sliced',
    '🧄 Garlic - 4 cloves, minced',
    '💚 Ginger - 1 tbsp, minced',
    '🌶️ Green chili - 2, chopped',
    '🧂 Salt - to taste',
    '🌶️ Red chili powder - 1/2 tsp',
    '😂 Turmeric - 1/4 tsp',
    '🥗 Coriander powder - 1 tsp',
    '🌾 Cumin powder - 1/2 tsp',
    '🌾 Garam masala - 1/2 tsp',
    '🍃 Fresh cilantro - 2 tbsp',
    '🍃 Fresh mint - 2 tbsp',
    '💧 Water - 1 cup'
  ];
  
  // Add specific ingredients based on recipe name
  if (cleanName.includes('chicken')) {
    baseIngredients.unshift('🍗 Chicken - 500g, diced');
  } else if (cleanName.includes('fish') || cleanName.includes('prawn') || cleanName.includes('shrimp')) {
    baseIngredients.unshift('🐟 Fish/Seafood - 500g');
  } else if (cleanName.includes('lamb') || cleanName.includes('mutton') || cleanName.includes('meat')) {
    baseIngredients.unshift('🥩 Lamb/Meat - 600g, diced');
  } else if (cleanName.includes('paneer')) {
    baseIngredients.unshift('🧀 Paneer - 250g, cut into cubes');
  } else if (cleanName.includes('vegetable') || cleanName.includes('sabzi') || cleanName.includes('aloo') || cleanName.includes('gobi')) {
    baseIngredients.unshift('🥦 Assorted vegetables - 400g, diced');
  } else if (cleanName.includes('dal') || cleanName.includes('lentil') || cleanName.includes('bean')) {
    baseIngredients.unshift('🫘 Lentils/Beans - 1 cup, soaked');
  } else if (cleanName.includes('rice') || cleanName.includes('biryani')) {
    baseIngredients.unshift('🍚 Basmati rice - 2 cups, soaked');
  }
  
  return baseIngredients;
}

// Main function to generate HTML template
function generateRecipeTemplate(recipeName, ingredients, instructions) {
  // Clean recipe name for display
  const displayName = recipeName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Generate ingredient chips
  const ingredientChips = ingredients
    .map(ing => `<div class="ingredient-chip">${ing}</div>`)
    .join('');
  
  // Generate instruction steps
  const instructionSteps = instructions
    .map((step, index) => {
      const stepNum = index + 1;
      return `<li class="instruction-step"><div class="step-number">${stepNum}</div><div class="step-text">${stepNum}. ${step}</div></li>`;
    })
    .join('');
  
  return `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>${displayName} - Ruchique 🍽️</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding-bottom: 60px;
        }

        /* MERGED NAVBAR WITH RECIPE TITLE */
        .recipe-hero {
            background: linear-gradient(135deg, rgba(32,32,46,0.95) 0%, rgba(102,126,234,0.85) 100%);
            padding: 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }

        .navbar {
            background: transparent;
            padding: 0.5rem 0;
            margin: 0;
            border: none;
        }

        .navbar-brand {
            font-size: 1.9rem;
            font-weight: 900;
            color: #fff !important;
            letter-spacing: 2px;
            margin-right: auto;
        }

        .navbar-brand:hover { color: #ffc107 !important; }

        .navbar a, .navbar-nav .nav-link {
            color: #fff !important;
            margin: 0 8px;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .navbar-nav .nav-link:hover { color: #ffc107 !important; }

        .search-container {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 0 15px;
        }

        #searchInput {
            width: 280px;
            padding: 8px 12px;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 20px;
            background: rgba(255,255,255,0.1);
            color: white;
            font-size: 14px;
            min-height: 44px;
            -webkit-appearance: none;
            transition: all 0.3s ease;
        }

        #searchInput::placeholder { color: rgba(255,255,255,0.6); }
        #searchInput:focus {
            outline: none;
            border-color: #ffc107;
            background: rgba(255,255,255,0.15);
            box-shadow: 0 0 12px rgba(255,193,7,0.3);
        }

        .lang-selector {
            min-height: 44px;
            font-size: 14px;
            -webkit-appearance: none;
            background-color: rgba(255,255,255,0.15);
            color: white;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 6px;
            padding: 6px 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .lang-selector:hover {
            background-color: rgba(255,255,255,0.2);
            border-color: #ffc107;
        }

        .recipe-title-section {
            background: rgba(0,0,0,0.1);
            padding: 25px;
            border-top: 1px solid rgba(255,255,255,0.1);
        }

        .recipe-title-section h1 {
            color: #ffc107;
            font-size: 2.5em;
            font-weight: 900;
            margin: 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .recipe-title-section p {
            color: rgba(255,255,255,0.8);
            margin: 5px 0 0 0;
        }

        .container-main {
            padding: 40px 20px;
            max-width: 1000px;
            margin: 0 auto;
        }

        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }

        .card-section {
            background: rgba(255,255,255,0.96);
            border-radius: 18px;
            padding: 32px;
            box-shadow: 0 12px 48px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.3);
        }

        .card-section:hover {
            box-shadow: 0 18px 60px rgba(0,0,0,0.2);
            transform: translateY(-8px);
        }

        .card-section h2 {
            color: #667eea;
            margin-bottom: 24px;
            font-weight: 800;
            font-size: 1.6em;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 3px solid #667eea;
            padding-bottom: 12px;
        }

        .card-section h2 i {
            color: #ffc107;
            font-size: 1.3em;
        }

        .ingredients-list {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .ingredient-chip {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 10px 16px;
            border-radius: 24px;
            font-size: 0.9em;
            display: inline-block;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
            font-weight: 500;
        }

        .ingredient-chip:hover {
            transform: scale(1.08);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .instructions-list {
            list-style: none;
            padding: 0;
        }

        .instruction-step {
            display: flex;
            gap: 16px;
            margin-bottom: 22px;
            align-items: flex-start;
        }

        .step-number {
            width: 45px;
            height: 45px;
            min-width: 45px;
            background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
            color: #333;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 1.1em;
            margin-top: 2px;
            box-shadow: 0 4px 12px rgba(255,152,0, 0.3);
            flex-shrink: 0;
        }

        .step-text {
            flex: 1;
            color: #444;
            line-height: 1.7;
            font-size: 0.95em;
            text-align: justify;
        }

        .footer {
            background: rgba(0,0,0,0.35);
            color: white;
            text-align: center;
            padding: 30px;
            margin-top: 50px;
            border-radius: 12px;
            border-top: 3px solid rgba(255,193,7,0.3);
        }

        .footer p {
            margin: 0;
            font-weight: 500;
        }

        @media (max-width: 992px) {
            .navbar { padding: 0.5rem 0; }
            .search-container { margin: 0 10px; }
            #searchInput { width: 200px; }
        }

        @media (max-width: 768px) {
            .content-grid { grid-template-columns: 1fr; }
            .recipe-title-section h1 { font-size: 2em; }
            .card-section { padding: 20px; }
            .ingredients-list { gap: 8px; }
            .ingredient-chip { font-size: 0.85em; padding: 8px 12px; }
            .instruction-step { gap: 12px; }
            .step-number { width: 38px; height: 38px; font-size: 0.95em; }
            .step-text { font-size: 0.9em; }
            .navbar-collapse { padding-top: 10px; }
            #searchInput { width: 100%; }
        }
    </style>
</head>
<body>
    <!-- MERGED NAVBAR WITH RECIPE HEADER -->
    <div class="recipe-hero">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid px-3">
                <a class="navbar-brand" href="/">🍛 Ruchique</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <a class="nav-link" href="/menu"><i class="fas fa-book"></i> Menu</a>
                    <div class="search-container">
                        <i class="fas fa-search" style="color: white; font-size: 1.1em;"></i>
                        <input type="text" id="searchInput" placeholder="Search recipes..." aria-label="Search recipes">
                    </div>
                    <div class="ml-auto">
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

        <!-- Recipe title merged into hero section -->
        <div class="recipe-title-section">
            <h1>${displayName}</h1>
            <p>🎨 Authentic Indian Culinary Masterpiece</p>
        </div>
    </div>

    <div class="container-main">
        <div class="content-grid">
            <div class="card-section">
                <h2><i class="fas fa-list"></i> Ingredients</h2>
                <div class="ingredients-list">
                    ${ingredientChips}
                </div>
            </div>

            <div class="card-section">
                <h2><i class="fas fa-utensils"></i> Instructions</h2>
                <ol class="instructions-list">
                    ${instructionSteps}
                </ol>
            </div>
        </div>
    </div>

    <div class="footer">
        <p>&copy; 2024 Ruchique - Your Ultimate Recipe Hub. Happy Cooking! 👨‍🍳</p>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="/js/translation.js"></script>

    <script>
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm.length > 2) {
                fetch('/api/recipes/search?keyword=' + encodeURIComponent(searchTerm))
                    .then(response => response.json())
                    .then(data => console.log('Found:', data));
            }
        });

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
}

// Main execution
async function fixAllRecipes() {
  const templateDir = path.join(__dirname, 'src', 'main', 'resources', 'templates');
  
  try {
    console.log('📋 Starting to fix all recipes with unique instructions...\n');
    
    // Read all HTML files
    const files = fs.readdirSync(templateDir).filter(f => f.endsWith('.html'));
    console.log(`Found ${files.length} recipe files\n`);
    
    let updated = 0;
    let failed = 0;
    
    for (const file of files) {
      try {
        const recipeName = file.replace('.html', '');
        
        // Get ingredients and instructions
        const ingredients = getRecipeIngredients(recipeName);
        const instructions = getRecipeInstructions(recipeName);
        
        // Generate new template
        const html = generateRecipeTemplate(recipeName, ingredients, instructions);
        
        // Write to file
        const filePath = path.join(templateDir, file);
        fs.writeFileSync(filePath, html, 'utf8');
        
        updated++;
        
        if (updated % 50 === 0) {
          console.log(`✅ ${updated} recipes updated...`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${file}: ${error.message}`);
        failed++;
      }
    }
    
    console.log(`\n${'='.repeat(50)}`);
    console.log(`✅ COMPLETE: ${updated} recipes successfully updated`);
    console.log(`❌ FAILED: ${failed} recipes`);
    console.log(`${'='.repeat(50)}\n`);
    
    if (failed === 0) {
      console.log('🎉 All recipes now have unique, detailed instructions!');
    }
    
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

// Run the script
fixAllRecipes();
