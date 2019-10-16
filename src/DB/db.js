const recipes = [
  {
    id: 0,
    name: "Microwave scrambled eggs",
    type: "breakfast",
    creator: "taste",
    infoSquares: {
        time: "5",
        cost: "2",
        sustainability: "4",
        health: "5"
    },
    image: "https://img.taste.com.au/TiQWT1_U/w720-h480-cfill-q80/taste/2016/11/smoked-salmon-with-microwave-scrambled-eggs-47458-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["2", "eggs"]
    ],
    steps: [
      "Break eggs into container. Add 2 tablespoons cold water. Whisk to combine. Cover with lid. Open vent.",
      "Microwave on high (100%) for 30 seconds. Stir with a fork. Microwave, covered, for 30 seconds. Stir. Microwave, covered, for 10 seconds or until almost set. Close vent. Stand for 1 minute. Serve with muffin and smoked salmon."
    ]
  },
  {
    id: 1,
    name: "Apple and yoghurt flower",
    type: "breakfast",
    creator: "taste",
    infoSquares: {
        time: 10,
        cost: 2,
        sustainability: 4,
        health: 4
    },
    image: "https://img.taste.com.au/jfM_AXMk/w720-h480-cfill-q80/taste/2016/11/apple-and-yoghurt-flower-54725-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["2 tsp", "coconut flakes"],
      ["1", "apple"],
      ["1/4 cup", "yoghurt"]
    ],
    steps: [
      "Place coconut in a small frying pan over medium-low heat and cook, stirring, for 1 minute or until toasted. Cut apple in half and remove the core, then cut into thin wedges. Arrange the apple,in a spiral pattern, on a serving plate. Spoon yoghurt into the centre. Top with the coconut to serve."
    ]
  },
  {
    id: 2,
    name: "Poached eggs",
    type: "breakfast",
    creator: "taste",
    infoSquares: {
        time: 20,
        cost: 2,
        sustainability: 4,
        health: 4
    },
    image: "https://img.taste.com.au/y-DUUKT-/w720-h480-cfill-q80/taste/2016/11/poached-eggs-19390-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["4", "eggs"],
      ["pinch", "salt"],
      ["", "bread"],
      ["", "black pepper"]
    ],
    steps: [
      "Bring the eggs to room temperature. This way, when they are added to the poaching water, the temperature will be maintained.",
      "Use a whisk or wooden spoon to stir the water vigorously in 1 direction until it forms a whirlpool. This helps the egg set in a neat shape.",
      "Slide the cracked egg into the centre of the whirlpool as close to the surface of the water as possible. Cook for 3 minutes for a soft yolk or 4 minutes for a semi-set yolk. Do not stir the water again. To test whether the egg is cooked, use a slotted spoon to lift the egg out of the water and gently press the yolk with your finger. For a soft yolk, the white should be set and the yolk should yield. For a firmer yolk, the yolk will only yield slightly.",
      "Use the slotted spoon to carefully lift the poached egg out of the saucepan and slide it into the bowl of cold water. This will stop the cooking process. Return the water to the boil over high heat, then reduce heat to medium-low. When the water is at poaching temperature, use a large metal spoon to skim any foam from the surface. Repeat steps 1-3 until all the eggs are poached, skimming any foam from the surface after poaching each egg. Eggs can be poached up to 2 hours before serving and kept at room temperature in the bowl of water until ready to be reheated. If you are poaching more than 6 eggs at a time, rinse the saucepan and use a fresh batch of water and salt, as the poaching water tends to become cloudy with threads of egg white.",
      "To reheat the eggs, refill the saucepan with fresh water and bring to the boil over high heat. Turn off the heat. Use the slotted spoon to carefully transfer the eggs to the saucepan. Cover and set aside for 1 minute. Use the slotted spoon to lift the eggs out of the saucepan, resting the spoon on folded paper towel for a couple of seconds to absorb any excess water. Slide the eggs onto hot buttered toast and sprinkle with pepper."
     ]
  },
  {
    id: 3,
    name: "Boiled eggs with avocado soldiers",
    type: "breakfast",
    creator: "taste",
    infoSquares: {
        time: 7,
        cost: 4,
        sustainability: 3,
        health: 4
    },
    image: "https://img.taste.com.au/bJ2IWfBj/w720-h480-cfill-q80/taste/2016/11/boiled-eggs-with-avocado-soldiers-93742-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["4", "eggs"],
      ["8 slices", "bread"],
      ["1", "avocado"],
      ["1 tbsp", "chives"]
    ],
    steps: [
      "Bring a small saucepan of water to the boil. Add eggs. Cook for 4 mins or until soft-boiled. Place in 4 Coles cook&dine egg cups.",
      "Meanwhile, toast wholemeal bread slices. Spread with avocado. Cut each slice into 4 soldiers and divide among plates. Sprinkle with snipped chives.",
      "Serve with a glass of orange juice."
    ]
  },
  {
    id: 4,
    name: "Granola pancakes",
    type: "breakfast",
    creator: "taste",
    infoSquares: {
        time: 26,
        cost: 3,
        sustainability: 4,
        health: 5
    },
    image: "https://img.taste.com.au/0ZFbzO-j/w720-h480-cfill-q80/taste/2016/11/brekkie-crumble-105100-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["125g", "granola"],
      ["50g", "rolled oats"],
      ["2", "banana"],
      ["2", "eggs"],
      ["250ml", "milk"],
      ["1/4 tsp", "baking powder"],
      ["", "yoghurt"],
      ["", "maple syrup"],
      ["", "raspberries"],
      ["", "strawberries"]
    ],
    steps: [
      "Place the granola, oats, bananas, eggs, milk and baking powder in a blender. Blend until smooth. Set aside for 5 minutes to rest.",
      "Heat a small non-stick frying pan over medium heat. Spray with oil. Drop 1/4-cupfuls of batter into the pan. Cook for 30 seconds or until small bubbles appear on the surface. Flip and cook for 1 minute or until cooked through. Repeat with the remaining batter.",
      "Serve the pancakes with yoghurt, maple syrup and berries."
    ]
  },
  {
    id: 5,
    name: "Brekkie crumble",
    type: "breakfast",
    creator: "taste",
    infoSquares: {
        time: 10,
        cost: 3,
        sustainability: 5,
        health: 5
    },
    image: "https://img.taste.com.au/0ZFbzO-j/w720-h480-cfill-q80/taste/2016/11/brekkie-crumble-105100-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["5", "rice cookies"],
      ["1/2 cup", "cashews"],
      ["2 tbsp", "pistachios"],
      ["2 tbsp", "sesame seeds"],
      ["1/4 cup", "rolled oats"],
      ["2 tbsp", "coconut oil"],
      ["1/2 tsp", "cinnamon"],
      ["1 tbsp", "cacoa nibs"],
      ["4", "dates"],
      ["", "fresh fruit"],
      ["", "yoghurt"],
      ["", "honey"]
    ],
    steps: [
      "Place rice cookies, cashews, pistachios, sesame seeds, rolled oats, coconut oil, ground cinnamon, cacao nibs and dates in a food processor.",
      "Process until finely chopped. Sprinkle over 4 servings of chopped seasonal fruit. Top with yoghurt and honey, if desired."
    ]
  },
  {
    id: 6,
    name: "Brekkie eggs with Matt's instant mayo",
    type: "breakfast",
    creator: "taste",
    infoSquares: {
        time: 15,
        cost: 6,
        sustainability: 4,
        health: 4
    },
    image: "https://img.taste.com.au/_rbpFTzv/w720-h480-cfill-q80/taste/2016/11/brekkie-eggs-with-matts-instant-mayo-99867-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["1 tbsp", "vinegar"],
      ["5", "eggs"],
      ["2", "english muffins"],
      ["", "butter"],
      ["", "baby rocket"],
      ["1", "avocado"],
      ["1 tbsp", "shallots"],
      ["4", "dates"],
      ["250ml", "oil"],
      ["1 tsp", "mustard"]
    ],
    steps: [
      "For the mayo, carefully crack the egg into a jug, without breaking the yolk. Pour over the oil, lemon juice, mustard, Maggi seasoning, liquid smoke and salt.",
      "Using a stick blender, position blender carefully over the whole egg yolk, so the blender’s basket covers and encloses egg yolk. Blend for 1-2 seconds to emulsify mayonnaise. Pull blender up through mayo to incorporate all the ingredients until a thick mayonnaise forms. Season.",
      "Fill a deep frying pan with water and add white vinegar. Bring to the boil over high heat. Crack an egg into a small cup. Use a large spoon to stir water and create a whirlpool. Carefully slip egg into centre of whirlpool and poach for 1-2 minutes for a soft egg or until cooked to your liking. Remove and set aside on a plate. Repeat with remaining eggs.",
      "Spread toasted muffin halves with butter. Top each with rocket, avocado and an egg. Spoon a dollop of instant mayo on top and sprinkle with fried shallots to serve."
    ]
  },
  {
    id: 7,
    name: "Raspberry chia overnight oats",
    type: "breakfast",
    creator: "taste",
    infoSquares: {
        time: 10,
        cost: 4,
        sustainability: 4,
        health: 5
    },
    image: "https://img.taste.com.au/h2eIUO_w/w720-h480-cfill-q80/taste/2019/09/raspberry-chia-overnight-oats-154161-2.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["1 1/2 cups", "rolled oats"],
      ["1/3 cup", "white chia seeds"],
      ["200g", "raspberries"],
      ["2 1/4 cups", "milk"],
      ["1 tbs", "honey"]
    ],
    steps: [
      "Combine oats and chia seeds in a large bowl. Place raspberries in a jug. Use the back of a wooden spoon to lightly crush. Add the milk and honey to the raspberry and stir to combine.",
      "Add the raspberry mixture to the oat mixture and stir to combine. Cover with plastic wrap. Place in the fridge overnight to soak.",
      "Spoon the oat mixture evenly into serving bowls or jars."
    ]
  },
  {
    id: 8,
    name: "Homemade granola recipe",
    type: "breakfast",
    creator: "taste",
    infoSquares: {
        time: 35,
        cost: 6,
        sustainability: 4,
        health: 5
    },
    image: "https://img.taste.com.au/Uw4OlG16/w720-h480-cfill-q80/taste/2019/09/homemade-granola-154159-2.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["3 cups", "rolled oats"],
      ["1/2 cup", "almonds"],
      ["1/2 cup", "walnuts"],
      ["1/4 cup", "pumpkin seeds"],
      ["1/4 cup", "sunflower seeds"],
      ["2 tbs", "coconut oil"],
      ["2 tbs", "maple syrup"],
      ["1 tsp", "vanilla"],
      ["1/3 cup", "coconut flakes"],
      ["", "milk"],
      ["", "mixed berries"],
      ["", "banana"],
    ],
    steps: [
      "Combine oats and chia seeds in a large bowl. Place raspberries in a jug. Use the back of a wooden spoon to lightly crush. Add the milk and honey to the raspberry and stir to combine.",
      "Add the raspberry mixture to the oat mixture and stir to combine. Cover with plastic wrap. Place in the fridge overnight to soak.",
      "Spoon the oat mixture evenly into serving bowls or jars."
    ]
  },
  {
    id: 9,
    name: "Low-cal cinnamon ginger granola",
    type: "breakfast",
    creator: "taste",
    infoSquares: {
        time: 35,
        cost: 5,
        sustainability: 5,
        health: 5
    },
    image: "https://img.taste.com.au/NkAIwLrr/w720-h480-cfill-q80/taste/2019/08/low-cal-cinnamon-ginger-granola-p97-152906-4.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["2 tbsp", "coconut oil"],
      ["1 1/2 tbsp", "honey"],
      ["40g", "quinoa"],
      ["200g", "mixed nuts"],
      ["90g", "rolled oats"],
      ["30g", "coconut flakes"],
      ["45g", "pumpkin seeds"],
      ["2 tbsp", "chia seeds"],
      ["2 tbsp", "hemp seeds"],
      ["2-3 tsp", "ginger"],
      ["1", "vanilla"],
      ["1 1/2 tsp", "cinnamon"],
      ["1/2", "cloves"],
      ["", "kefir"],
      ["", "blueberries"]
    ],
    steps: [
      "Combine oats and chia seeds in a large bowl. Place raspberries in a jug. Use the back of a wooden spoon to lightly crush. Add the milk and honey to the raspberry and stir to combine.",
      "Add the raspberry mixture to the oat mixture and stir to combine. Cover with plastic wrap. Place in the fridge overnight to soak.",
      "Spoon the oat mixture evenly into serving bowls or jars."
    ]
  }/*END OF BREAKFAST*/,
  {
    id: 10,
    name: "All-in vegetarian chilli",
    type: "lunch",
    creator: "taste",
    infoSquares: {
        time: 55,
        cost: 8,
        sustainability: 5,
        health: 5
    },
    image: "https://img.taste.com.au/8Zm_Ap60/w720-h480-cfill-q80/taste/2016/11/all-in-vegetarian-chilli-97918-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["1 cup", "pumpkin"],
      ["1", "corn"],
      ["1", "capsicums"],
      ["2", "carrots"],
      ["1 cup", "celery"],
      ["2 cloves", "garlic"],
      ["1 tbsp", "chopped coriander"],
      ["2 tbsp", "oil"],
      ["1 1/2 tsp", "cumin"],
      ["1 tsp", "smoked paprika"],
      ["1/2 tsp", "red chillies"],
      ["400g", "chopped tomato"],
      ["400g", "kidney beans"],
      ["", "brown rice"],
      ["", "tortillas"],
      ["", "cream"]
    ],
    steps: [
      "Heat oil in a large heavy-based saucepan over medium heat. Add the vegetables, garlic, chilli and coriander. Cook, stirring occasionally, for 5 minutes or until soft. Add the cumin, paprika and cayenne. Cook, stirring, for 2 minutes or until aromatic. Add the tomato, beans and water. Season. Reduce heat to low. Simmer for 25 minutes or until vegetables are tender.",
      "Serve with rice and tortillas. Top with coriander leaves and sour cream or yoghurt."
    ]
  },
  {
    id: 11,
    name: "Chicken wraps with herb salad",
    type: "lunch",
    creator: "taste",
    infoSquares: {
        time: 25,
        cost: 6,
        sustainability: 4,
        health: 5
    },
    image: "https://img.taste.com.au/FcR1ttK5/w720-h480-cfill-q80/taste/2019/09/chicken-wraps-with-herb-salad-154179-2.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["2", "chicken breasts"],
      ["1 tbs", "cumin"],
      ["1/4 cup", "oil"],
      ["1 cup", "frozen peas"],
      ["1", "cucumber"],
      ["1/2 cup", "parsley"],
      ["1/4 cup", "mint"],
      ["1 ", "onion"],
      ["2 tbsp", "lemon juice"],
      ["4", "tortillas"],
      ["1/2 cup", "hummus"],
      ["1", "avocado"],
      ["1/2 cup", "yoghurt"]
    ],
    steps: [
      "Place chicken in a shallow bowl. Sprinkle with cumin and rub all over. Add half the oil. Turn to coat. Set aside for 10 mins to develop the flavours.",
      "Heat a chargrill on medium-high. Cook the chicken for 4 mins each side or until browned and cooked through. Transfer to a plate and cover with foil. Set aside for 5 mins to rest.",
      "Meanwhile, cook the peas in a saucepan of boiling water for 2 mins. Refresh under cold water. Drain. Place in a bowl. Add the cucumber, parsley, mint, onion, lemon juice and remaining oil. Stir to combine.",
      "Cook the wraps on the grill for 30 secs each side or until lightly charred. Transfer to a plate. Cover to keep warm.",
      "Spread the wraps with hommus. Top with the tomato, avocado, chicken and pea mixture. Drizzle with yoghurt. Season. Roll up to enclose the filling."
    ]
  },
  {
    id: 12,
    name: "Broccoli, roasted capsicum and fetta quiche",
    type: "lunch",
    creator: "taste",
    infoSquares: {
        time: 85,
        cost: 10,
        sustainability: 3,
        health: 5
    },
    image: "https://img.taste.com.au/aI_-VxXd/w720-h480-cfill-q80/taste/2019/08/healthier-spring-recipes-153353-2.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["2 sheets", "pastry"],
      ["200g", "broccoli"],
      ["3", "eggs"],
      ["1/2 cup", "cream"],
      ["1/3 cup", "milk"],
      ["1/4 cup", "basil"],
      ["1/3 cup", "parmesan"],
      ["150g", "capsicums"],
      ["1/2", "onion"],
      ["1/4 cup", "fetta"],
      ["", "lettuce"],
    ],
    steps: [
      "This budget-friendly vegetarian quiche is perfect for dinner and lunch the next day as leftovers.",
      "Stack pastry sheets on top of each other. Using a rolling pin, roll out to form a 26cm square. Line base and side of prepared pan with pastry. Trim edge. Prick base with a fork. Refrigerate for 15 minutes. Line pastry with baking paper. Fill with pie weights or uncooked rice. Place tart pan on hot baking tray in oven. Blind-bake for 12 minutes. Remove paper and weights. Bake pastry a further 10 minutes or until edge is light golden.",
      "Cut broccoli florets in half. Place in a heatproof bowl. Cover with boiling water. Stand for 1 minute or until bright green and just tender. Drain well.",
      "Place eggs, cream, milk, shredded basil and half the parmesan in a large jug. Season with salt and pepper. Whisk to combine. Arrange broccoli, capsicum and onion in pastry case. Sprinkle with fetta. Pour over egg mixture. Sprinkle with remaining grated parmesan. Bake on tray for 30 to 35 minutes or until golden and just set. Stand for 10 minutes. Transfer to a serving plate. Cut into wedges. Sprinkle with extra basil leaves and shaved parmesan. Serve with salad leaves."
    ]
  },
  {
    id: 13,
    name: "Chicken and corn sandwich stack",
    type: "lunch",
    creator: "taste",
    infoSquares: {
        time: 10,
        cost: 3,
        sustainability: 4,
        health: 4
    },
    image: "https://img.taste.com.au/Mdu9h5_2/w720-h480-cfill-q80/taste/2019/06/july-19_chicken-and-corn-sandwich-stack_taste-151028-1.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["1/2 cup", "cream cheese"],
      ["3/4 cup", "corn"],
      ["1 cup", "chicken breasts"],
      ["1/2 cup", "mayonnaise"],
      ["2", "celery"],
      ["", "bread"],
      ["", "cucumber"],
      ["", "lettuce"]
    ],
    steps: [
      "Combine the cream cheese and creamed corn in a bowl.",
      "Combine the chicken, corn kernels, mayonnaise and celery in a separate bowl.",
      "Place 4 slices of bread on a clean work surface. Spread with creamed corn mixture. Top with cucumber and another slice of bread. Top with lettuce, chicken mixture and remaining bread. Cut each sandwich stack in half."
    ]
  },
  {
    id: 14,
    name: "Cheesy bacon and veggie rice slice",
    type: "lunch",
    creator: "taste",
    infoSquares: {
        time: 50,
        cost: 10,
        sustainability: 3,
        health: 4
    },
    image: "https://img.taste.com.au/CFh3AwdS/w720-h480-cfill-q80/taste/2019/03/cheesy-bacon-and-veggie-rice-slice-148013-2.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["1 tbsp", "oil"],
      ["1", "onion"],
      ["2 cloves", "garlic"],
      ["250g", "rice"],
      ["200g", "sweet potato"],
      ["1 head", "broccoli"],
      ["1 cup", "frozen peas"],
      ["1 1/4 cup", "cheese"],
      ["5", "eggs"]
    ],
    steps: [
      "Preheat oven to 190°C. Line a 16cm x 26cm (base measurement) slice pan with baking paper, allowing the 2 long sides to overhang.",
      "Heat the oil in a frying pan over medium heat. Cook the onion and bacon, stirring occasionally, for 5 mins or until light golden. Add garlic and cook, stirring, for 30 secs. Transfer to a large bowl. Set aside to cool slightly.",
      "Heat the rice following packet directions. Add to the bacon mixture in the bowl with the sweet potato, broccoli, peas and 1 cup (120g) cheese. Stir until combined. Fold in the egg. Season.",
      "Spoon the mixture into the prepared pan, pressing down firmly. Smooth the surface. Sprinkle with remaining cheese. Lightly sprinkle with paprika, if desired.",
      "Bake for 30 mins or until set and golden brown. Set aside in the pan for 5 mins to cool slightly. Cut into pieces. Serve with salad and chutney."
    ]
  },
  {
    id: 15,
    name: "Reuben sandwiches with french fries",
    type: "lunch",
    creator: "taste",
    infoSquares: {
        time: 50,
        cost: 14,
        sustainability: 3,
        health: 3
    },
    image: "https://img.taste.com.au/x5WCcVM6/w720-h480-cfill-q80/taste/2016/11/reuben-sandwiches-with-french-fries-88693-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["1/2", "cabbage"],
      ["60ml", "thousand island dressing"],
      ["500g", "frozen fries"],
      ["", "bread"],
      ["", "cheese"],
      ["", "corned beef"]
    ],
    steps: [
      "Combine the cabbage and dressing in a large bowl. Season with salt and pepper.",
      "Preheat grill on medium-high. Spread the fries over a large baking tray and cook under grill, turning occasionally, for 5-10 minutes or until crisp and light golden. Season with salt.",
      "Toast the bread until golden. Place the toasts, in a single layer, on a large baking tray. Top with the cheese and cook under grill for 1 minute or until the cheese melts.",
      "Divide the silverside among half the toasts. Top with the cabbage mixture and remaining toasts, cheese-side down.",
      "Place the sandwiches and fries on serving plates. Serve with gherkins."
    ]
  },
  {
    id: 16,
    name: "Lamb and lemony hummus flatbreads",
    type: "lunch",
    creator: "taste",
    infoSquares: {
        time: 30,
        cost: 10,
        sustainability: 3,
        health: 5
    },
    image: "https://img.taste.com.au/EhewXu8w/w720-h480-cfill-q80/taste/2016/11/lamb-and-lemony-hummus-flatbreads-93949-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["400g", "chickpeas"],
      ["1 tbsp", "tahini"],
      ["2/3 cup", "lemon juice"],
      ["1/3 cup", "oil"],
      ["2 cloves", "garlic"],
      ["500g", "lamb"],
      ["4", "pita breads"]
    ],
    steps: [
     "Place chickpeas, tahini, half the lemon zest, half the lemon juice and half the oil in a food processor. Process until smooth and combined, scraping down sides of processor occasionally. Season with salt and pepper. Spoon into a bowl. Set aside.",
     "Heat a large chargrill pan over mediumhigh heat. Combine garlic, finely chopped parsley and remaining oil in bowl. Season with salt and pepper. Drizzle half the oil mixture on both sides of the lamb. Cook for 3 minutes each side for medium or until cooked to your liking. Cover loosely with foil. Set aside for 5 minutes to rest. Thinly slice.",
     "Brush remaining oil mixture over both sides of breads. Chargrill for 1 minute each side or until golden and crisp. Spread warm breads with three-quarters of the hummus. Top with lamb, sprinkle with remaining lemon rind and juice. Top with pistachios, olives and extra parsley. Serve with mixed salad leaves and remaining hummus."
    ]
  },
  {
    id: 17,
    name: "Sriracha pork sliders with pickled veg",
    type: "lunch",
    creator: "taste",
    infoSquares: {
        time: 55,
        cost: 18,
        sustainability: 4,
        health: 4
    },
    image: "https://img.taste.com.au/ggnxMR70/w720-h480-cfill-q80/taste/2016/11/sriracha-pork-sliders-with-pickled-yveg-and-sweet-potato-chips-98305-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["1", "cucumber"],
      ["1", "carrots"],
      ["1 tbsp", "sugar"],
      ["400g", "pork"],
      ["8", "bread"]
    ],
    steps: [
      "For the sweet potato chips, preheat oven to 200°C/180°C fan forced. Line 2 large baking trays with baking paper. Place potato on prepared trays. Drizzle with oil. Season. Toss to combine. Roast, turning halfway through cooking time, for 40-45 minutes or until golden and tender. Sprinkle with lime rind and chilli to taste.",
      "Meanwhile, combine the pork, hoisin sauce and sriracha sauce in a bowl. Heat a non-stick frying pan over medium-high heat. Add the pork mixture and cook, stirring, for 1-2 minutes or until warmed through and caramelised.",
      "Divide pickled veg among roll bases. Top with pork. Drizzle with mayo. Top with roll tops. Serve with sweet potato chips."
    ]
  },
  {
    id: 18,
    name: "Barbecued asparagus salad with spinach, quinoa, goat cheese, and peaches",
    type: "lunch",
    creator: "taste",
    infoSquares: {
        time: 40,
        cost: 15,
        sustainability: 4,
        health: 5
    },
    image: "https://img.taste.com.au/Eg5lb-n9/w720-h480-cfill-q80/taste/2016/11/barbecued-asparagus-salad-with-spinach-quinoa-goat-cheese-and-peaches-89428-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["1 1/2", "quinoa"],
      ["2", "lemon juice"],
      ["2", "shallots"],
      ["6 tbsp", "oil"],
      ["2 bunches", "asparagus"],
      ["150g", "spinach"],
      ["2", "peaches"],
      ["120g", "cheese"],
      ["1/2 cup", "walnuts"],
    ],
    steps: [
      "In a large heavy saucepan, bring 3 cups of water, the quinoa, and a 1/2 teaspoon of salt to a boil over medium-high heat. Cover, reduce the heat to medium-low, and simmer for 14 minutes, or until the water is absorbed and the quinoa is tender. Transfer the quinoa to a baking tray and cool, then cover and refrigerate until cold.",
      "Meanwhile, into a small bowl, grate 4 teaspoons of lemon peel (yellow part only) and squeeze 6 tablespoons of lemon juice. Whisk in the shallots and 5 tablespoons of the oil. Season the vinaigrette to taste with salt and pepper.",
      "Prepare the barbecue for high heat.",
      "On a baking tray, toss the asparagus with the remaining 1 tablespoon oil to coat. Season with salt and pepper. Barbecue the asparagus, turning as needed, for 3-4 minutes, or until their green color brightens, char marks form, and the asparagus is still crisp-tender.",
      "Arrange the spinach over a large platter. Sprinkle the quinoa over, pulling some of the spinach through. Arrange the grilled asparagus and peaches over. Sprinkle with the goat cheese and walnuts. Drizzle the vinaigrette over and sprinkle with salt and freshly ground black pepper. Serve immediately."
    ]
  },
  {
    id: 19,
    name: "Crispy lamb and hummus flatbreads",
    type: "lunch",
    creator: "taste",
    infoSquares: {
        time: 20,
        cost: 10,
        sustainability: 3,
        health: 5
    },
    image: "https://img.taste.com.au/Eg5lb-n9/w720-h480-cfill-q80/taste/2016/11/barbecued-asparagus-salad-with-spinach-quinoa-goat-cheese-and-peaches-89428-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["1 ", "cucumber"],
      ["1/2", "onion"],
      ["2", "naan bread"],
      ["1 tbsp", "oil"],
      ["400g", "lamb"],
      ["130g", "yoghurt"],
      ["4", "mint"],
      ["130g", "hummus"]
    ],
    steps: [
      "Place both a large non-stick frying pan and a chargrill pan over high heat.",
      "While the pans heat up, finely chop the cucumber and onion. Place in a bowl and stir to combine.",
      "Place a naan on the chargrill pan and cook for 1 minute each side or until charred and heated through. Repeat with remaining naan.",
      "Once the frying pan is hot, add oil and cook lamb, tossing and breaking up with a wooden spoon, for 3-4 minutes or until browned.",
      "While the lamb cooks, cut lemon in half. Juice 1 half and cut the remaining half into wedges. Combine the yoghurt and lemon juice in a bowl. Pick the mint leaves.",
      "Add half the dukkah to the frying pan and toss until well combined.",
      "Divide the chargrilled naan among serving plates. Spread with the hummus. Top with the lamb and a dollop of yoghurt mixture. Sprinkle with mint and remaining dukkah. Spoon over cucumber mixture and pomegranate arils. Serve with the lemon wedges."
    ]
  }/*LUNCH ENDS HERE*/,
  {
    id: 20,
    name: "Creamy chicken piccata pasta",
    type: "dinner",
    creator: "taste",
    infoSquares: {
        time: 35,
        cost: 12,
        sustainability: 4,
        health: 3
    },
    image: "https://img.taste.com.au/akfTFTDQ/w720-h480-cfill-q80/taste/2018/05/creamy-chicken-piccata-pasta-137359-1.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["375g", "pasta"],
      ["2 tbsp", "flour"],
      ["8", "chicken breasts"],
      ["2 tbsp", "oil"],
      ["1", "onion"],
      ["2 cloves", "garlic"],
      ["3/4 cup", "chicken stock"],
      ["1/4 cup", "lemon juice"],
      ["300ml", "cream"]
    ],
    steps: [
      "Cook pasta following packet directions.",
      "Place flour in a large snap-lock bag. Season with salt and pepper. Place chicken in snap-lock bag. Seal bag. Shake to coat chicken in flour.",
      "Meanwhile, heat 1/2 the oil and 1/2 the butter in a large frying pan over medium-high heat. Add chicken to pan, shaking off excess flour. Cook for 4 minutes each side or until browned. Transfer to a plate.",
      "Add remaining oil and remaining butter to frying pan. Add onion and garlic. Cook, stirring, for 3 minutes or until onion has softened. Add stock, lemon juice and cream to pan. Season with salt and pepper. Stir to combine. Bring to a simmer. Return chicken to pan. Reduce heat to low. Simmer, uncovered, for 5 minutes or until chicken is cooked through and sauce has slightly thickened.",
      "Drain pasta. Stir pasta into chicken mixture. Sprinkle with capers, basil, parmesan and lemon zest. Serve."
    ]
  },
  {
    id: 21,
    name: "Quick salmon pasta with mint and lemon pesto",
    type: "dinner",
    creator: "taste",
    infoSquares: {
        time: 30,
        cost: 18,
        sustainability: 4,
        health: 4
    },
    image: "https://img.taste.com.au/a1EJ56GY/w720-h480-cfill-q80/taste/2018/09/quick-salmon-pasta-with-mint-and-lemon-pesto-141160-2.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["1 tbsp", "parsley"],
      ["2 cloves", "garlic"],
      ["3 tsp", "vinegar"],
      ["1 tbsp", "oil"],
      ["1 tsp", "mustard"],
      ["450g", "salmon"],
      ["150g", "frozen peas"],
      ["4", "lasagne sheets"],
      ["60g", "baby rocket"],
      ["2", "red chillies"],
      ["2 tbsp", "parmesan"],
      ["to serve", "pesto"]
    ],
    steps: [
      "Place parsley, garlic, vinegar, oil and mustard in a large bowl. Season with salt and pepper. Stir to combine. Add salmon. Turn to coat.",
      "Heat a large frying pan over medium-high heat. Add salmon. Cook for 3 to 4 minutes each side, for medium, or until cooked to your liking. Transfer to a plate. Cover loosely with foil. Stand for 5 minutes to rest. Roughly flake.",
      "Meanwhile, cook snow peas in a large saucepan of boiling salted water for 2 minutes or until bright green and just tender. Using a slotted spoon, transfer to a bowl. Refresh under cold water. Drain. Halve lengthways. Add lasagne sheets to the boiling water. Cook, stirring occasionally, for 2 to 3 minutes or until lasagne sheets are just tender. Drain.",
      "Divide 1/3 of the lasagne sheets between four serving plates. Top with half the salmon, snow peas and rocket, and 1/3 of the pesto. Top with half the remaining lasagne sheets, the remaining salmon, snow peas and rocket, and half the remaining pesto. Top wth remaining lasagne sheets and remaining pesto. Sprinkle with chilli, parmesan and extra mint. Serve with lemon wedges."
    ]
  },
  {
    id: 22,
    name: "Healthier chicken satay stir-fry",
    type: "dinner",
    creator: "taste",
    infoSquares: {
        time: 20,
        cost: 14,
        sustainability: 4,
        health: 5
    },
    image: "https://img.taste.com.au/iQO4aOJy/w720-h480-cfill-q80/taste/2018/09/healthier-chicken-satay-stir-fry-140926-2.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["60ml", "milk"],
      ["2 tbsp", "peanut butter"],
      ["2 tsp", "manis"],
      ["2 tbsp", "oil"],
      ["400g", "chicken breasts"],
      ["2 cloves", "garlic"],
      ["2 tsp", "ginger"],
      ["450g", "pumpkin"],
      ["1 bunch", "broccoli"],
      ["1", "red chillies"],
      ["2 tbsp", "parmesan"],
      ["to serve", "pesto"]
    ],
    steps: [
      "Combine the coconut milk, peanut butter and kecap manis in a small jug. Set aside until required.",
      "Heat the oil in a large wok over high heat. Add the tenderloins and cook for 3 minutes each side or until golden and just cooked through. Transfer to a plate. Set aside to cool slightly before chopping into thirds.",
      "Add the garlic and ginger to the wok. Stir-fry for 1 minute or until aromatic. Add the pumpkin and stir-fry to coat. Add 80ml (1/3 cup) water and cook, stirring occasionally, for 5 minutes or until tender. Add the broccolini and cover. Cook, stirring occasionally, for 3 minutes or until tender.",
      "Add the chicken and coconut milk mixture to the wok. Toss to coat. Simmer for 1-2 minutes or until the sauce thickens slightly. Top with chilli and coriander. Serve with rice and lime halves."
    ]
  },
  {
    id: 23,
    name: "Loaded burrito-stuffed capsicums",
    type: "dinner",
    creator: "taste",
    infoSquares: {
        time: 65,
        cost: 13,
        sustainability: 2,
        health: 4
    },
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/26/2/WU1307H_stuffed-peppers_s4x3.jpg.rend.hgtvcom.826.620.suffix/1463506005081.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["2 tsp", "oil"],
      ["1", "onion"],
      ["500g", "minced beef"],
      ["1 packet", "taco seasoning"],
      ["400g", "kidney beans"],
      ["4", "capsicums"],
      ["1 glass", "mexican sauce"],
      ["1 1/2 cup", "cheese"],
      ["1", "tomato"],
      ["1", "avocado"],
      ["2 tbsp", "parmesan"],
      ["to serve", "pesto"]
    ],
    steps: [
      "Heat oil in a large frying pan over medium-high heat. Add onion. Cook, stirring, for 5 minutes or until softened. Add mince. Cook, breaking up mince with a wooden spoon, for 6 minutes or until browned. Add taco seasoning and 1/4 cup water. Bring to a simmer. Reduce heat to medium-low. Cook for 5 minutes or until mixture thickens. Stir in beans and 2 tablespoons coriander.",
      "Preheat oven to 180C/160C fan-forced. Cut each capsicum in half lengthways. Scoop out seeds and membrane. Discard. Place capsicums on a large baking tray. Divide mince mixture evenly among capsicums. Drizzle each with 2 teaspoons chipotle sauce. Sprinkle with cheese. Bake for 25 to 30 minutes or until capsicums are tender.",
      "Combine tomato, avocado, lime juice and remaining coriander in a bowl. Season with salt and pepper.",
      "Spoon avocado salsa over capsicums. Top with sour cream, extra chipotle sauce and coriander leaves. Serve with lime wedges, if using."
    ]
  },
  {
    id: 24,
    name: "One-pot Mexican chicken and chipotle pasta",
    type: "dinner",
    creator: "taste",
    infoSquares: {
        time: 45,
        cost: 15,
        sustainability: 4,
        health: 4
    },
    image: "https://img.taste.com.au/x6JzKi0x/w720-h480-cfill-q80/taste/2019/10/one-pot-mexican-chicken-and-chipotle-pasta-154292-2.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["2 tbsp", "oil"],
      ["1", "onion"],
      ["2 cloves", "garlic"],
      ["350g", "pasta"],
      ["2 cups", "chicken stock"],
      ["400g", "kidney beans"],
      ["2 cups", "chicken breasts"],
      ["250g", "tomato"]
    ],
    steps: [
      "Heat 1 tablespoon oil in a large saucepan over medium-high heat. Add onion. Cook, stirring, for 5 minutes or until onion softens. Add garlic and chilli powder. Cook, stirring, for 1 minute or until fragrant.",
      "Add pasta. Stir to coat. Add stock and salsa. Bring to the boil. Reduce heat to medium-low. Simmer, covered, stirring occasionally, for 20 minutes, adding chicken to pan for last 5 minutes of cooking time, or until pasta is tender and liquid has reduced and thickened.",
      "Meanwhile, finely chop chilli. Combine chilli, tomato, coriander, lime juice and remaining oil in a bowl. Season with salt and pepper.",
      "Top pasta with sour cream, tomato salsa, and extra coriander leaves. Serve with lime wedges."
    ]
  },
  {
    id: 25,
    name: "Greek beef burgers",
    type: "dinner",
    creator: "taste",
    infoSquares: {
        time: 25,
        cost: 12,
        sustainability: 3,
        health: 3
    },
    image: "https://img.taste.com.au/L8MXvBM0/w720-h480-cfill-q80/taste/2016/11/greek-beef-burgers-104833-1.jpeg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["400g", "minced beef"],
      ["1", "eggs"],
      ["75g", "fetta"],
      ["1/2 cup", "yoghurt"],
      ["1 clove", "garlic"],
      ["4", "pita breads"],
      ["60g", "baby rocket"]
    ],
    steps: [
      "Finely chop half the olives. Combine the chopped olives, mince, breadcrumbs, egg, oregano, lemon rind and half the fetta in a bowl. Season. Shape tablespoons of the mixture into meatballs.",
      "Heat the oil in a large frying pan over medium-high heat. Add the meatballs and cook, turning occasionally, for 5-7 mins or until golden brown and cooked through.",
      "Meanwhile, combine the yoghurt, garlic and 1 tablespoon warm water in a small bowl. Season.",
      "Spread pita breads with half the yoghurt mixture. Top with the rocket, tomato, remaining fetta, remaining olives and meatballs. Drizzle with the remaining yoghurt mixture to serve."
    ]
  },
  {
    id: 26,
    name: "Cheesy moussaka pasta bake",
    type: "dinner",
    creator: "taste",
    infoSquares: {
        time: 90,
        cost: 20,
        sustainability: 3,
        health: 4
    },
    image: "https://img.taste.com.au/YAwMUOYs/w720-h480-cfill-q80/taste/2019/05/cheesy-moussaka-pasta-bake-149739-2.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["2 tbsp", "oil"],
      ["1", "onion"],
      ["1", "eggplant"],
      ["600g", "lamb"],
      ["2 clove", "garlic"],
      ["400g", "tomato"],
      ["200g", "pasta"],
      ["2 cups", "yoghurt"],
      ["2", "eggs"],
      ["2 cups", "cheese"]
    ],
    steps: [
      "Heat oil in a large frying pan over medium-high heat. Add onion. Cook for 5 minutes or until softened. Add eggplant. Cook, stirring, for 5 minutes or until golden and tender. Add garlic, cinnamon and allspice. Cook for 1 minute or until fragrant. Add mince. Cook, breaking up mince with a wooden spoon, for 6 to 8 minutes or until browned. Add tomato paste, tomatoes and stock. Bring to the boil. Reduce heat to medium-low. Simmer for 10 minutes or until mixture has thickened. Stir in oregano.",
      "Meanwhile, cook pasta in a large saucepan of boiling water until tender. Drain. Return to pan.",
      "Preheat oven to 200C/180C fan-forced. Grease a 10-cup-capacity baking dish. Stir 1 cup mince mixture into pasta. Spoon pasta mixture into prepared dish. Gently press to compact. Spoon over remaining mince mixture. Smooth top.",
      "Combine yoghurt, egg, flour and ¼ cup cheese in a bowl. Season with salt and pepper. Spoon over mince mixture. Sprinkle with remaining cheese. Season with salt and pepper. Bake for 30 to 35 minutes or until golden. Stand for 10 minutes. Top with extra oregano. Serve."
    ]
  },
  {
    id: 27,
    name: "Healthier chicken breast and zucchini linguine",
    type: "dinner",
    creator: "taste",
    infoSquares: {
        time: 20,
        cost: 12,
        sustainability: 4,
        health: 5
    },
    image: "https://img.taste.com.au/eri8s6od/w720-h480-cfill-q80/taste/2019/04/healthier-chicken-breast-and-zucchini-linguine-153649-2.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["450g", "chicken breasts"],
      ["1 tbsp", "oil"],
      ["500g", "pasta"],
      ["100ml", "chicken stock"],
      ["2 clove", "garlic"],
      ["2 tbsp", "chives"],
      ["30g", "baby spinach"],
      ["30g", "cheese"]
    ],
    steps: [
      "Spray a large non-stick frying pan with oil and heat over medium-high heat. Season the chicken well and cook for 2-3 minutes each side or until golden and cooked through. Remove from the pan and keep warm.",
      "Heat oil in the pan. Add the garlic and cook, stirring, for 30 seconds. Add the zucchini noodles and cook, stirring, for 1-2 minutes. Add the light cream and chicken stock. Simmer for 1-2 minutes or until the zucchini noodles are just tender but not soft.",
      "Slice the chicken and toss through the sauce along with the dill and chives. Divide among serving bowls. Sprinkle with the spinach and parmesan, to serve."
    ]
  },
  {
    id: 28,
    name: "Creamy Mexican chicken and corn salad",
    type: "dinner",
    creator: "taste",
    infoSquares: {
        time: 23,
        cost: 15,
        sustainability: 5,
        health: 5
    },
    image: "https://img.taste.com.au/jRI6JXLl/w720-h480-cfill-q80/taste/2019/08/creamy-mexican-chicken-and-corn-salad-153777-2.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["1 can", "corn"],
      ["2", "chicken breasts"],
      ["6 cups", "lettuce"],
      ["2", "avocado"]
    ],
    steps: [
      "For the dressing, Place the chipotle, cumin and garlic in a food processor and process until until chopped. Add the sour cream, mayonnaise and coriander and process again, until smooth. Transfer mixture to a bowl. Cover and place in the fridge until required.",
      "Preheat a chargrill or barbecue grill over high heat. Add corn and cook, turning often, for 15 minutes or until tender and charred. Transfer to a chopping board and use a sharp knife to slice the kernels from the cob. Add the lime halves, flesh-side down, to the chargrill and cook for 1 minute or until lightly charred. Set aside.",
      "Remove meat from the barbecue chicken, discarding the skin and bones. Chop or tear the meat into large pieces.",
      "Spread a layer of the dressing over the base of 4 serving plates. Arrange the lettuce, tomato, corn, avocado and chicken on top. Drizzle with the remaining dressing. Sprinkle over coriander sprigs and shallots. Serve with the chargrilled lime halves."
    ]
  },
  {
    id: 29,
    name: "Smoked salmon and avocado salad",
    type: "dinner",
    creator: "taste",
    infoSquares: {
        time: 5,
        cost: 10,
        sustainability: 5,
        health: 5
    },
    image: "https://img.taste.com.au/eDuM-xZr/w720-h480-cfill-q80/taste/2019/09/smoked-salmon-and-avocado-salad-153572-2.jpg",
    videoInctruction: "https://www.youtube.com/watch?v=OO0nNf930nE",
    videoHealth: "https://www.youtube.com/watch?v=Gmh_xMMJ2Pw",
    videoSustainability: "https://www.youtube.com/watch?v=f0ZxyoN9ax0",
    ingredients: [
      ["2", "avocado"],
      ["2 tbsp", "sesame seeds"],
      ["200g", "baby spinach"],
      ["300g", "salmon"]
    ],
    steps: [
      "Use a mandoline to shave the fennel. Cut the qukes into quarters lengthways. Peel and cut the avocado into quarters. Cut the lemon into wedges.",
      "Spread a little dip over the base of the serving plates. Top each with an avocado wedge. Toss together the fennel and rocket in a bowl. Divide among the plates. Top with quke quarters, salmon, capers and a drizzle of olive oil. Serve with lemon wedges.",
    ]
  },
]




