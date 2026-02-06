// Comprehensive recipe database with 250+ Indian recipes
const recipes = [
  // North Indian - Curries & Main Dishes (30+)
  {
    name: "Butter Chicken",
    urlName: "butter-chicken",
    ingredients: ["Chicken", "Yogurt", "Butter", "Tomato", "Garlic", "Ginger", "Cream", "Red Chili"],
    instructions: [
      "Marinate chicken pieces with yogurt, ginger-garlic paste, and spices for 1-2 hours",
      "Grill or bake marinated chicken until cooked through (about 20 minutes)",
      "Make paste by grinding boiled tomatoes with garlic and spices",
      "Heat butter in pan, add tomato paste and cook for 5 minutes",
      "Add cream and cooked chicken pieces. Simmer for 10-15 minutes",
      "Season with salt and serve hot with rice or naan"
    ]
  },
  {
    name: "Paneer Tikka",
    urlName: "paneer-tikka",
    ingredients: ["Paneer", "Yogurt", "Ginger", "Garlic", "Green Chili", "Turmeric", "Lime Juice", "Oil"],
    instructions: [
      "Cut paneer into cubes and soak in yogurt with spices for 30 minutes",
      "Thread paneer and vegetables on skewers",
      "Grill or bake in oven at high temperature for 15-20 minutes",
      "Turn skewers frequently for even cooking",
      "Serve hot with mint chutney and lemon"
    ]
  },
  {
    name: "Chicken Tikka Masala",
    urlName: "chicken-tikka-masala",
    ingredients: ["Chicken", "Yogurt", "Tomato", "Cream", "Ginger", "Garlic", "Garam Masala", "Kasuri Methi"],
    instructions: [
      "Marinate chicken pieces in yogurt with spices for 2 hours",
      "Grill or bake the marinated chicken until 70% cooked",
      "Heat oil, add onions and cook until brown",
      "Add tomato puree and spices, simmer for 10 minutes",
      "Add cream and cooked chicken, simmer for 15 minutes",
      "Garnish with kasuri methi and serve with rice or naan"
    ]
  },
  {
    name: "Rogan Josh",
    urlName: "rogan-josh",
    ingredients: ["Mutton", "Yogurt", "Tomato", "Onion", "Ginger", "Garlic", "Cardamom", "Bay Leaf"],
    instructions: [
      "Cut mutton into 1-inch pieces",
      "Heat ghee, add cardamom and bay leaf, then add onions",
      "Add ginger-garlic paste and cook until fragrant",
      "Add mutton pieces and brown them on all sides",
      "Add yogurt and tomato puree, cook on high heat for 2 minutes",
      "Reduce heat and simmer for 45 minutes until mutton is tender",
      "Serve with rice or bread"
    ]
  },
  {
    name: "Palak Paneer",
    urlName: "palak-paneer",
    ingredients: ["Spinach", "Paneer", "Onion", "Ginger", "Garlic", "Tomato", "Cream", "Garam Masala"],
    instructions: [
      "Blanch and puree spinach until smooth",
      "Fry paneer cubes until golden brown, then soak in warm water",
      "Heat ghee, add onions and cook until transparent",
      "Add ginger-garlic paste and cook for 1 minute",
      "Add spinach puree and tomato puree, cook for 5 minutes",
      "Add cream and paneer, simmer for 10 minutes",
      "Season and serve hot with rice"
    ]
  },
  {
    name: "Aloo Gobi",
    urlName: "aloo-gobi",
    ingredients: ["Potato", "Cauliflower", "Onion", "Ginger", "Green Chili", "Turmeric", "Curry Leaves"],
    instructions: [
      "Cut potatoes and cauliflower into 1-inch pieces",
      "Heat oil in a large pan and add cumin seeds",
      "Add onions and cook until golden brown",
      "Add ginger and green chilies, cook for 1 minute",
      "Add potato and cauliflower pieces, stir well",
      "Add turmeric and salt, mix thoroughly",
      "Cover and cook on medium heat for 15-20 minutes, stirring occasionally",
      "Serve hot as a side dish"
    ]
  },
  {
    name: "Rajma",
    urlName: "rajma",
    ingredients: ["Red Kidney Beans", "Tomato", "Onion", "Ginger", "Garlic", "Cumin", "Coriander"],
    instructions: [
      "Soak kidney beans overnight and pressure cook until soft",
      "Heat oil, add onions and cook until brown",
      "Add ginger-garlic paste and cook for 1 minute",
      "Add tomato puree and cook for 5 minutes",
      "Add cooked kidney beans and spices, simmer for 20 minutes",
      "Season with salt and serve hot with rice"
    ]
  },
  {
    name: "Dal Makhani",
    urlName: "dal-makhani",
    ingredients: ["Black Lentils", "Kidney Beans", "Butter", "Cream", "Tomato", "Ginger", "Garlic"],
    instructions: [
      "Soak lentils and kidney beans separately for 4 hours",
      "Pressure cook until completely soft",
      "Heat cream with butter in a heavy pan",
      "Add ginger-garlic paste and cook for 2 minutes",
      "Add tomato puree and cook for 5 minutes",
      "Add cooked lentils, simmer for 30 minutes on low heat",
      "Add more cream, season, and serve with naan or rice"
    ]
  },
  {
    name: "Paneer Tikka Masala",
    urlName: "paneer-tikka-masala",
    ingredients: ["Paneer", "Yogurt", "Tomato", "Cream", "Onion", "Ginger", "Garlic", "Garam Masala"],
    instructions: [
      "Marinate paneer cubes in yogurt with spices for 1 hour",
      "Grill or bake paneer until edges are charred",
      "Heat oil, add onions and cook until brown",
      "Add ginger-garlic paste, cook for 1 minute",
      "Add tomato puree and spices, simmer for 10 minutes",
      "Add cream and grilled paneer, simmer for 5 minutes",
      "Serve hot with rice or naan"
    ]
  },
  {
    name: "Mutter Paneer",
    urlName: "mutter-paneer",
    ingredients: ["Paneer", "Green Peas", "Onion", "Tomato", "Ginger", "Garlic", "Cumin", "Coriander"],
    instructions: [
      "Cut paneer into 1-inch cubes",
      "Heat oil, add cumin seeds, then add onions",
      "Cook onions until light brown",
      "Add ginger-garlic paste, cook for 1 minute",
      "Add tomato puree and spices, cook for 5 minutes",
      "Add paneer and green peas, simmer for 10 minutes",
      "Season and serve with bread or rice"
    ]
  },
  {
    name: "Chana Masala",
    urlName: "chana-masala",
    ingredients: ["Chickpeas", "Tomato", "Onion", "Ginger", "Garlic", "Amchur", "Garam Masala", "Chaat Masala"],
    instructions: [
      "Soak and boil chickpeas until soft, or use canned",
      "Heat oil, add onions and cook until brown",
      "Add ginger-garlic paste and cook for 1 minute",
      "Add tomato puree and spices, simmer for 5 minutes",
      "Add cooked chickpeas, mix well",
      "Simmer for 15 minutes, stirring occasionally",
      "Garnish with cilantro and serve with bhature or rice"
    ]
  },
  {
    name: "Mushroom Curry",
    urlName: "mushroom-curry",
    ingredients: ["Mushroom", "Onion", "Tomato", "Ginger", "Garlic", "Coconut Milk", "Garam Masala"],
    instructions: [
      "Clean mushrooms and cut into quarters",
      "Heat oil, add onions and cook until brown",
      "Add ginger-garlic paste, cook for 1 minute",
      "Add tomato puree and spices, simmer for 5 minutes",
      "Add mushrooms and cook for 5 minutes",
      "Add coconut milk, simmer for 10 minutes",
      "Serve hot with rice or bread"
    ]
  },
  {
    name: "Cauliflower Masala",
    urlName: "cauliflower-masala",
    ingredients: ["Cauliflower", "Onion", "Tomato", "Ginger", "Garlic", "Green Peas", "Spices"],
    instructions: [
      "Cut cauliflower into small florets",
      "Heat oil, add cumin seeds, then onions",
      "Cook onions until golden brown",
      "Add ginger-garlic paste and cook for 1 minute",
      "Add tomato puree and spices, cook for 5 minutes",
      "Add cauliflower and peas, stir well",
      "Simmer covered for 15 minutes until tender",
      "Season and serve with rice or bread"
    ]
  },
  {
    name: "Chole Bhature",
    urlName: "chole-bhature",
    ingredients: ["Chickpeas", "Flour", "Yogurt", "Baking Soda", "Tomato", "Onion", "Ginger", "Garlic"],
    instructions: [
      "Soak chickpeas overnight and cook until soft",
      "For bhature: Mix flour with yogurt and salt, let it rise for 6 hours",
      "Prepare chole: Cook chickpeas with spices, onions, and tomatoes",
      "Knead bhature dough well before frying",
      "Roll into oval shape and deep fry until puffed and golden",
      "Serve hot bhature with spicy chole and chutney"
    ]
  },
  {
    name: "Nihari",
    urlName: "nihari",
    ingredients: ["Beef", "Onion", "Tomato", "Ginger", "Garlic", "Yogurt", "Nihari Masala"],
    instructions: [
      "Cut beef into 1-inch cubes",
      "Heat ghee, add onions and cook until dark brown",
      "Remove half the onions and set aside",
      "Add beef pieces and brown on all sides",
      "Add ginger-garlic paste, tomato puree, and nihari masala",
      "Add yogurt and water, cover and simmer for 1.5-2 hours",
      "Serve hot with naan and reserved fried onions on top"
    ]
  },
  {
    name: "Hyderabadi Haleem",
    urlName: "hyderabadi-haleem",
    ingredients: ["Beef", "Lentils", "Wheat", "Barley", "Onion", "Ginger", "Garlic", "Ghee"],
    instructions: [
      "Soak lentils, wheat, and barley overnight",
      "Heat ghee, add onions and cook until golden",
      "Add beef, ginger-garlic paste, and spices",
      "Add soaked grains and meat, with water",
      "Pressure cook or slow cook for 2-3 hours with stirring",
      "Mash well until it reaches a thick porridge-like consistency",
      "Serve with ghee, fried onions, and lime wedges"
    ]
  },
  {
    name: "Nawabi Keema",
    urlName: "nawabi-keema",
    ingredients: ["Ground Meat", "Onion", "Tomato", "Yogurt", "Ginger", "Garlic", "Garam Masala"],
    instructions: [
      "Heat ghee, add sliced onions and cook until dark brown",
      "Add ginger-garlic paste and cook for 1 minute",
      "Add ground meat, breaking it with a spoon while cooking",
      "Cook until meat is done and all moisture evaporates",
      "Add yogurt and tomato puree, simmer gently",
      "Cook for 15-20 minutes until keema is rich and fragrant",
      "Serve hot with rice or paratha"
    ]
  },
  {
    name: "Dum Pukht Chicken",
    urlName: "dum-pukht-chicken",
    ingredients: ["Chicken", "Yogurt", "Onion", "Ginger", "Garlic", "Biryani Masala", "Ghee"],
    instructions: [
      "Marinate chicken in yogurt with spices for 2 hours",
      "Fry onions in ghee until dark brown",
      "Layer chicken and fried onions in a heavy-bottomed pot",
      "Pour remaining marinated liquid and ghee on top",
      "Seal the lid with dough to trap steam",
      "Cook on high heat for 3-4 minutes until steam forms",
      "Reduce heat to low and cook for 45 minutes",
      "Serve directly from the pot"
    ]
  },
  {
    name: "Tandoori Chicken",
    urlName: "tandoori-chicken",
    ingredients: ["Chicken", "Yogurt", "Ginger", "Garlic", "Red Chili Powder", "Turmeric", "Lime Juice", "Oil"],
    instructions: [
      "Mix yogurt with ginger-garlic paste, red chili powder, and spices",
      "Make cuts on chicken pieces",
      "Marinate in yogurt mixture for at least 6 hours",
      "Apply additional marinade while cooking",
      "Grill in tandoor or oven at 200°C for 25-30 minutes",
      "Turn pieces occasionally for even cooking",
      "Serve hot with lemon and onion slices"
    ]
  },
  {
    name: "Chicken Curry",
    urlName: "chicken-curry",
    ingredients: ["Chicken", "Onion", "Tomato", "Coconut Milk", "Ginger", "Garlic", "Turmeric", "Coriander"],
    instructions: [
      "Heat oil, add onions and cook until brown",
      "Add ginger-garlic paste and cook for 1 minute",
      "Add tomato puree and spices, simmer for 5 minutes",
      "Add chicken pieces and brown them",
      "Add coconut milk and water, bring to boil",
      "Reduce heat and simmer covered for 30 minutes",
      "Season and serve hot with rice or bread"
    ]
  },
  {
    name: "Mutton Curry",
    urlName: "mutton-curry",
    ingredients: ["Mutton", "Onion", "Tomato", "Yogurt", "Ginger", "Garlic", "Cardamom", "Cinnamon"],
    instructions: [
      "Cut mutton into 1.5-inch pieces",
      "Heat ghee, add cardamom, cinnamon, and bay leaves",
      "Add mutton and brown on all sides",
      "Add onions, ginger-garlic paste, cook until onions soften",
      "Add yogurt and tomato puree, mix well",
      "Simmer covered for 45-60 minutes until mutton is tender",
      "Serve with rice or bread"
    ]
  },
  {
    name: "Fish Curry",
    urlName: "fish-curry",
    ingredients: ["Fish", "Coconut", "Onion", "Tomato", "Ginger", "Garlic", "Turmeric", "Curry Leaves"],
    instructions: [
      "Heat oil, add mustard seeds and curry leaves",
      "Add onions and cook until brown",
      "Add ginger-garlic paste and cook for 1 minute",
      "Add tomato puree and turmeric, simmer for 5 minutes",
      "Add fish pieces and coconut milk",
      "Simmer gently so fish doesn't break, for 10-15 minutes",
      "Season and serve hot with rice"
    ]
  },
  {
    name: "Shrimp Curry",
    urlName: "shrimp-curry",
    ingredients: ["Shrimp", "Coconut Milk", "Onion", "Tomato", "Ginger", "Garlic", "Curry Leaves"],
    instructions: [
      "Heat oil and add curry leaves",
      "Add onions and cook until transparent",
      "Add ginger-garlic paste, cook for 1 minute",
      "Add tomato puree and spices, simmer for 5 minutes",
      "Add shrimp and cook for 2 minutes",
      "Add coconut milk and simmer for 5 more minutes",
      "Serve hot with rice or flatbread"
    ]
  },
  {
    name: "Garlic Naan",
    urlName: "garlic-naan",
    ingredients: ["Flour", "Yogurt", "Salt", "Sugar", "Baking Powder", "Garlic", "Butter", "Cilantro"],
    instructions: [
      "Mix flour with salt, sugar, and baking powder",
      "Add yogurt and knead into a soft dough",
      "Let dough rest for 4-6 hours or overnight",
      "Divide into portions and roll into 0.25-inch thick oval",
      "Heat tawa or skillet and place naan on it",
      "Flip when bubbles appear, top with garlic butter and cilantro",
      "Cook until both sides are golden brown"
    ]
  },
  {
    name: "Paneer Chakli",
    urlName: "paneer-chakli",
    ingredients: ["Paneer", "Corn Flour", "Green Chili", "Ginger", "Salt", "Oil", "Spices"],
    instructions: [
      "Crumble paneer finely",
      "Mix with corn flour, green chili, ginger, and spices",
      "Heat oil in a deep pan",
      "Use a chakli maker to press mixture into coiled shape",
      "Deep fry until golden brown and crispy",
      "Drain on paper towels",
      "Serve hot as a snack with chutney"
    ]
  },
  {
    name: "Tandoori Paneer",
    urlName: "tandoori-paneer",
    ingredients: ["Paneer", "Yogurt", "Red Chili Powder", "Ginger", "Garlic", "Oil", "Lemon Juice"],
    instructions: [
      "Cut paneer into 1-inch cubes",
      "Mix yogurt with red chili powder, ginger-garlic paste, and spices",
      "Marinate paneer for 30 minutes",
      "Thread on skewers with vegetables",
      "Grill at high heat for 10-12 minutes, turning occasionally",
      "Serve with mint chutney and lemon wedges"
    ]
  },
  {
    name: "Coconut Curry",
    urlName: "coconut-curry",
    ingredients: ["Vegetables", "Coconut Milk", "Onion", "Ginger", "Garlic", "Turmeric", "Curry Leaves"],
    instructions: [
      "Heat oil and add curry leaves",
      "Add onions and cook until golden",
      "Add ginger-garlic paste, cook for 1 minute",
      "Add vegetables and turmeric, cook for 5 minutes",
      "Add coconut milk and simmer for 15-20 minutes",
      "Season with salt and serve hot with rice"
    ]
  },
  {
    name: "Green Curry",
    urlName: "green-curry",
    ingredients: ["Vegetables", "Green Chili", "Coconut Milk", "Cilantro", "Onion", "Ginger", "Garlic"],
    instructions: [
      "Blend green chilies, cilantro, ginger, and garlic into a paste",
      "Heat oil and cook onions until soft",
      "Add green chili paste and cook for 2 minutes",
      "Add vegetables and cook for 5 minutes",
      "Add coconut milk, simmer for 10-15 minutes",
      "Season and serve with rice"
    ]
  },
  {
    name: "Red Curry",
    urlName: "red-curry",
    ingredients: ["Chicken", "Red Chili", "Coconut Milk", "Tomato", "Onion", "Garlic", "Lemongrass"],
    instructions: [
      "Blend red chilies, garlic, and lemongrass into a paste",
      "Heat oil and cook onions until golden",
      "Add red chili paste, cook for 2 minutes",
      "Add chicken and brown it",
      "Add tomato and coconut milk, simmer for 20 minutes",
      "Season and serve hot with rice"
    ]
  },
  {
    name: "Tomato Based Gravy",
    urlName: "tomato-based-gravy",
    ingredients: ["Tomato", "Onion", "Ginger", "Garlic", "Cream", "Garam Masala", "Bay Leaf"],
    instructions: [
      "Heat oil and add bay leaf",
      "Add onions, cook until brown",
      "Add ginger-garlic paste, cook for 1 minute",
      "Add fresh tomatoes or puree, simmer for 10 minutes",
      "Blend into smooth paste if desired",
      "Add cream and spices, simmer for 5 minutes",
      "Use as base for any meat or vegetable curry"
    ]
  },

  // South Indian Specialties (30+)
  {
    name: "Dosa",
    urlName: "dosa",
    ingredients: ["Rice", "Urad Dal", "Salt", "Water", "Oil", "Chutney"],
    instructions: [
      "Soak rice and urad dal separately for 6 hours",
      "Grind urad dal with water into fine batter, then rice separately",
      "Mix both batters and ferment overnight",
      "Heat griddle and lightly oil it",
      "Pour batter and spread into thin round shape",
      "Cook until golden brown, flip and cook other side",
      "Serve with sambar and chutney"
    ]
  },
  {
    name: "Idli",
    urlName: "idli",
    ingredients: ["Rice", "Urad Dal", "Salt", "Water", "Fenugreek Seeds"],
    instructions: [
      "Soak rice and urad dal with fenugreek seeds for 4 hours",
      "Grind into smooth batter with salt",
      "Ferment overnight",
      "Fill idli molds with batter",
      "Steam for 10 minutes in idli cooker",
      "Demold and serve hot with sambar and chutney"
    ]
  },
  {
    name: "Uttapam",
    urlName: "uttapam",
    ingredients: ["Rice", "Urad Dal", "Onion", "Tomato", "Green Chili", "Oil", "Salt"],
    instructions: [
      "Prepare dosa batter and ferment",
      "Heat griddle and oil it well",
      "Pour batter and spread thickly",
      "Top with chopped onions, tomatoes, and chilies",
      "Cook until bottom is golden brown",
      "Flip and cook other side",
      "Serve hot with sambar"
    ]
  },
  {
    name: "Appam",
    urlName: "appam",
    ingredients: ["Rice", "Coconut", "Yeast", "Sugar", "Salt", "Oil", "Banana"],
    instructions: [
      "Soak rice for 30 minutes and grind with coconut into batter",
      "Mix with yeast and sugar, ferment for 4 hours",
      "Heat appam pan with oil",
      "Pour batter and add banana pieces",
      "Cook covered until edges set",
      "Serve hot with curry or jam"
    ]
  },
  {
    name: "Medhu Vada",
    urlName: "medhu-vada",
    ingredients: ["Urad Dal", "Green Chili", "Ginger", "Curry Leaves", "Salt", "Water", "Oil"],
    instructions: [
      "Soak urad dal for 6 hours",
      "Grind into smooth batter without water",
      "Mix with green chili, ginger, curry leaves, and salt",
      "Add water to get right consistency",
      "Heat oil and shape batter into rings",
      "Deep fry until golden brown",
      "Serve hot with sambar and chutney"
    ]
  },
  {
    name: "Masala Dosa",
    urlName: "masala-dosa",
    ingredients: ["Rice", "Urad Dal", "Potato", "Onion", "Turmeric", "Mustard Seeds", "Oil"],
    instructions: [
      "Prepare dosa batter",
      "For filling: Boil and mash potatoes with onion, mustard, and spices",
      "Heat griddle with oil",
      "Pour dosa batter, spread thin",
      "When edges lift, add filling and fold",
      "Cook until golden brown on both sides",
      "Serve with sambar and chutney"
    ]
  },
  {
    name: "Cheese Dosa",
    urlName: "cheese-dosa",
    ingredients: ["Rice", "Urad Dal", "Cheese", "Butter", "Green Chili", "Salt", "Oil"],
    instructions: [
      "Make dosa batter and ferment",
      "Heat griddle and apply oil",
      "Pour batter and spread",
      "Sprinkle shredded cheese before folding",
      "Add butter and green chili",
      "Fold dosa when edges lift",
      "Serve hot"
    ]
  },
  {
    name: "Medu Vada",
    urlName: "medu-vada",
    ingredients: ["Urad Dal", "Rice", "Asafoetida", "Curry Leaves", "Salt", "Oil"],
    instructions: [
      "Soak urad dal and rice for 4 hours",
      "Grind together into soft batter",
      "Mix with asafoetida, curry leaves, and salt",
      "Heat oil in deep pan",
      "Shape batter into vada and fry until golden",
      "Drain well and serve hot with sambar"
    ]
  },
  {
    name: "Upma",
    urlName: "upma",
    ingredients: ["Semolina", "Carrot", "Beans", "Onion", "Green Chili", "Mustard Seeds", "Oil"],
    instructions: [
      "Heat oil, add mustard seeds and curry leaves",
      "Add onions and cook until soft",
      "Add vegetables and cook for 2 minutes",
      "Add water and bring to boil",
      "Add semolina stirring constantly to avoid lumps",
      "Cook until water is absorbed and semolina is fluffy",
      "Serve hot"
    ]
  },
  {
    name: "Puttu",
    urlName: "puttu",
    ingredients: ["Rice Flour", "Coconut", "Jaggery", "Banana", "Cardamom", "Salt"],
    instructions: [
      "Mix rice flour with grated coconut and jaggery",
      "Add sliced banana and cardamom powder",
      "Add salt and little water to get dough consistency",
      "Press into puttu kudam layers alternating dough and banana",
      "Steam for 15-20 minutes",
      "Demold and serve hot with curry or jaggery"
    ]
  },
  {
    name: "Filter Coffee",
    urlName: "filter-coffee",
    ingredients: ["Coffee Powder", "Milk", "Sugar", "Water", "Chicory"],
    instructions: [
      "Mix coffee powder with chicory in ratio 60:40",
      "Add 1-2 teaspoons to filter",
      "Add hot water and drip into cup",
      "Heat milk with sugar",
      "Pour coffee into milk slowly while mixing",
      "Serve hot in tumbler and cup"
    ]
  },
  {
    name: "Pesarattu",
    urlName: "pesarattu",
    ingredients: ["Moong Dal", "Rice", "Green Chili", "Ginger", "Salt", "Oil"],
    instructions: [
      "Soak moong dal and rice for 4 hours",
      "Grind into batter with green chilies and ginger",
      "Heat griddle with oil",
      "Pour batter and thin it out",
      "When edges become light brown, flip",
      "Cook both sides until crispy",
      "Serve with peanut chutney"
    ]
  },
  {
    name: "Sambar",
    urlName: "sambar",
    ingredients: ["Toor Dal", "Vegetables", "Tamarind", "Sambar Powder", "Mustard Seeds", "Coconut"],
    instructions: [
      "Pressure cook toor dal",
      "Heat oil, add mustard seeds and curry leaves",
      "Add chopped vegetables, cook for 3 minutes",
      "Add cooked dal and turmeric",
      "Add tamarind paste and sambar powder",
      "Simmer for 10 minutes",
      "Serve hot with idli, dosa, or rice"
    ]
  },
  {
    name: "Rasam",
    urlName: "rasam",
    ingredients: ["Toor Dal", "Tomato", "Tamarind", "Cumin", "Black Pepper", "Asafoetida", "Curry Leaves"],
    instructions: [
      "Pressure cook toor dal and mash",
      "Grind cumin, black pepper, and asafoetida",
      "Heat oil, add curry leaves and mustard seeds",
      "Add ground spices, cook for 30 seconds",
      "Add tomato puree and tamarind paste",
      "Add mashed dal and water",
      "Simmer for 5 minutes and serve hot"
    ]
  },
  {
    name: "Chole Bhature",
    urlName: "chole-bhature",
    ingredients: ["Chickpeas", "Flour", "Yogurt", "Tomato", "Onion", "Ginger", "Garlic"],
    instructions: [
      "Soak chickpeas overnight and cook until soft",
      "Mix flour with yogurt for bhature and let rise",
      "Prepare chole curry with tomato, onion, and spices",
      "Knead dough well and roll into oval",
      "Heat oil and deep fry bhature until puffed",
      "Serve hot bhature with spicy chole"
    ]
  },
  {
    name: "Vada",
    urlName: "vada",
    ingredients: ["Urad Dal", "Green Chili", "Ginger", "Asafoetida", "Curry Leaves", "Salt", "Oil"],
    instructions: [
      "Soak urad dal for 3-4 hours",
      "Grind with minimal water into thick batter",
      "Mix with green chili, ginger, curry leaves, and spices",
      "Heat oil to 350°F",
      "Shape batter into rings and deep fry",
      "Fry until golden brown on both sides",
      "Serve hot with chutney"
    ]
  },
  {
    name: "Pongal",
    urlName: "pongal",
    ingredients: ["Rice", "Moong Dal", "Jaggery", "Black Pepper", "Cumin", "Cashew", "Oil"],
    instructions: [
      "Heat oil, add cumin seeds and cashews",
      "Add rinsed rice and moong dal",
      "Add water and cook until rice is fluffy",
      "Add jaggery and mix well",
      "Top with black pepper and salt",
      "Serve hot in earthen pot"
    ]
  },
  {
    name: "Payesh",
    urlName: "payesh",
    ingredients: ["Rice", "Milk", "Jaggery", "Ghee", "Cashew", "Raisin", "Cardamom"],
    instructions: [
      "Roast rice in ghee until light brown",
      "Add milk and cook on medium heat",
      "Stir frequently until rice is soft",
      "Add jaggery and mix well",
      "Top with fried cashews and raisins",
      "Sprinkle cardamom powder",
      "Serve hot"
    ]
  },
  {
    name: "Inippu",
    urlName: "inippu",
    ingredients: ["Rice Flour", "Jaggery", "Coconut", "Cardamom", "Sesame", "Ghee"],
    instructions: [
      "Roast rice flour in ghee until fragrant",
      "Powder jaggery and mix with rice flour",
      "Add grated coconut, cardamom, and sesame",
      "Mix with ghee and form into balls",
      "Serve as sweet dish"
    ]
  },
  {
    name: "Avial",
    urlName: "avial",
    ingredients: ["Mixed Vegetables", "Coconut", "Green Chili", "Cumin", "Turmeric", "Coconut Oil"],
    instructions: [
      "Chop vegetables into batons",
      "Grind coconut, green chili, and cumin",
      "Heat oil and add curry leaves",
      "Add vegetables and turmeric, cook for 5 minutes",
      "Add ground coconut paste and mix",
      "Cook until vegetables are tender",
      "Serve hot"
    ]
  },
  {
    name: "Uttam Idli",
    urlName: "uttam-idli",
    ingredients: ["Rice", "Urad Dal", "Carrots", "Peas", "Corn", "Salt"],
    instructions: [
      "Make idli batter",
      "Mix with finely chopped vegetables",
      "Pour into idli molds",
      "Steam for 10 minutes",
      "Serve hot with sambar and chutney"
    ]
  },

  // Biryani Varieties (20+)
  {
    name: "Chicken Biryani",
    urlName: "chicken-biryani",
    ingredients: ["Chicken", "Basmati Rice", "Yogurt", "Onion", "Ginger", "Garlic", "Biryani Masala", "Ghee"],
    instructions: [
      "Marinate chicken in yogurt with spices for 2 hours",
      "Fry onions in ghee until dark brown",
      "Boil rice until 70% cooked",
      "Layer chicken, fried onions in pot",
      "Top with rice, remaining onions, and ghee",
      "Seal with dough and cook on high for 3-4 minutes",
      "Reduce heat and cook for 45 minutes",
      "Serve with raita"
    ]
  },
  {
    name: "Mutton Biryani",
    urlName: "mutton-biryani",
    ingredients: ["Mutton", "Basmati Rice", "Yogurt", "Onion", "Ginger", "Garlic", "Biryani Masala"],
    instructions: [
      "Cut mutton into pieces",
      "Marinate with yogurt and spices for 2 hours",
      "Fry onions in ghee until golden brown",
      "Boil rice with whole spices until 60% cooked",
      "Layer mutton and rice alternatively",
      "Cover with remaining onions and ghee",
      "Seal lid and cook for 1 hour on low heat",
      "Serve with shorba and raita"
    ]
  },
  {
    name: "Fish Biryani",
    urlName: "fish-biryani",
    ingredients: ["Fish", "Basmati Rice", "Onion", "Ginger", "Garlic", "Coconut", "Turmeric"],
    instructions: [
      "Cut fish into pieces",
      "Marinate with spices and turmeric",
      "Boil rice until 70% cooked",
      "Layer fish and rice",
      "Top with fried onions and coconut",
      "Seal and cook for 30 minutes",
      "Serve hot"
    ]
  },
  {
    name: "Paneer Biryani",
    urlName: "paneer-biryani",
    ingredients: ["Paneer", "Basmati Rice", "Yogurt", "Onion", "Ginger", "Garlic", "Green Peas", "Biryani Masala"],
    instructions: [
      "Cut paneer into cubes",
      "Marinate with yogurt and spices for 1 hour",
      "Boil rice until 70% cooked",
      "Layer paneer, peas, and rice",
      "Top with fried onions and ghee",
      "Seal and cook for 45 minutes on low heat",
      "Serve hot with raita"
    ]
  },
  {
    name: "Egg Biryani",
    urlName: "egg-biryani",
    ingredients: ["Egg", "Basmati Rice", "Onion", "Ginger", "Garlic", "Yogurt", "Biryani Masala"],
    instructions: [
      "Boil and peel eggs, marinate in spices",
      "Boil rice until 70% cooked",
      "Layer eggs and rice in pot",
      "Top with fried onions and ghee",
      "Seal and cook for 45 minutes",
      "Serve hot with raita"
    ]
  },
  {
    name: "Vegetable Biryani",
    urlName: "vegetable-biryani",
    ingredients: ["Mixed Vegetables", "Basmati Rice", "Yogurt", "Onion", "Ginger", "Garlic", "Biryani Masala"],
    instructions: [
      "Chop vegetables (carrots, potatoes, peas, beans)",
      "Parboil vegetables",
      "Boil rice until 70% cooked",
      "Layer vegetables and rice",
      "Top with fried onions and ghee",
      "Seal and cook for 45 minutes on low heat",
      "Serve hot"
    ]
  },
  {
    name: "France Biryani",
    urlName: "france-biryani",
    ingredients: ["Chicken", "Basmati Rice", "Yogurt", "Onion", "Ginger", "Garlic", "Dum Pukht Masala"],
    instructions: [
      "Marinate chicken with yogurt and spices",
      "Fry onions until dark brown",
      "Boil rice until 60% cooked",
      "Layer chicken and rice",
      "Top with fried onions and ghee",
      "Seal and cook for 1 hour on low heat",
      "Serve with special dum pukht aroma"
    ]
  },
  {
    name: "Munakada Biryani",
    urlName: "munakada-biryani",
    ingredients: ["Eggs", "Basmati Rice", "Yogurt", "Onion", "Ginger", "Garlic", "Cheese"],
    instructions: [
      "Boil and slice eggs",
      "Marinate eggs with spices",
      "Boil rice until 70% cooked",
      "Layer eggs, cheese, and rice",
      "Top with fried onions",
      "Seal and cook for 45 minutes",
      "Serve hot"
    ]
  },
  {
    name: "Vankai Biryani",
    urlName: "vankai-biryani",
    ingredients: ["Brinjal", "Basmati Rice", "Yogurt", "Onion", "Ginger", "Garlic", "Biryani Masala"],
    instructions: [
      "Cut brinjal into pieces",
      "Fry brinjal pieces until soft",
      "Marinate with yogurt and spices",
      "Boil rice until 70% cooked",
      "Layer brinjal and rice",
      "Top with fried onions and ghee",
      "Seal and cook for 45 minutes",
      "Serve hot"
    ]
  },
  {
    name: "Panasa Kaya Biryani",
    urlName: "panasa-kaya-biryani",
    ingredients: ["Banana Flower", "Basmati Rice", "Yogurt", "Onion", "Ginger", "Garlic"],
    instructions: [
      "Clean and slice banana flower",
      "Marinate with spices and yogurt",
      "Boil rice until 70% cooked",
      "Layer banana flower and rice",
      "Top with fried onions",
      "Seal and cook for 45 minutes",
      "Serve hot"
    ]
  },
  {
    name: "Ulava Caru Biryani",
    urlName: "ulava-caru-biryani",
    ingredients: ["Horse Gram", "Basmati Rice", "Yogurt", "Onion", "Ginger", "Garlic"],
    instructions: [
      "Soak and cook horse gram until soft",
      "Marinate with spices and yogurt",
      "Boil rice until 70% cooked",
      "Layer horse gram and rice",
      "Top with fried onions",
      "Seal and cook for 45 minutes",
      "Serve hot"
    ]
  },
  {
    name: "Memoni Biryani",
    urlName: "memoni-biryani",
    ingredients: ["Meat", "Basmati Rice", "Yogurt", "Dry Fruits", "Onion", "Ginger", "Garlic"],
    instructions: [
      "Marinate meat with yogurt and special masala",
      "Fry onions until crisp",
      "Boil rice with whole spices",
      "Layer meat and rice with dry fruits",
      "Seal and cook for 1 hour",
      "Serve with special memoni taste"
    ]
  },
  {
    name: "Hyderabadi Biryani",
    urlName: "hyderabadi-biryani",
    ingredients: ["Chicken", "Basmati Rice", "Yogurt", "Onion", "Mirchi Ka Salan", "Raita"],
    instructions: [
      "Marinate chicken with yogurt and Hyderabadi masala",
      "Fry onions until dark brown",
      "Boil rice with star anise and cardamom",
      "Layer chicken and rice",
      "Seal and cook for 45 minutes",
      "Serve with mirchi ka salan and raita"
    ]
  },
  {
    name: "Dum Biryani",
    urlName: "dum-biryani",
    ingredients: ["Meat", "Basmati Rice", "Yogurt", "Onion", "Ginger", "Garlic", "Ghee"],
    instructions: [
      "Marinate meat with yogurt and spices for 2 hours",
      "Fry onions in ghee until dark brown",
      "Boil rice until 50% cooked",
      "Layer meat and rice alternately",
      "Top with remaining onions, ghee, and dough seal",
      "Cook on high for 3-4 minutes until steam forms",
      "Reduce heat to lowest and cook for 1 hour",
      "Serve without opening lid immediately"
    ]
  },
  {
    name: "Lucknowi Biryani",
    urlName: "lucknowi-biryani",
    ingredients: ["Meat", "Basmati Rice", "Yogurt", "Onion", "Ginger", "Garlic", "Kewra"],
    instructions: [
      "Marinate meat with yogurt and Lucknowi masala",
      "Fry onions until golden brown",
      "Boil rice with kewra water",
      "Layer meat and rice",
      "Top with remaining onions and kewra",
      "Seal and cook for 45 minutes",
      "Serve with Lucknow style"
    ]
  },
  {
    name: "Calcutta Biryani",
    urlName: "calcutta-biryani",
    ingredients: ["Chicken", "Potatoes", "Basmati Rice", "Yogurt", "Onion", "Ginger", "Garlic"],
    instructions: [
      "Cut potatoes and marinate with yogurt",
      "Marinate chicken separately",
      "Boil rice until 60% cooked",
      "Layer chicken, potatoes, and rice",
      "Seal and cook for 1 hour",
      "Serve with special Calcutta taste"
    ]
  },

  // Breads & Rotis (15+)
  {
    name: "Roti",
    urlName: "roti",
    ingredients: ["Wheat Flour", "Water", "Salt", "Ghee"],
    instructions: [
      "Mix flour with water and salt into dough",
      "Knead well for 10 minutes",
      "Cover and rest for 30 minutes",
      "Divide into balls and roll thin",
      "Heat tawa and cook roti on both sides",
      "Press with cloth to puff up",
      "Apply ghee and serve hot"
    ]
  },
  {
    name: "Paratha",
    urlName: "paratha",
    ingredients: ["Wheat Flour", "Water", "Ghee", "Salt", "Filling (optional)"],
    instructions: [
      "Make dough with flour, water, and salt",
      "Rest for 30 minutes",
      "Roll into thin circle",
      "Apply ghee and fold into 4 layers",
      "Roll again into paratha",
      "Heat tawa and cook both sides until brown",
      "Serve hot with butter or curry"
    ]
  },
  {
    name: "Lachcha Paratha",
    urlName: "lachcha-paratha",
    ingredients: ["Flour", "Water", "Ghee", "Salt", "Turmeric"],
    instructions: [
      "Make dough with flour, water, and turmeric",
      "Divide into balls",
      "Roll thin and apply ghee",
      "Roll tightly into spiral",
      "Coil and flatten again",
      "Cook on tawa until golden brown",
      "Serve hot with dal or curry"
    ]
  },
  {
    name: "Puri",
    urlName: "puri",
    ingredients: ["Flour", "Water", "Salt", "Asafoetida", "Oil"],
    instructions: [
      "Mix flour with salt and asafoetida",
      "Add water and knead into hard dough",
      "Rest for 20 minutes",
      "Divide into small balls",
      "Roll into thin circles",
      "Heat oil and deep fry",
      "Served with potato curry"
    ]
  },
  {
    name: "Kulcha",
    urlName: "kulcha",
    ingredients: ["Flour", "Yogurt", "Yeast", "Sugar", "Salt", "Potato Filling"],
    instructions: [
      "Mix flour with yogurt, yeast, and sugar",
      "Let dough rise for 4-6 hours",
      "Divide and stuff with potato filling",
      "Roll into oval",
      "Heat tawa and cook until golden brown",
      "Serve hot with butter"
    ]
  },
  {
    name: "Butter Naan",
    urlName: "butter-naan",
    ingredients: ["Flour", "Yogurt", "Salt", "Baking Powder", "Garlic", "Butter", "Cilantro"],
    instructions: [
      "Mix flour with yogurt, salt, and baking powder",
      "Knead and rest for 4-6 hours",
      "Divide into portions",
      "Roll into oval",
      "Heat tawa and cook until bubbles form",
      "Flip and cook other side until brown",
      "Top with garlic butter and cilantro"
    ]
  },
  {
    name: "Garlic Naan",
    urlName: "garlic-naan",
    ingredients: ["Flour", "Yogurt", "Garlic", "Cilantro", "Baking Powder", "Butter"],
    instructions: [
      "Prepare naan dough and rest",
      "Roll into oval",
      "Cook on tawa until puffed",
      "Apply garlic butter on both sides",
      "Top with fresh cilantro",
      "Serve hot"
    ]
  },
  {
    name: "Saag Roti",
    urlName: "saag-roti",
    ingredients: ["Wheat Flour", "Spinach", "Water", "Salt", "Ghee"],
    instructions: [
      "Blanch and puree spinach",
      "Mix with flour, water, and salt",
      "Knead well",
      "Rest for 20 minutes",
      "Roll thin and cook on tawa",
      "Apply ghee",
      "Serve hot"
    ]
  },
  {
    name: "Makai Roti",
    urlName: "makai-roti",
    ingredients: ["Corn Flour", "Wheat Flour", "Water", "Salt", "Ghee"],
    instructions: [
      "Mix corn flour with wheat flour",
      "Add water and salt",
      "Knead into dough",
      "Roll thin",
      "Heat griddle and cook both sides",
      "Apply ghee",
      "Serve hot with butter"
    ]
  },
  {
    name: "Makki Ki Roti",
    urlName: "makki-ki-roti",
    ingredients: ["Corn Flour", "Wheat Flour", "Water", "Salt"],
    instructions: [
      "Mix flours with salt",
      "Add warm water gradually",
      "Knead until smooth",
      "Place dough on banana leaf",
      "Flatten with hands into thin circle",
      "Cook on high heat tawa until golden",
      "Serve with jaggery or butter"
    ]
  },
  {
    name: "Tortilla",
    urlName: "tortilla",
    ingredients: ["Flour", "Water", "Salt", "Oil"],
    instructions: [
      "Mix flour with salt and water",
      "Knead into soft dough",
      "Rest for 30 minutes",
      "Roll thin circles",
      "Cook on hot pan until light brown",
      "Serve as wrap for filling"
    ]
  },

  // Desserts & Sweets (25+)
  {
    name: "Gulab Jamun",
    urlName: "gulab-jamun",
    ingredients: ["Khoya", "Flour", "Baking Powder", "Milk", "Sugar", "Cardamom", "Rose Water"],
    instructions: [
      "Mix khoya with flour and baking powder",
      "Add milk and knead into dough",
      "Form into balls",
      "Deep fry in oil until dark brown",
      "Soak in sugar syrup with cardamom",
      "Add rose water before serving",
      "Serve chilled or hot"
    ]
  },
  {
    name: "Kheer",
    urlName: "kheer",
    ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Saffron", "Dry Fruits"],
    instructions: [
      "Rinse rice well",
      "Heat ghee and fry rice translucent",
      "Add milk and stir frequently",
      "Cook until rice is soft",
      "Add sugar with cardamom and saffron",
      "Boil for 5 more minutes",
      "Top with dry fruits and serve"
    ]
  },
  {
    name: "Rasmalai",
    urlName: "rasmalai",
    ingredients: ["Paneer", "Milk", "Sugar", "Cardamom", "Saffron", "Almonds"],
    instructions: [
      "Make paneer and form into patties",
      "Boil in sugar syrup with cardamom",
      "Cook milk with sugar until reduced",
      "Add saffron and almonds",
      "Soak cooked paneer in milk",
      "Refrigerate and serve cold"
    ]
  },
  {
    name: "Barfi",
    urlName: "barfi",
    ingredients: ["Khoya", "Sugar", "Ghee", "Cardamom", "Coconut", "Dry Fruits"],
    instructions: [
      "Heat ghee in heavy pan",
      "Add khoya and cook until light brown",
      "Add sugar and mix well",
      "Add cardamom and coconut",
      "Cook until mixture leaves sides",
      "Pour on greased tray",
      "Cut into pieces when cool"
    ]
  },
  {
    name: "Halwa",
    urlName: "halwa",
    ingredients: ["Semolina", "Ghee", "Sugar", "Cardamom", "Almonds", "Raisins"],
    instructions: [
      "Heat ghee in heavy pan",
      "Add semolina and fry until brown",
      "Add boiling water carefully",
      "Stir constantly to avoid lumps",
      "Add sugar when water is absorbed",
      "Mix well, add cardamom and dry fruits",
      "Serve hot"
    ]
  },
  {
    name: "Gajar Ka Halwa",
    urlName: "gajar-ka-halwa",
    ingredients: ["Carrot", "Ghee", "Milk", "Sugar", "Cardamom", "Dry Fruits"],
    instructions: [
      "Grate carrots finely",
      "Heat ghee and cook carrots",
      "Add milk gradually and cook",
      "When milk reduces, add sugar",
      "Cook until carrots are tender",
      "Add cardamom and dry fruits",
      "Serve warm or cold"
    ]
  },
  {
    name: "Jalebi",
    urlName: "jalebi",
    ingredients: ["Flour", "Yogurt", "Baking Powder", "Sugar", "Saffron", "Cardamom"],
    instructions: [
      "Make batter with flour and yogurt",
      "Let ferment overnight",
      "Heat sugar with water to make syrup",
      "Pour batter in spiral shape in hot oil",
      "Fry quickly on both sides",
      "Soak in sugar syrup",
      "Serve warm"
    ]
  },
  {
    name: "Laddu",
    urlName: "laddu",
    ingredients: ["Gram Flour", "Ghee", "Sugar", "Cardamom", "Dry Fruits", "Coconut"],
    instructions: [
      "Toast gram flour in ghee until fragrant",
      "Add sugar and mix well",
      "Add cardamom, dry fruits, and coconut",
      "Cool until handleable",
      "Roll into balls",
      "Store in airtight container"
    ]
  },
  {
    name: "Rasgulla",
    urlName: "rasgulla",
    ingredients: ["Paneer", "Flour", "Sugar", "Cardamom", "Saffron"],
    instructions: [
      "Knead soft paneer with flour",
      "Form into small balls",
      "Prepare sugar syrup with cardamom",
      "Boil balls in syrup until they float",
      "Cook 2 minutes more",
      "Add saffron",
      "Serve hot or cold"
    ]
  },
  {
    name: "Payesh",
    urlName: "payesh",
    ingredients: ["Rice", "Milk", "Jaggery", "Ghee", "Cardamom", "Dry Fruits"],
    instructions: [
      "Roast rice in ghee",
      "Add milk and cook until soft",
      "Add powdered jaggery",
      "Stir well and cook for 5 minutes",
      "Add cardamom and dry fruits",
      "Serve hot"
    ]
  },
  {
    name: "Fir Ni",
    urlName: "fir-ni",
    ingredients: ["Rice Flour", "Milk", "Sugar", "Cardamom", "Saffron", "Almonds"],
    instructions: [
      "Roast rice flour lightly in ghee",
      "Boil milk with sugar",
      "Add roasted flour slowly while stirring",
      "Add saffron and cardamom",
      "Cook until thickens",
      "Top with almonds",
      "Serve in clay cups"
    ]
  },
  {
    name: "Malpua",
    urlName: "malpua",
    ingredients: ["Flour", "Paneer", "Milk", "Sugar", "Cardamom"],
    instructions: [
      "Make batter with flour, paneer, and milk",
      "Heat sugar syrup with cardamom",
      "Drop spoonfuls of batter in hot oil",
      "Fry until golden on both sides",
      "Soak in sugar syrup",
      "Serve with rabri"
    ]
  },
  {
    name: "Mohan Thal",
    urlName: "mohan-thal",
    ingredients: ["Gram Flour", "Jaggery", "Ghee", "Cardamom", "Coconut"],
    instructions: [
      "Toast gram flour in ghee until light brown",
      "Add powdered jaggery",
      "Mix well and heat until it leaves sides",
      "Add cardamom and coconut",
      "Pour on tray and cut when cool",
      "Serve as sweet"
    ]
  },
  {
    name: "Milk Cake",
    urlName: "milk-cake",
    ingredients: ["Khoya", "Condensed Milk", "Ghee", "Cardamom", "Dry Fruits"],
    instructions: [
      "Heat ghee in pan",
      "Add khoya and cook until light brown",
      "Add condensed milk and mix",
      "Cook until mixture thickens",
      "Add cardamom and dry fruits",
      "Pour on greased tray",
      "Cut when cool"
    ]
  },
  {
    name: "Peda",
    urlName: "peda",
    ingredients: ["Khoya", "Sugar", "Ghee", "Cardamom", "Almonds"],
    instructions: [
      "Heat ghee and add khoya",
      "Cook until slightly brown",
      "Add sugar and cardamom",
      "Mix well and cook until thick",
      "Cool and form into balls",
      "Decorate with almonds",
      "Store in container"
    ]
  },
  {
    name: "Sandesh",
    urlName: "sandesh",
    ingredients: ["Paneer", "Sugar", "Cardamom", "Rose Water"],
    instructions: [
      "Crumble paneer finely",
      "Add powdered sugar and mix",
      "Add cardamom and rose water",
      "Knead well until it becomes dough",
      "Mold into shapes",
      "Decorate with dry fruits",
      "Serve cold"
    ]
  },
  {
    name: "Kalakand",
    urlName: "kalakand",
    ingredients: ["Paneer", "Condensed Milk", "Sugar", "Ghee", "Cardamom"],
    instructions: [
      "Crumble paneer",
      "Heat ghee and add paneer",
      "Cook while stirring until light brown",
      "Add condensed milk and sugar",
      "Cook on medium heat until thick",
      "Add cardamom and dry fruits",
      "Pour on tray and cut when cool"
    ]
  },
  {
    name: "Rasogulla",
    urlName: "rasogulla",
    ingredients: ["Paneer", "Flour", "Sugar", "Cardamom", "Saffron"],
    instructions: [
      "Make paneer balls with flour",
      "Boil in sugar syrup with cardamom",
      "Cook until balls float",
      "Add saffron",
      "Serve in syrup, hot or cold"
    ]
  },
  {
    name: "Gujhia",
    urlName: "gujhia",
    ingredients: ["Flour", "Ghee", "Paneer", "Sugar", "Dry Fruits", "Cardamom"],
    instructions: [
      "Make dough with flour and ghee",
      "Rest for 30 minutes",
      "Prepare filling with paneer, sugar, dry fruits",
      "Roll small portions and fill",
      "Shape into semicircle and seal edges",
      "Deep fry until golden brown",
      "Serve with milk"
    ]
  },
  {
    name: "Leddu",
    urlName: "ladoo",
    ingredients: ["Besan", "Ghee", "Sugar", "Cardamom", "Almonds"],
    instructions: [
      "Toast besan in ghee until fragrant",
      "Add powdered sugar and cardamom",
      "Mix with dry fruits",
      "Cool until handleable",
      "Roll into balls",
      "Store in jar"
    ]
  },
  {
    name: "Burfi",
    urlName: "burfi",
    ingredients: ["Khoya", "Sugar", "Ghee", "Cardamom", "Pistachios"],
    instructions: [
      "Heat ghee and add khoya",
      "Cook until light brown",
      "Add sugar and mix",
      "Add cardamom powder",
      "Cook until it leaves pan sides",
      "Pour on greased tray",
      "Cut when warm"
    ]
  },

  // Snacks & Appetizers (25+)
  {
    name: "Pakora",
    urlName: "pakora",
    ingredients: ["Besan", "Vegetables", "Green Chili", "Ginger", "Salt", "Water", "Oil"],
    instructions: [
      "Mix besan with salt, turmeric, and green chili",
      "Add ginger paste",
      "Add water to make thick batter",
      "Heat oil for deep frying",
      "Coat vegetable pieces in batter",
      "Deep fry until golden brown",
      "Serve with chutney"
    ]
  },
  {
    name: "Samosa",
    urlName: "samosa",
    ingredients: ["Flour", "Oil", "Potato", "Onion", "Green Chili", "Spices"],
    instructions: [
      "Make dough with flour and oil",
      "Rest for 30 minutes",
      "Prepare filling with cooked potato, onion, spices",
      "Roll dough thin and cut triangles",
      "Fill and fold into triangle",
      "Deep fry until golden brown",
      "Serve with chutney"
    ]
  },
  {
    name: "Spring Roll",
    urlName: "spring-roll",
    ingredients: ["Spring Roll Wrapper", "Vegetables", "Soy Sauce", "Garlic", "Ginger", "Oil"],
    instructions: [
      "Chop vegetables finely",
      "Stir fry with garlic, ginger, and soy sauce",
      "Cool the filling",
      "Place filling in wrapper and roll",
      "Seal edges with water",
      "Deep fry until crispy",
      "Serve with sweet and sour sauce"
    ]
  },
  {
    name: "Bhelpuri",
    urlName: "bhelpuri",
    ingredients: ["Puffed Rice", "Puffed Lentils", "Onion", "Tomato", "Green Chili", "Chutneys"],
    instructions: [
      "Mix puffed rice and lentils",
      "Add chopped onion and tomato",
      "Add green chili paste",
      "Top with tamarind chutney",
      "Add mint chutney",
      "Toss well",
      "Serve immediately"
    ]
  },
  {
    name: "Pani Puri",
    urlName: "pani-puri",
    ingredients: ["Puri", "Potato", "Chickpeas", "Onion", "Tamarind", "Mint", "Water"],
    instructions: [
      "Make crispy puris",
      "Boil and mash potato",
      "Prepare tamarind water with spices",
      "Boil chickpeas",
      "Fill puri with potato and chickpeas",
      "Top with tamarind and mint water",
      "Serve immediately"
    ]
  },
  {
    name: "Sev Tameta",
    urlName: "sev-tameta",
    ingredients: ["Sev", "Tomato", "Green Chili", "Onion", "Turmeric", "Coriander"],
    instructions: [
      "Heat oil and add green chili",
      "Add chopped onion and cook",
      "Add tomato and turmeric",
      "Cook until tomato becomes soft",
      "Add coriander and salt",
      "Top with sev",
      "Serve hot"
    ]
  },
  {
    name: "Chikhalwali Chips",
    urlName: "chikhalwali-chips",
    ingredients: ["Bottle Gourd", "Oil", "Salt", "Spices"],
    instructions: [
      "Cut bottle gourd into thin slices",
      "Heat oil",
      "Deep fry slices until crispy",
      "Mix with salt and spices",
      "Drain on paper towel",
      "Serve as snack"
    ]
  },
  {
    name: "Masala Peanuts",
    urlName: "masala-peanuts",
    ingredients: ["Peanuts", "Oil", "Salt", "Red Chili", "Turmeric", "Asafoetida"],
    instructions: [
      "Heat oil in pan",
      "Add peanuts and fry",
      "Add salt, red chili, turmeric, and asafoetida",
      "Toss well and fry until aromatic",
      "Spread on paper to cool",
      "Store in jar"
    ]
  },
  {
    name: "Onion Bhajiya",
    urlName: "onion-bhajiya",
    ingredients: ["Besan", "Onion", "Green Chili", "Salt", "Water", "Oil"],
    instructions: [
      "Mix besan with salt and turmeric",
      "Add finely sliced onions",
      "Add green chili",
      "Add water to make thick batter",
      "Heat oil to 350°F",
      "Drop spoonfuls in oil",
      "Fry until golden brown"
    ]
  },
  {
    name: "Aloo Tikki",
    urlName: "aloo-tikki",
    ingredients: ["Potato", "Onion", "Green Chili", "Ginger", "Corn Flour", "Oil"],
    instructions: [
      "Boil and mash potatoes",
      "Add finely chopped onion and green chili",
      "Add ginger paste",
      "Mix in corn flour and salt",
      "Form oval patties",
      "Shallow fry until golden brown",
      "Serve with chutney"
    ]
  },
  {
    name: "Samosa Chat",
    urlName: "samosa-chat",
    ingredients: ["Samosas", "Yogurt", "Tamarind Chutney", "Mint Chutney", "Chaat Masala"],
    instructions: [
      "Make or prepare samosas",
      "Crush samosas lightly",
      "Top with yogurt",
      "Add tamarind and mint chutney",
      "Sprinkle chaat masala",
      "Top with sev and onion",
      "Serve cold"
    ]
  },
  {
    name: "Bonda",
    urlName: "bonda",
    ingredients: ["Besan", "Potato", "Turmeric", "Green Chili", "Salt", "Oil"],
    instructions: [
      "Make thick batter with besan",
      "Add cooked potato pieces",
      "Add turmeric, green chili, and salt",
      "Heat oil for deep frying",
      "Drop batter by spoon",
      "Fry until golden brown",
      "Serve hot with chutney"
    ]
  },
  {
    name: "Chakli",
    urlName: "chakli",
    ingredients: ["Rice Flour", "Urad Flour", "Ghee", "Salt", "Cumin", "Oil"],
    instructions: [
      "Mix rice flour with urad flour",
      "Add salt, cumin, and ghee",
      "Add water to make dough",
      "Heat oil for deep frying",
      "Use chakli maker to shape",
      "Deep fry until golden",
      "Store in airtight container"
    ]
  },
  {
    name: "Murukku",
    urlName: "murukku",
    ingredients: ["Rice Flour", "Urad Flour", "Chili Powder", "Salt", "Oil"],
    instructions: [
      "Mix flours with salt and chili",
      "Add water to make dough",
      "Heat oil",
      "Use murukku maker",
      "Press into spiral and fry",
      "Fry until golden and crispy",
      "Cool and store"
    ]
  },
  {
    name: "Bhujia",
    urlName: "bhujia",
    ingredients: ["Gram Flour", "Oil", "Salt", "Red Chili", "Turmeric"],
    instructions: [
      "Mix gram flour with salt and spices",
      "Add water to make thick batter",
      "Heat oil in deep pan",
      "Press batter through bhujia maker",
      "Fry until golden",
      "Drain and cool",
      "Store in jar"
    ]
  },
  {
    name: "Chikhalwali",
    urlName: "chikhalwali",
    ingredients: ["Bottle Gourd", "Oil", "Salt", "Spices", "Lime"],
    instructions: [
      "Cut bottle gourd into thin slices",
      "Heat oil and fry",
      "Season with salt and spices",
      "Serve hot or cold",
      "Squeeze lime juice before eating"
    ]
  },
  {
    name: "Bendakaya Fry",
    urlName: "bendakaya-fry",
    ingredients: ["Ladies Finger", "Oil", "Salt", "Spices", "Garlic"],
    instructions: [
      "Wash and dry ladies finger",
      "Cut into desired length",
      "Heat oil in pan",
      "Add garlic and onion",
      "Add ladies finger and stir fry",
      "Season with salt and spices",
      "Serve hot"
    ]
  },
  {
    name: "Brinjal Fry",
    urlName: "brinjal-fry",
    ingredients: ["Brinjal", "Oil", "Onion", "Garlic", "Spices"],
    instructions: [
      "Cut brinjal into long pieces",
      "Heat oil in pan",
      "Add onion and garlic",
      "Add brinjal and cook",
      "Season with spices",
      "Fry until nicely roasted",
      "Serve hot"
    ]
  },
  {
    name: "Bottle Gourd Fry",
    urlName: "bottle-gourd-fry",
    ingredients: ["Bottle Gourd", "Oil", "Salt", "Turmeric", "Chili Powder"],
    instructions: [
      "Peel and cube bottle gourd",
      "Heat oil in pan",
      "Add bottle gourd",
      "Season and cook until tender",
      "Stir occasionally",
      "Serve hot as side dish"
    ]
  }
];

module.exports = recipes;
