const fs = require('fs');
const path = require('path');

// Comprehensive recipes with detailed, recipe-specific ingredients and instructions
const detailedRecipes = [
  {
    name: 'paneer-makhani-gravy',
    title: 'Paneer Makhani Gravy (Paneer Butter Masala)',
    description: 'Rich, creamy tomato-based paneer curry with aromatic spices',
    ingredients: [
      '🧀 Paneer - 500g (cut into 2cm cubes)',
      '🍅 Tomato Puree - 400ml',
      '🥛 Heavy Cream - 200ml',
      '🧈 Butter - 100g',
      '🧅 Onions - 3 large (finely chopped)',
      '🫚 Ginger Paste - 2 tbsp',
      '🧄 Garlic Paste - 2 tbsp',
      '🌶️ Kashmiri Red Chili Powder - 2 tsp',
      '👨‍🍳 Garam Masala - 1.5 tsp',
      '🌰 Fenugreek Leaves (Kasuri Methi) - 1 tbsp',
      '🧂 Salt - to taste',
      '🍯 Sugar - 1 tbsp',
      '🫒 Oil - 3 tbsp'
    ],
    instructions: [
      'Heat oil and butter in a heavy-bottomed pan over medium heat. Once melted, add finely chopped onions.',
      'Sauté the onions for 8-10 minutes, stirring regularly, until they turn golden brown and caramelize slightly.',
      'Reduce heat to low and add ginger paste and garlic paste. Fry for 2-3 minutes, stirring constantly to release the aromatic oils.',
      'Add Kashmiri red chili powder and mix well, cooking for 30 seconds. This blooms the spices.',
      'Add tomato puree slowly, stirring continuously to combine. This prevents lumps from forming.',
      'Increase heat to medium and let the mixture simmer for 5-7 minutes, stirring occasionally, until the oil separates from the masala.',
      'Add sugar and salt to balance the flavors. Adjust to your taste.',
      'Stir in garam masala and kasuri methi. Let it cook for 2 more minutes.',
      'Slowly add heavy cream while stirring, incorporating it smoothly into the sauce.',
      'Gently add paneer cubes to the gravy. Be careful not to stir aggressively to prevent the paneer from breaking.',
      'Simmer on low heat for 5 minutes. Do not boil as this will make paneer rubbery.',
      'Taste and adjust seasonings. The gravy should be rich, creamy, and balanced between spice and tomato tang.',
      'Serve hot with naan or steamed basmati rice. Garnish with fresh cream drizzle and chopped cilantro.'
    ]
  },
  {
    name: 'kerala-fish-curry',
    title: 'Kerala Fish Curry',
    description: 'South Indian coconut-based fish curry with authentic Kerala spices',
    ingredients: [
      '🐟 Fish Fillets - 800g (preferably Kingfish or Mackerel)',
      '🥥 Coconut Milk - 400ml',
      '🍅 Tomatoes - 3 medium (chopped)',
      '🧅 Shallots - 6 (thinly sliced)',
      '🫚 Ginger - 3 tbsp (julienned)',
      '🌶️ Green Chilies - 3 (slit lengthwise)',
      '🌶️ Kashmiri Red Chilies - 4 (dried)',
      '🌿 Curry Leaves - 15-20 leaves',
      '🌿 Coriander Leaves - 2 tbsp (chopped)',
      '🫒 Coconut Oil - 4 tbsp',
      '🧂 Salt - to taste',
      '💛 Turmeric Powder - 0.5 tsp',
      '🏮 Fenugreek Seeds - 0.5 tsp'
    ],
    instructions: [
      'Cut fish fillets into 5-6 pieces. Season with salt and turmeric powder. Set aside for 10 minutes.',
      'Dry roast 4 dried red chilies in a pan without oil for 1-2 minutes until fragrant. Soak them in warm water for 5 minutes.',
      'Heat 2 tbsp coconut oil in a heavy pan. Add sliced shallots and fry until they turn translucent, about 3-4 minutes.',
      'Add ginger julienne and fry for another 1 minute. The ginger will release its oils.',
      'Add chopped tomatoes and green chilies. Stir and let them cook for 3-4 minutes until soft.',
      'Add the soaked red chilies and make a paste using a mortar and pestle or grind together.',
      'Mix this paste into the tomato mixture. Cook on medium heat for 2 minutes.',
      'Add coconut milk slowly, stirring well to ensure no lumps form. Let it simmer gently for 3-4 minutes.',
      'Carefully slide the fish pieces into the curry. Adjust heat to low to prevent the fish from breaking apart.',
      'Simmer for 6-8 minutes. The fish is done when it flakes easily with a fork.',
      'In a separate pan, heat remaining 2 tbsp coconut oil. Add fenugreek seeds and curry leaves. Let them crackle.',
      'Pour this tempering over the curry and fold gently.',
      'Taste and adjust salt. The curry should be creamy, tangy, and subtly spiced.',
      'Serve immediately with steamed rice, coconut rice, or Kerala parathas. A squeeze of fresh lemon brightens the flavors.'
    ]
  },
  {
    name: 'rogan-josh-mutton',
    title: 'Rogan Josh (Mutton Curry)',
    description: 'Aromatic Kashmiri mutton curry with yogurt base and warming spices',
    ingredients: [
      '🐑 Mutton (cut into 2-inch pieces) - 1kg',
      '🥛 Yogurt (Full-fat) - 500ml',
      '🧅 Onions - 4 large (2 sliced, 2 chopped)',
      '🫚 Ginger Paste - 3 tbsp',
      '🧄 Garlic Paste - 3 tbsp',
      '🌶️ Kashmiri Red Chili Powder - 2 tsp',
      '👨‍🍳 Garam Masala Powder - 1.5 tsp',
      '🫒 Ghee - 6 tbsp',
      '🌿 Cinnamon Stick - 1 inch piece',
      '🌿 Black Cardamom - 2',
      '🌿 Green Cardamom - 3',
      '🌿 Cloves - 4',
      '🌿 Bay Leaves - 2',
      '🧂 Salt - to taste',
      '🍯 Sugar - 1 tsp',
      '🌿 Mint Leaves - 1 tbsp (chopped)',
      '🌿 Fenugreek Leaves - 0.5 tbsp'
    ],
    instructions: [
      'Soak mutton pieces in yogurt mixed with ginger paste, garlic paste, and salt for at least 30 minutes. This tenderizes the meat.',
      'Heat ghee in a heavy-bottomed pan over high heat. Add sliced onions and fry until deep golden brown (8-10 minutes). Remove and drain on paper towels.',
      'In the same ghee, fry chopped onions until light brown. Add the marinated mutton pieces and cook over medium-high heat for 10 minutes, stirring to seal the meat.',
      'Once the meat starts releasing its liquid, reduce heat to medium. Add Kashmiri red chili powder and cook for 2 minutes.',
      'Add the remaining yogurt slowly while stirring. The yogurt should coat every piece of meat.',
      'In a small pan, temper the whole spices: cinnamon, black cardamom, green cardamom, cloves, and bay leaves in residual heat. Add these to the meat.',
      'Add garam masala powder and mix well. The meat should be well coated with the marinade.',
      'Cover the pan and simmer on low heat for 45-50 minutes. Stir occasionally to ensure even cooking. The meat should be tender.',
      'Add fried onions (crushed into small pieces) and mix gently. Add sugar to balance the flavors.',
      'Add fenugreek leaves and fresh mint leaves. Cook for another 2-3 minutes.',
      'The gravy should be thick and cling to the meat pieces. If too thin, cook uncovered for a few minutes.',
      'Taste and adjust seasonings. The curry should be aromatic, mildly spiced, and gravy should coat a spoon.',
      'Serve hot with biryani, naan, or steamed basmati rice. A dollop of yogurt on the side complements perfectly.'
    ]
  },
  {
    name: 'chole-bhature',
    title: 'Chole Bhature',
    description: 'North Indian chickpea curry with Indian deep-fried bread - a classic street food',
    ingredients: [
      '💛 Dried Chickpeas - 2 cups (soaked overnight)',
      '🌶️ Serrano Green Chilies - 4 (chopped)',
      '🧅 Onions - 2 large (1 chopped, 1 for serving)',
      '🫚 Ginger - 2 tbsp (minced)',
      '🧄 Garlic - 6 cloves (minced)',
      '🍅 Tomatoes - 4 (finely chopped)',
      '👨‍🍳 Chaat Masala - 1.5 tsp',
      '👨‍🍳 Amchur (Dried Mango) Powder - 1 tsp',
      '👨‍🍳 Garam Masala - 1 tsp',
      '🌶️ Red Chili Powder - 1 tsp',
      '💛 Turmeric Powder - 0.5 tsp',
      '🫒 Vegetable Oil - 4 tbsp',
      '🧂 Salt - to taste',
      '🌿 Fenugreek Seeds - 0.5 tsp',
      '🔗 Baking Soda - 0.5 tsp (for bhature dough)',
      '🥛 Yogurt - 0.5 cup (for bhature)',
      '🌾 All-purpose Flour - 2 cups (for bhature)',
      '👨‍🍳 Carom Seeds - 0.5 tsp (for bhature)'
    ],
    instructions: [
      'Bhature Preparation: Mix flour, yogurt, salt, carom seeds, and baking soda in a bowl. Knead with water to form a soft dough. Cover and let it rest for 4 hours at room temperature - fermentation is key for fluffy bhature.',
      'Chole Preparation: Pressure cook soaked chickpeas on high heat for 4 whistles, then low heat for 8 minutes. They should be tender but not mushy.',
      'Heat oil in a large pan. Add fenugreek seeds and let them crackle.',
      'Add chopped onions and fry until golden brown (5-6 minutes).',
      'Add minced ginger and garlic. Fry for 1 minute until fragrant.',
      'Add finely chopped tomatoes and green chilies. Cook for 5 minutes until tomatoes are soft and oil separates from the mixture.',
      'Add turmeric powder and red chili powder. Stir well and cook for 1 minute to bloom the spices.',
      'Add the cooked chickpeas along with their liquid. Bring to a boil.',
      'Reduce heat and simmer for 10 minutes. The gravy should be thick and flavorful.',
      'Add garam masala, amchur powder, and chaat masala. Mix well and taste for seasonings.',
      'For bhature: Divide dough into 8 portions. Roll each into a 5-inch disk, slightly thicker at center.',
      'Heat oil to 350°F. Gently slide bhature into hot oil. It should puff up within 10 seconds.',
      'Fry for 1-2 minutes per side until golden brown. Remove and drain on paper towels.',
      'Serve chole (chickpea curry) hot with fluffy bhature. Garnish with chopped onions, lemon wedges, and pickled green chilies.',
      'The bhature should be light, airy, and crispy, while chole should be aromatic and flavorful.'
    ]
  },
  {
    name: 'dal-tadka',
    title: 'Dal Tadka (Lentil Curry with Tempering)',
    description: 'Aromatic lentil curry elevated with traditional smoke tempering',
    ingredients: [
      '🟡 Red Lentils (Masoor Dal) - 1 cup',
      '🟢 Yellow Lentils (Moong Dal) - 0.5 cup',
      '🧅 Onions - 3 (2 for dal, 1 sliced for tadka)',
      '🫚 Ginger - 1.5 tbsp (minced)',
      '🧄 Garlic - 6 cloves (minced)',
      '🌶️ Green Chilies - 3 (slit)',
      '🍅 Tomatoes - 2 (chopped)',
      '💛 Turmeric Powder - 0.75 tsp',
      '🌶️ Red Chili Powder - 1 tsp',
      '👨‍🍳 Cumin Powder - 0.5 tsp',
      '🧂 Salt - to taste',
      '🫒 Ghee - 3 tbsp',
      '🌿 Cumin Seeds - 1 tsp',
      '🌿 Mustard Seeds - 1 tsp',
      '🌿 Fenugreek Seeds - 0.5 tsp',
      '🌿 Curry Leaves - 15 leaves',
      '🌿 Dried Red Chilies - 3',
      '🌿 Asafoetida (Hing) - a pinch',
      '🌿 Coriander Leaves - 2 tbsp (chopped)',
      '🍋 Lemon Juice - 2 tbsp'
    ],
    instructions: [
      'Rinse red lentils and moong dal together under running water until water runs clear. This removes starch.',
      'In a pressure cooker, add lentils with 4 cups water, turmeric powder, and salt. Pressure cook for 3-4 whistles.',
      'Once pressure releases, mash the lentils slightly using the back of a spoon. They should be creamy but with some texture.',
      'Heat ghee in a separate pan. Add 1 chopped onion and fry until golden. Add ginger and garlic, fry for 1 minute.',
      'Add green chilies and chopped tomatoes. Cook for 3-4 minutes until soft.',
      'Add red chili powder and cumin powder. Stir well for 1 minute.',
      'Pour this tadka (base) into the warm lentils and mix well. The dal should have a pourable consistency.',
      'Simmer the dal for 5 minutes on low heat.',
      'Add lemon juice and adjust salt. The dal should be slightly soupy, aromatic, and well-spiced.',
      'For the tempering: Heat ghee in a small pan. Add cumin seeds and let them splutter.',
      'Add mustard seeds and fenugreek seeds. When they crackle, add curry leaves and dried red chilies.',
      'Add asafoetida and stir. Immediately pour this tempering over the dal.',
      'Stir quickly to combine the aromatic oils throughout the dal.',
      'Garnish with fresh coriander leaves and sliced onion rings.',
      'Serve piping hot with rice, roti, or naan. The dal should be creamy with a balance of spices and a hint of smoke from the tempering.'
    ]
  },
  {
    name: 'tandoori-chicken-thighs',
    title: 'Tandoori Chicken (Thighs)',
    description: 'Marinated yogurt-spiced chicken grilled to perfection with charred edges',
    ingredients: [
      '🍗 Chicken Thighs - 8 (skinless)',
      '🥛 Yogurt (Full-fat) - 500ml',
      '🫚 Ginger Paste - 3 tbsp',
      '🧄 Garlic Paste - 3 tbsp',
      '🌶️ Kashmiri Red Chili Powder - 2 tbsp',
      '🌶️ Serrano Green Chilies - 3 (minced)',
      '🧅 Onion - 1 large (sliced)',
      '🍋 Lemon Juice - 4 tbsp',
      '👨‍🍳 Tandoori Spice Blend - 2 tbsp (cumin, coriander, garam masala)',
      '🌿 Fenugreek Leaves - 1 tbsp',
      '🌿 Coriander Leaves - 2 tbsp',
      '🫒 Oil - 3 tbsp',
      '🧂 Salt - to taste',
      '👨‍🍳 Black Cardamom - 2 (crushed)',
      '🌰 Cashew Paste - 2 tbsp',
      '💛 Saffron - 0.5g (soaked in milk)'
    ],
    instructions: [
      'Pat dry chicken thighs thoroughly using paper towels. This helps better absorption of marinade.',
      'Make deep cuts (about 0.5 inch) on each thigh piece to allow the marinade to penetrate deeply.',
      'In a large bowl, whisk yogurt until smooth. Add ginger paste and garlic paste, mix well.',
      'Add Kashmiri red chili powder (for color and mild heat), tandoori spice blend, and salt. Mix thoroughly.',
      'Add lemon juice gradually while stirring to prevent yogurt from curdling.',
      'Add minced green chilies, crushed black cardamom, and cashew paste. The paste creates a creamy marinade.',
      'Add soaked saffron with the milk to the marinade for color and aroma.',
      'Arrange chicken pieces in a bowl and pour marinade over them. Coat each piece thoroughly.',
      'Cover and refrigerate for at least 4 hours, preferably overnight. The longer it marinates, the more flavorful it becomes.',
      'One hour before cooking, remove chicken from refrigerator to bring it to room temperature.',
      'Preheat oven to 450°F with rack positioned close to heating element.',
      'Line a baking tray with aluminum foil and lightly oil it. Arrange chicken pieces on the tray.',
      'Bake for 12-15 minutes. Turn the pieces and bake for another 10-12 minutes.',
      'Increase temperature to 500°F and broil for 2-3 minutes until edges are charred and skin is crispy.',
      'Remove from heat. The chicken should be cooked through with a golden-brown exterior.',
      'Garnish with fresh coriander leaves, sliced onion rings, and lemon wedges.',
      'Serve immediately while still warm with mint chutney, lemon slices, and onion rings. The meat should be juicy inside with a charred crust.'
    ]
  },
  {
    name: 'palak-cottage-cheese',
    title: 'Palak Cottage Cheese (Creamed Spinach with Paneer)',
    description: 'Silky spinach puree with cubes of fresh cottage cheese in cream sauce',
    ingredients: [
      '🌿 Fresh Spinach Leaves - 1kg (packed)',
      '🌿 Fenugreek Leaves - 100g',
      '🧀 Paneer (Cottage Cheese) - 400g (cut into cubes)',
      '🥛 Heavy Cream - 150ml',
      '🧅 Onions - 2 (chopped)',
      '🫚 Ginger - 1.5 tbsp (minced)',
      '🧄 Garlic - 5 cloves (minced)',
      '🌶️ Green Chilies - 2 (slit)',
      '🫒 Ghee - 4 tbsp',
      '💛 Turmeric Powder - 0.5 tsp',
      '👨‍🍳 Garam Masala - 1 tsp',
      '🧂 Salt - to taste',
      '🍯 Sugar - 1 tsp',
      '🌿 Cumin Seeds - 0.5 tsp',
      '🌰 Cashew Paste - 2 tbsp',
      '🫒 Oil - 2 tbsp'
    ],
    instructions: [
      'Blanch fresh spinach and fenugreek leaves in boiling salted water for 2-3 minutes until wilted and bright green.',
      'Drain and immediately plunge into ice-cold water to stop the cooking process and preserve the color.',
      'Drain thoroughly and squeeze out excess water. The drier, the better for smooth puree.',
      'Grind the blanched greens with 0.5 cup water to make a smooth, vibrant green puree. Pass through a fine strainer for silky texture.',
      'Heat 2 tbsp ghee in a pan. Add cumin seeds and let them splutter.',
      'Add chopped onions and fry until softened, about 4-5 minutes.',
      'Add minced ginger and garlic, fry for 1 minute until fragrant.',
      'Add turmeric powder and fry for 30 seconds.',
      'Pour the spinach puree slowly into the pan, stirring continuously to combine.',
      'Simmer on medium heat for 5 minutes, stirring occasionally. The puree will darken slightly during cooking.',
      'Add cashew paste mixed with a little water for creaminess. Stir well.',
      'Add salt and sugar to balance flavors. The spinach should taste slightly sweet.',
      'Reduce heat to low. Add heavy cream slowly while stirring gently.',
      'Add garam masala and mix well.',
      'In a separate pan, heat remaining 2 tbsp ghee. Lightly fry paneer cubes until light golden on edges (30 seconds per side). Remove.',
      'Gently add the fried paneer cubes to the spinach sauce. Fold carefully to prevent breaking.',
      'Simmer for 2-3 minutes. The gravy should coat a spoon and be creamy.',
      'Adjust seasonings. Add a last dollop of heavy cream if desired.',
      'Serve hot with naan, parathas, or steamed rice. Garnish with fried onions or paneer crumbles if desired.'
    ]
  },
  {
    name: 'konkan-fish-ampyal',
    title: 'Konkan Fish Ampyal',
    description: 'Coastal Maharashtra fish preparation with coconut and spice paste',
    ingredients: [
      '🐟 Fish Fillets (Pomfret) - 750g',
      '🥥 Fresh Coconut - 150g (grated)',
      '🌶️ Dried Red Chilies - 5',
      '🌿 Coriander Seeds - 1 tbsp',
      '💛 Turmeric Root - 1 inch piece',
      '🧅 Shallots - 4',
      '🫚 Ginger - 1.5 tbsp',
      '🧄 Garlic - 4 cloves',
      '🌿 Curry Leaves - 12-15 leaves',
      '🫒 Coconut Oil - 4 tbsp',
      '🧂 Salt - to taste',
      '🍯 Jaggery (Gur) - 1 tsp',
      '🌿 Tamarind Paste - 1 tbsp'
    ],
    instructions: [
      'Cut fish fillets into 4-5 pieces. Season lightly with salt and set aside.',
      'Dry roast dried red chilies and coriander seeds separately in a pan without oil for 1-2 minutes until fragrant.',
      'In a mortar and pestle or grinder, combine: roasted chilies, roasted coriander seeds, fresh turmeric root, shallots, ginger, and garlic.',
      'Grind to a coarse paste. Add grated coconut and grind again to form a thick, textured paste. Do not make it too fine - texture is important.',
      'Heat coconut oil in a broad, shallow pan over medium heat.',
      'Add the coconut-spice paste and fry for 2-3 minutes, stirring constantly, until it becomes fragrant and slightly darker.',
      'Add tamarind paste and mix well. The mixture should turn slightly tangy.',
      'Add a little water (about 0.5 cup) to make it a sauce-like consistency.',
      'Bring to a gentle simmer. Add salt and jaggery to balance the flavors.',
      'Gently slide fish pieces into the sauce, ensuring they are well coated.',
      'Simmer very gently for 6-8 minutes. The fish should be cooked through but still moist.',
      'Add curry leaves in the last minute. Fold gently to distribute.',
      'The sauce should be rich, nutty from coconut, with a hint of sourness from tamarind, and balanced by jaggery.',
      'Serve hot with steamed rice or poi (Konkani rice cake). The fish should be tender and flaky.'
    ]
  },
  {
    name: 'chotey-gosht',
    title: 'Nihari (Slow-Cooked Meat Curry)',
    description: 'Traditional slow-cooked meat delicacy with aromatic spices, meant for special breakfasts',
    ingredients: [
      '🐑 Mutton (Cut into 1-inch pieces) - 1kg',
      '🫒 Ghee - 5 tbsp',
      '🧅 Onions - 4 large',
      '🫚 Ginger Paste - 3 tbsp',
      '🧄 Garlic Paste - 3 tbsp',
      '👨‍🍳 Ginger-Garlic and Spice Paste - 2 tbsp',
      '🍅 Tomato Puree - 200ml',
      '🌶️ Kashmiri Red Chili Powder - 1.5 tsp',
      '👨‍🍳 Garam Masala Powder - 1.5 tsp',
      '👨‍🍳 Coriander Powder - 1 tsp',
      '👨‍🍳 Cumin Powder - 1 tsp',
      '🌿 Black Cardamom - 1',
      '🌿 Green Cardamom - 2',
      '🌿 Cinnamon Stick - 0.5 inch',
      '🌿 Cloves - 3',
      '🌿 Black Peppercorns - 1 tsp',
      '🐔 Chicken Stock or Water - 3 cups',
      '🥛 Yogurt - 200ml',
      '🧂 Salt - to taste',
      '🍗 Meat Bones - 250g (for stock)',
      '🌿 Mint Leaves - 1 tbsp',
      '🍋 Lemon Juice - 1 tbsp'
    ],
    instructions: [
      'Boil meat bones with water for 30 minutes to create a rich stock. Use this for cooking instead of plain water.',
      'Heat ghee in a heavy-bottomed pot (traditionally a handi) over medium-high heat.',
      'Slice onions thinly and fry in batches until deep golden brown. Remove and drain. Reserve 1 tbsp for garnish.',
      'In the same ghee, add ginger paste and garlic paste together with the meat pieces.',
      'Cook over high heat for 8-10 minutes, stirring occasionally, until meat is sealed and lightly browned.',
      'Add tomato puree and cook for 3-4 minutes until it caramelizes slightly.',
      'Reduce heat to medium. Add all ground spices (chili, garam masala, coriander, cumin) and fry for 1 minute.',
      'In a small pan, crack whole spices (black cardamom, green cardamom, cinnamon, cloves, peppercorns) using mortar and pestle.',
      'Add crushed whole spices to the meat and mix well.',
      'Add yogurt slowly while stirring to incorporate smoothly.',
      'Pour in the prepared meat stock gradually. The meat should be submerged.',
      'Cover the pot and reduce heat to very low. This should simmer for 2-3 hours. Nihari is traditionally cooked overnight on very low heat.',
      'Stir occasionally and check that the meat remains submerged. Add more water if needed.',
      'The meat should be extremely tender and the gravy thick and rich.',
      'In the last 15 minutes of cooking, add fried onions (save the reserved beautiful pieces) and crushed red chili.',
      'Taste and adjust salt and spices.',
      'Finish with lemon juice and fresh mint leaves.',
      'Serve piping hot in deep bowls. Garnish with fried onion slices, a squeeze of lemon juice, and fresh ginger julienne.',
      'Traditionally served with naan or paratha for breakfast. The meat should fall apart with a spoon, and the gravy should be rich and deeply aromatic.'
    ]
  }
];