const ingredients = [
  {
    id: 0,
    name: "almonds",
    image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/269/269468/three-almonds.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 1,
    name: "apple",
    image: "https://i5.walmartimages.com/asr/2b4a8c7c-941f-4575-b1fe-2479c8024077_1.b3c876a51211d14cbdd5fc631995809c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 2,
    name: "asparagus",
    image: "https://image.freepik.com/free-photo/fresh-green-asparagus-white-background_38678-2857.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 3,
    name: "avocado",
    image: "https://image.freepik.com/free-photo/macro-shot-avocado-isolated-white-background_53876-14904.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 4,
    name: "baby rocket",
    image: "http://mzr3ty.com/wp-content/uploads/2016/10/38-Rocket-500x271.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 5,
    name: "baby spinach",
    image: "https://organicempire.com.au/wp-content/uploads/Baby-spinach.jpeg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 6,
    name: "baking powder",
    image: "https://shop.coles.com.au/wcsstore/Coles-CAS/images/2/7/7/2777664.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 7,
    name: "banana",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 8,
    name: "basil",
    image: "https://cdn.shopify.com/s/files/1/0156/0137/products/refill_0012_basil.jpg?v=1520501227",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 9,
    name: "beetroot",
    image: "https://suttons.s3.amazonaws.com/p/VEBEE35192_3.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 10,
    name: "black pepper",
    image: "https://thesourcebulkfoods.com.au/wp-content/uploads/2017/09/Whole-Black-Pepper-1-560x373.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 11,
    name: "blueberries",
    image: "https://i5.walmartimages.com/asr/48b2598a-31e8-4552-ae76-34173fb8d013_1.2c3aa5e5f60333bfd4c5c83e48ddd4e8.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 12,
    name: "bread",
    image: "http://www.srosens.com/assets/1/6/DimRegular/12681_12722_12209_Hearty_Wheat.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 13,
    name: "broccoli",
    image: "https://www.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_294838064-min-696x520.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 14,
    name: "brown rice",
    image: "https://thesourcebulkfoods.com.au/wp-content/uploads/2017/09/40312_Org-Brown-Basmati-2-560x373.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 15,
    name: "butter",
    image: "https://flavorpourfection.com/wp-content/uploads/2014/12/butter.jpeg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 16,
    name: "cabbage",
    image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/284/284823/one-big-cabbage.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 17,
    name: "cacoa nibs",
    image: "https://thirstyquaker.com/wp-content/uploads/nibs.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 18,
    name: "capsicums",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Red_capsicum_and_cross_section.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 19,
    name: "carrots",
    image: "https://i2.wp.com/rusticana.com.au/wp-content/uploads/2016/10/Carrots.jpg?fit=800%2C800",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 20,
    name: "cashews",
    image: "http://cdn.shopify.com/s/files/1/1191/0846/products/Cashew_Circle_NIRE_CMYK_1200x1200.png?v=1567545794",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 21,
    name: "celery",
    image: "https://befreshcorp.net/wp-content/uploads/2017/06/product-packshot-Celery-558x600.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 22,
    name: "cheese",
    image: "https://i2.wp.com/metro.co.uk/wp-content/uploads/2018/04/859268416.jpg?quality=90&strip=all&zoom=1&resize=540%2C427&ssl=1",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 22,
    name: "chia seeds",
    image: "https://thewholefoodcollective.com.au/wp-content/uploads/2017/10/Frontier-Co-op-Bulk-Chia-Seed-Whole-Organic-4416_7.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 23,
    name: "chicken breasts",
    image: "https://5.imimg.com/data5/NT/RJ/MY-62650623/chicken-brest-500x500.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 24,
    name: "chicken stock",
    image: "http://trolley.ae/image/cache/data/nestle/nestle-51-500x500.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 25,
    name: "chickpeas",
    image: "https://www.healthyfood.com/wp-content/uploads/2017/03/Ask-Niki-Lentils-and-chickpeas-500x335.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 26,
    name: "chives",
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/8/2/1/HE_chives_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371609103074.jpeg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 27,
    name: "chopped coriander",
    image: "https://www.hellosabzi.com/wp-content/uploads/2018/05/chopped-coriander-min.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 28,
    name: "cinnamon",
    image: "https://thesourcebulkfoods.com.au/wp-content/uploads/2017/09/80212-Cassia-Cinnamon-Quill-560x459.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 29,
    name: "cloves",
    image: "https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/7/7/2771/cloves-ceylon-whole-1.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 30,
    name: "coconut flakes",
    image: "http://cdn.shopify.com/s/files/1/2619/4252/products/Coconut_Flakes_grande.jpg?v=1563997349",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 31,
    name: "coconut oil",
    image: "https://chiltanpure.com/wp-content/uploads/2019/07/coconut-web-mockup.png",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 32,
    name: "corn",
    image: "http://cdn.shopify.com/s/files/1/0206/9470/products/Corn-loose_505ef188-e980-4a5c-91f0-3bc8d06182f2_grande.jpeg?v=1476807242",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 33,
    name: "corned beef",
    image: "https://digitalcontent.api.tesco.com/v1/media/ghs/snapshotimagehandler_1951349604/b82f8fdc9db47a65758e4fe7f62b887e840cde67c3dbfe0403f4398946296c4f/05000232414700/snapshotimagehandler_1951349604.jpeg?h=540&w=540",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 34,
    name: "cream",
    image: "https://www.cdkitchen.com/images/articles/408.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 35,
    name: "cream cheese",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Philly_cream_cheese.jpg/1200px-Philly_cream_cheese.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 36,
    name: "cucumber",
    image: "https://cdn.mos.cms.futurecdn.net/EBEXFvqez44hySrWqNs3CZ-320-80.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 37,
    name: "cumin",
    image: "https://images-na.ssl-images-amazon.com/images/I/71XScSPKQYL._SX425_.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 38,
    name: "dates",
    image: "https://cdn11.bigcommerce.com/s-og6aa3hmty/images/stencil/1280x1280/products/2724/2763/fine-1042__35726.1560438797.jpg?c=2&imbypass=on",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 39,
    name: "eggplant",
    image: "https://i5.walmartimages.ca/images/Enlarge/094/510/6000200094510.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 40,
    name: "eggs",
    image: "https://img.taste.com.au/CilBeOax/w720-h480-cfill-q80/taste/2016/11/complete-guide-to-eggs-51484-1.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 41,
    name: "english muffins",
    image: "https://cdnimg.webstaurantstore.com/images/products/large/430097/1665051.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 42,
    name: "fetta",
    image: "https://res.cloudinary.com/yourgrocer/image/upload/c_limit,f_auto,h_600,w_600/yg-37062.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 43,
    name: "flour",
    image: "https://thesourcebulkfoods.com.au/wp-content/uploads/2017/09/40432_Wholemeal-Bakers-Flour-1-560x373.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 44,
    name: "fresh fruit",
    image: "https://www.freshproduceshoppe.com/wp-content/uploads/2018/07/online-grocery-gurgaon.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 45,
    name: "frozen fries",
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/5/11/0/FNM_060116-Double-Fried-French-Fries_s4x3.jpg.rend.hgtvcom.616.462.suffix/1463001459282.jpeg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 46,
    name: "frozen peas",
    image: "https://5.imimg.com/data5/BJ/EY/MY-45371487/green-peas-500x500.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 47,
    name: "garlic",
    image: "https://www.veggycation.com.au/siteassets/veggycationvegetable/garlic.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 48,
    name: "ginger",
    image: "https://www.melissas.com/v/vspfiles/photos/353-2T.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 49,
    name: "granola",
    image: "https://thelemonbowl.com/wp-content/uploads/2018/02/High-Protein-Granola-Recipe.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 50,
    name: "hemp seeds",
    image: "https://homegrownlivingfoods.ca/wp-content/uploads/2017/07/home-grown-organic-hemp-seeds.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 51,
    name: "honey",
    image: "https://centralinsurance1876.files.wordpress.com/2015/01/146899065.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 52,
    name: "hummus",
    image: "https://www.pngkey.com/png/detail/336-3368439_hummus-png-hummus-with-white-background.png",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 53,
    name: "kefir",
    image: "https://d1ycl3zewbvuig.cloudfront.net/images/products/11/LN_627730_BP_11.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 54,
    name: "kidney beans",
    image: "https://woodlandfoods.com/img/WF_Images/B49-dark-red-kidney-beans-main.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 55,
    name: "lamb",
    image: "https://t4.ftcdn.net/jpg/00/62/67/27/240_F_62672708_E1q0zUxDemq1m2Ui5KkK3H7bzSeJF40J.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 56,
    name: "lasagne sheets",
    image: "https://santosorganics.com.au/wp-content/uploads/Santos-Organics-Gluten-Free-Lasagne-Sheets-1.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 57,
    name: "lemon juice",
    image: "https://4.imimg.com/data4/SR/UH/MY-2944395/lemon-juice-500x500.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 58,
    name: "lettuce",
    image: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 59,
    name: "manis",
    image: "http://cdn.shopify.com/s/files/1/0111/1729/7722/products/abc-kecap-manis-275ml_3.jpg?v=1534950086",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 60,
    name: "maple syrup",
    image: "https://cdn.shopify.com/s/files/1/0628/8453/products/Leaf_Bottle.jpg?v=1415141353",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 61,
    name: "mayonnaise",
    image: "https://cdn.shopify.com/s/files/1/0206/9470/products/93264_HFARM_9310677001509-1_1024x1024.jpeg?v=1441109247",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 62,
    name: "mexican sauce",
    image: "https://s3.envato.com/files/260912933/22677.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 63,
    name: "milk",
    image: "https://i5.walmartimages.com/asr/d8c6e719-4ac5-41a8-a6b5-7515ea7a107e_1.811b86bd4725e38f4e5b64bc56ea414b.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 64,
    name: "minced beef",
    image: "https://www.tuckersbutchers.com/media/catalog/product/cache/02a19af02d2bd7cac4f4b618809d1d05/w/m/wmtbs268-1.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 65,
    name: "mint",
    image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/275/275944/mint.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 66,
    name: "mixed berries",
    image: "https://sociallites.com/media/catalog/product/cache/3/thumbnail/600x650/9df78eab33525d08d6e5fb8d27136e95/m/i/mixedberries.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 67,
    name: "mixed nuts",
    image: "https://ludlownut.co.uk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/l/u/luxury-nut-mix_2_.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 68,
    name: "mustard",
    image: "https://cdnimg.webstaurantstore.com/images/products/large/166694/271843.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 69,
    name: "naan bread",
    image: "https://media.istockphoto.com/photos/two-naans-picture-id890923146?k=6&m=890923146&s=612x612&w=0&h=zcN7fqa6-7OHz_u5UZfbfBwR1DxEtps08wn7tn9okns=",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 70,
    name: "oil",
    image: "https://shop.coles.com.au/wcsstore/Coles-CAS/images/8/0/1/8012499.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 71,
    name: "onion",
    image: "https://bobbyshawconsulting.com/wp-content/uploads/2019/06/onions-960x1024.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 72,
    name: "parmesan",
    image: "https://images-na.ssl-images-amazon.com/images/I/41i9P6j3vgL.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 73,
    name: "parsley",
    image: "https://cdn.shopify.com/s/files/1/0156/0137/products/refill_0018_parsley.jpg?v=1522849795",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 74,
    name: "pasta",
    image: "https://5.imimg.com/data5/QJ/HE/MY-55837627/tasty-italian-raw-pasta-500x500.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 75,
    name: "pastry",
    image: "https://www.crystalgraphicsimages.com/photo/fresh-dough-white-background-top-view-puff-pastry_cg2p42818570c_th.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 76,
    name: "peaches",
    image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/274/274620/two-peaches.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 77,
    name: "peanut butter",
    image: "https://cdn.shopify.com/s/files/1/0005/5335/3267/products/Peanut_Butter_Creamy_1_3000x.JPG?v=1558683758",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 78,
    name: "pesto",
    image: "https://www.mensjournal.com/wp-content/uploads/mf/barilla_basil_pesto_main.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 79,
    name: "pistachios",
    image: "https://thesourcebulkfoods.com.au/wp-content/uploads/2017/09/11001_Pistachios-in-shell-1-560x346.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 80,
    name: "pita breads",
    image: "https://media.istockphoto.com/photos/pita-bread-picture-id182857134?k=6&m=182857134&s=612x612&w=0&h=cBJHmie2dYG7awzpN55FArdAi7IzDkAZB0vp10z7eY0=",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 81,
    name: "pork",
    image: "https://townsquare.media/site/101/files/2019/04/GettyImages-639237570.jpg?w=980&q=75",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 82,
    name: "pumpkin",
    image: "https://www.liveeatlearn.com/wp-content/uploads/2015/10/pumpkin-photo-1.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 83,
    name: "pumpkin seeds",
    image: "https://cdn.shopify.com/s/files/1/1741/7101/products/pumpkin_seeds_raw_1024x1024.jpg?v=1505314925",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 84,
    name: "quinoa",
    image: "https://cdn.shopify.com/s/files/1/0003/3193/9904/products/a0be6d2e-5f26-4772-90c0-1fda7d1e14c4.jpg._CB335210106.jpg?v=1525289831",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 85,
    name: "raspberries",
    image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/283/283018/raspberries.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 86,
    name: "red chillies",
    image: "https://5.imimg.com/data5/NF/KH/MY-43685925/red-chilli-500x500.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 87,
    name: "rice",
    image: "http://www.palasaraku.com/image/cache/data/New%20product/new%20product%20anitha/raw%20rice%2001(1)-600x600.png",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 88,
    name: "rice cookies",
    image: "https://s3.envato.com/files/247440948/V_16_08_24_MF_103_cut.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 89,
    name: "rolled oats",
    image: "https://cdn.shopify.com/s/files/1/0073/0510/1423/products/rolled_oats_12e1a50d-f86f-4768-89fa-9c57425dca73_1024x1024.jpg?v=1557353490",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 90,
    name: "salmon",
    image: "https://image.freepik.com/free-photo/raw-salmon-meat_74190-1592.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 91,
    name: "salt",
    image: "https://www.pool-experts.co.uk/wp-content/uploads/salt-1.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 92,
    name: "sesame seeds",
    image: "https://www.uraaw.ca/image/cache/catalog/SEEDS/organic-raw-sesame-seeds-500x500.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 93,
    name: "shallots",
    image: "https://5.imimg.com/data5/KF/DY/MY-8155364/shallots-onion-500x500.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 94,
    name: "smoked paprika",
    image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/608x608/products/5082/10749/paprika-smoked-sweet__12660.1540760253.jpg?c=2",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 95,
    name: "spinach",
    image: "https://charliesfruitonline.com.au/wp-content/uploads/2013/02/spinach4.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 96,
    name: "strawberries",
    image: "https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/strawberries_16x9.jpg?itok=MkJfGW-P",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 97,
    name: "sugar",
    image: "https://ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/5c6b3acf6ee3a472-HQAAL5b3-zoom.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 98,
    name: "sunflower seeds",
    image: "https://4.imimg.com/data4/LQ/KG/MY-29139734/sunflower_seeds-500x500.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 99,
    name: "sweet potato",
    image: "https://shop.coles.com.au/wcsstore/Coles-CAS/images/4/1/9/4199503.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 100,
    name: "taco seasoning",
    image: "https://target.scene7.com/is/image/Target/GUEST_151a35a9-e6e1-475e-86db-0fccf0fb6ba9?wid=488&hei=488&fmt=pjpeg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 101,
    name: "tahini",
    image: "https://images.hollandandbarrettimages.co.uk/productimages/HB/370/057667_A.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 102,
    name: "thousand island dressing",
    image: "https://images-na.ssl-images-amazon.com/images/I/71aGjtltkAL._SL1500_.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 103,
    name: "tomato",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 104,
    name: "tortillas",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 105,
    name: "vanilla",
    image: "https://www.beanilla.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/a/madagascar-vanilla-beans.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 106,
    name: "vinegar",
    image: "https://www.dollargeneral.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/c/v/cv_distilled_white_vinegar_32oz.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 107,
    name: "walnuts",
    image: "https://lifespa.com/wp-content/uploads/2016/01/lifespa-image-walnuts-cracked.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 108,
    name: "white chia seeds",
    image: "https://thesourcebulkfoods.com.au/wp-content/uploads/2017/09/70139_Org-White-Chia-560x373.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
  {
    id: 109,
    name: "yoghurt",
    image: "https://balidirectstore.com/app/uploads/2017/11/yoghurt-bali-alm-bali-direct-store-480.jpg",
    info: "This ingredient is used for many things, it has certain properties and can therfore be used with certain flavour combinations. Due to it's origin it has to travel a certain amount to get to your location, this means that it has a particular carbon foot print, use it accordingly, in addition, the way this food is created has similar implications. Due to the chemical composition of this food it has certain implications on health."
  },
]




const influencers = [
  {
    id: 0,
    name: "Jamie Oliver",
    image: "https://cdn.jamieoliver.com/library/images/Jamie-Social.jpg",
    followers: 131926,
    likes: 37091,
    recipes: [
      0,1,10,11,20,21
    ],
    mealPlans: [
      0
    ]
  },
  {
    id: 1,
    name: "Gordon Ramsay",
    image: "https://yt3.ggpht.com/a/AGF-l7_6r_NR0iZWw6Tm_eDIiYy35mIUoPqKPUCfgw=s900-c-k-c0xffffffff-no-rj-mo",
    followers: 131926,
    likes: 37091,
    recipes: [
      2,3,12,13,22,23
    ],
    mealPlans: [
      1
    ]
  },
  {
    id: 2,
    name: "Rachael Ray",
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/10/1/RG_Rachael-Ray_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603143617.jpeg",
    followers: 131926,
    likes: 37091,
    recipes: [
      4,5,14,15,24,25
    ],
    mealPlans: [
      2
    ]
  },
  {
    id: 3,
    name: "Kylie Kwong",
    image: "https://img.delicious.com.au/gfGgpfUK/w506-h506-cfill/del/2015/10/kylie-kwongs-favourite-sydney-food-fixes-9856-1.jpg",
    followers: 131926,
    likes: 37091,
    recipes: [
      6,7,16,17,26.27
    ],
    mealPlans: [
      3
    ]
  },
  {
    id: 4,
    name: "Adriano Zumbo",
    image: "https://www.newideafood.com.au/media/9649/105816fd-e961-45a3-84a4-04d446b88dd4.png?width=640",
    followers: 131926,
    likes: 37091,
    recipes: [
      8,9,18,19.28,29
    ],
    mealPlans: [
      4
    ]
  },
  {
    id: 5,
    name: "Poh Ling Yeow",
    image: "https://www.instagram.com/p/BxXC_fLj7Nm/media/?size=l",
    followers: 131926,
    likes: 37091,
    recipes: [
      0,9,10,19,20,29
    ],
    mealPlans: [
      5
    ]
  },
]



const mealPlans = [
  {
    id: 0,
    name: "Jamie Oliver's Meal Plan",
    creator: "Jamie Oliver",
    followers: 1000,
    infoSquares: {
        cost: 127,
        sustainability: 4,
        health: 5
    },
    recipes: [
      /*[breakfast, luch, dinner]*/
      [0, 10, 20],
      [1, 11, 21],
      [2, 12, 22],
      [3, 13, 23],
      [4, 14, 24],
      [5, 15, 25],
      [6, 16, 26]
    ]
  },
  {
    id: 1,
    name: "Gordon Ramsay's Meal Plan",
    creator: "Gordon Ramsay",
    followers: 1534,
    infoSquares: {
        cost: 151,
        sustainability: 4,
        health: 4
    },
    recipes: [
      /*[breakfast, luch, dinner]*/
      [7, 17, 27],
      [8, 18, 28],
      [9, 19, 29],
      [3, 13, 23],
      [4, 14, 24],
      [5, 15, 25],
      [6, 16, 26]
    ]
  },
  {
    id: 2,
    name: "Rachael Ray's Meal Plan",
    creator: "Rachael Ray",
    followers: 456456,
    infoSquares: {
        cost: 97,
        sustainability: 3,
        health: 5
    },
    recipes: [
      /*[breakfast, luch, dinner]*/
      [0, 10, 20],
      [1, 11, 21],
      [2, 12, 22],
      [7, 17, 27],
      [8, 18, 28],
      [9, 19, 29],
      [6, 16, 26]
    ]
  },
  {
    id: 3,
    name: "Kylie Kwong's Meal Plan",
    creator: "Kylie Kwong",
    followers: 3465475,
    infoSquares: {
        cost: 146,
        sustainability: 3,
        health: 3
    },
    recipes: [
      /*[breakfast, luch, dinner]*/
      [0, 10, 20],
      [2, 12, 22],
      [3, 13, 23],
      [4, 14, 24],
      [5, 15, 25],
      [6, 16, 26],
      [7, 17, 27]
    ]
  },
  {
    id: 4,
    name: "Adriano Zumbo's Meal Plan",
    creator: "Adriano Zumbo",
    followers: 2345638,
    infoSquares: {
        cost: 163,
        sustainability: 4,
        health: 3
    },
    recipes: [
      /*[breakfast, luch, dinner]*/
      [0, 10, 20],
      [7, 17, 27],
      [1, 11, 21],
      [2, 12, 22],
      [5, 15, 25],
      [9, 19, 29],
      [6, 16, 26]
    ]
  },
  {
    id: 5,
    name: "Poh Ling Yeow's Meal Plan",
    creator: "Poh Ling Yeow",
    followers: 345675787,
    infoSquares: {
        cost: 92,
        sustainability: 4,
        health: 4
    },
    recipes: [
      /*[breakfast, luch, dinner]*/
      [9, 19, 29],
      [8, 18, 28],
      [7, 17, 27],
      [6, 16, 26],
      [5, 15, 25],
      [4, 14, 24],
      [3, 13, 23]
    ]
  }
]