const templatesDir = './src/main/resources/templates';

function generateTemplate(recipe) {
  const fileName = recipe.name + '.html';
  const navbarHTML = `<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>${recipe.title} - Ruchique 🍽️</title>
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
            transition: color 0.3s ease;
        }

        .navbar-brand:hover {
            color: #ffc107 !important;
        }

        .navbar a {
            color: #fff !important;
            margin: 0 0.8rem;
            transition: all 0.3s ease;
            font-weight: 600;
            padding: 8px 16px;
            border-radius: 20px;
        }

        .navbar-toggler {
            border: none;
            box-shadow: none;
            color: white;
            padding: 8px 12px;
        }

        .navbar-toggler-icon {
            background-image: url('data:image/svg+xml;charset=utf8,<svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="8" x2="25" y2="8" stroke="white" stroke-width="2"/><line x1="5" y1="15" x2="25" y2="15" stroke="white" stroke-width="2"/><line x1="5" y1="22" x2="25" y2="22" stroke="white" stroke-width="2"/></svg>');
        }

        .navbar a:hover {
            color: #ffc107 !important;
            background: rgba(255, 255, 255, 0.1);
        }

        .lang-selector {
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-left: 10px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            min-height: 44px;
            font-size: 16px;
            min-width: 140px;
        }

        .lang-selector:hover {
            background: rgba(255, 255, 255, 0.25);
            border-color: #ffc107;
        }

        .lang-selector:focus {
            outline: none;
            background: rgba(255, 255, 255, 0.3);
            border-color: #ffc107;
            box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2);
        }

        .lang-selector:active {
            background: rgba(255, 255, 255, 0.35);
        }

        .lang-selector option {
            background: #333;
            color: white;
            padding: 10px;
        }

        @media (max-width: 768px) {
            .lang-selector {
                margin-left: 5px;
                padding: 10px 12px;
                font-size: 14px;
                min-width: 130px;
            }
        }

        .autocomplete-container {
            position: relative;
            display: inline-flex;
            width: 350px;
            margin: 0 1rem;
        }

        #searchInput {
            width: 100%;
            padding: 12px 20px;
            border: 2px solid rgba(255, 255, 255, 0.5);
            border-radius: 25px;
            background: rgba(255, 255, 255, 0.9);
            font-size: 15px;
            color: #333;
            transition: all 0.3s ease;
        }

        #searchInput:focus {
            outline: none;
            border-color: #ffc107;
            box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2);
        }

        #searchInput::placeholder {
            color: #999;
        }

        .recipe-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
        }

        .recipe-header {
            background: rgba(255, 255, 255, 0.95);
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
            text-align: center;
        }

        .recipe-title {
            font-size: 2.5rem;
            color: #1a1a2e;
            margin-bottom: 10px;
            padding-bottom: 15px;
            border-bottom: 3px solid #ffc107;
        }

        .recipe-desc {
            color: #666;
            font-size: 1.1rem;
            font-style: italic;
        }

        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .card-section {
            background: rgba(255, 255, 255, 0.95);
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .section-header {
            font-size: 1.5rem;
            color: #1a1a2e;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #ffc107;
        }

        .ingredients-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .ingredient-chip {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 16px;
            border-radius: 25px;
            font-weight: 600;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
            transition: all 0.3s ease;
            text-align: center;
            font-size: 0.95rem;
            line-height: 1.4;
        }

        .ingredient-chip:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
        }

        .instructions-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .instruction-step {
            display: flex;
            gap: 15px;
            align-items: flex-start;
        }

        .step-number {
            background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            flex-shrink: 0;
        }

        .step-text {
            color: #333;
            line-height: 1.6;
            flex: 1;
            padding-top: 2px;
        }

        .action-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
        }

        .btn-action {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            border-radius: 25px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            color: white;
        }

        .btn-home {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .btn-home:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
            color: white;
            text-decoration: none;
        }

        .btn-video {
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
        }

        .btn-video:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
            color: white;
            text-decoration: none;
        }

        .footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            text-align: center;
            padding: 1.5rem;
            color: white;
            background: linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 100%);
            z-index: 100;
            font-size: 0.95rem;
            font-weight: 500;
            letter-spacing: 0.5px;
        }

        @media (max-width: 992px) {
            .autocomplete-container {
                width: 100%;
                max-width: 350px;
                margin: 0.5rem 0.5rem;
                flex: 1;
            }
        }

        @media (max-width: 768px) {
            .content-grid {
                grid-template-columns: 1fr;
            }

            .ingredients-list {
                grid-template-columns: 1fr;
            }

            .recipe-title {
                font-size: 1.8rem;
            }

            .autocomplete-container {
                width: 100%;
                max-width: 280px;
                margin: 0.5rem auto;
                flex: 1;
            }

            #searchInput {
                font-size: 0.9rem;
                padding: 12px 16px;
            }

            .action-buttons {
                flex-direction: column;
            }

            .btn-action {
                width: 100%;
                justify-content: center;
            }

            .navbar-brand {
                font-size: 1.4rem;
            }
        }

        @media (max-width: 576px) {
            body {
                padding-top: 240px;
                padding-bottom: 80px;
            }

            .autocomplete-container {
                width: calc(100% - 20px) !important;
                max-width: none !important;
                margin: 0.5rem 10px !important;
                flex: 1 !important;
            }

            #searchInput {
                font-size: 0.85rem;
                padding: 10px 14px;
                border-radius: 20px;
            }

            #suggestionsList {
                max-height: 200px;
            }

            #suggestionsList li {
                padding: 10px 16px;
                font-size: 0.9rem;
            }

            .recipe-title {
                font-size: 1.5rem;
            }

            .navbar-brand {
                font-size: 1.2rem;
                letter-spacing: 0px;
            }

            .navbar {
                padding: 0.5rem 0;
            }

            .ingredient-chip {
                padding: 8px 12px;
                font-size: 0.85rem;
            }

            .step-number {
                width: 32px;
                height: 32px;
                font-size: 0.9rem;
            }

            .instruction-step {
                gap: 10px;
            }

            .step-text {
                font-size: 0.9rem;
            }

            .btn-action {
                padding: 10px 20px;
                font-size: 0.9rem;
                gap: 6px;
            }

            .footer {
                padding: 1rem;
                font-size: 0.85rem;
            }
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">🍽️ Ruchique</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
                <div class="autocomplete-container mx-auto">
                    <input type="text" id="searchInput" name="keyword" placeholder="Search recipes...">
                    <ul id="suggestionsList"></ul>
                </div>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="/"><i class="fas fa-home"></i> Home</a></li>
                    <li class="nav-item">
                        <select class="lang-selector" id="languageSelector">
                            <option value="en">English</option>
                            <option value="ja">日本語 (Japanese)</option>
                            <option value="hi">हिंदी (Hindi)</option>
                            <option value="te">తెలుగు (Telugu)</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="recipe-container">
        <div class="recipe-header">
            <h1 class="recipe-title">${recipe.title}</h1>
            <p class="recipe-desc">${recipe.description}</p>
        </div>

        <div class="content-grid">
            <div class="card-section">
                <h2 class="section-header">📋 Ingredients</h2>
                <div class="ingredients-list">
                    ${recipe.ingredients.map(ing => `<div class="ingredient-chip">${ing}</div>`).join('\n                    ')}
                </div>
            </div>

            <div class="card-section">
                <h2 class="section-header">👨‍🍳 Instructions</h2>
                <div class="instructions-list">
                    ${recipe.instructions.map((instr, idx) => `
                    <div class="instruction-step">
                        <div class="step-number">${idx + 1}</div>
                        <div class="step-text">${instr}</div>
                    </div>`).join('\n                    ')}
                </div>
            </div>
        </div>

        <div class="action-buttons">
            <a href="/" class="btn-action btn-home"><i class="fas fa-arrow-left"></i> Back to Home</a>
            <a href="https://www.youtube.com/results?search_query=${recipe.title}" target="_blank" class="btn-action btn-video"><i class="fas fa-play-circle"></i> Watch Video</a>
        </div>
    </div>

    <div class="footer">
        <p>&copy; 2026 Ruchique - Delicious Indian Recipes <i class="fas fa-utensils" style="margin: 0 5px;"></i></p>
    </div>

    <div id="google_translate_element" style="display: none;"></div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="/js/translation.js"></script>
    <script>
        const searchInput = document.getElementById('searchInput');
        const suggestionsList = document.getElementById('suggestionsList');
        
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

        function initTranslate() {
            try {
                new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,te,hi,ja',
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

  return navbarHTML;
}

// Create files for each new recipe
console.log('📝 Creating detailed recipe pages with comprehensive ingredients and instructions...\n');

let createdCount = 0;
let errorCount = 0;

detailedRecipes.forEach(recipe => {
  try {
    const filePath = path.join(templatesDir, recipe.name + '.html');
    
    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`⏭️  Skipped ${recipe.name}.html (already exists)`);
      return;
    }

    const content = generateTemplate(recipe);
    fs.writeFileSync(filePath, content, 'utf8');
    createdCount++;
    console.log(`✅ Created ${recipe.name}.html - ${recipe.title}`);
    console.log(`   Ingredients: ${recipe.ingredients.length} unique items`);
    console.log(`   Instructions: ${recipe.instructions.length} detailed steps\n`);
  } catch (error) {
    errorCount++;
    console.error(`❌ Error creating ${recipe.name}: ${error.message}\n`);
  }
});

console.log('═'.repeat(70));
console.log('✅ DETAILED RECIPE CREATION COMPLETE!');
console.log('═'.repeat(70));
console.log(`\n📊 Summary:`);
console.log(`   Created: ${createdCount} new recipe pages`);
console.log(`   Errors: ${errorCount}`);
console.log(`\n🍽️  New Recipes Added:`);
detailedRecipes.forEach(recipe => {
  console.log(`   • ${recipe.title}`);
  console.log(`     - ${recipe.ingredients.length} unique ingredients`);
  console.log(`     - ${recipe.instructions.length} detailed instructions`);
});
console.log(`\n✨ Features:`);
console.log(`   ✓ Each recipe has unique, specific ingredients`);
console.log(`   ✓ Comprehensive step-by-step instructions`);
console.log(`   ✓ Cooking techniques explained`);
console.log(`   ✓ Ingredient quantities specified`);
console.log(`   ✓ Mobile responsive design`);
console.log(`   ✓ Multi-language support (English, Hindi, Telugu, Japanese)`);
console.log(`   ✓ Search functionality integrated`);
console.log(`\n🌐 Access recipes at:`);
detailedRecipes.forEach(recipe => {
  console.log(`   http://localhost:8080/${recipe.name}`);
});
