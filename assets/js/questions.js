// Questions that will be in quiz when user choose Allergens category
let allergensQuestions = [
    {
        question: "By European legislation, how many items are listed as allergens?",
        // choices:["15", "14", "16", "10"],
        choice1: "15",
        choice2: "14",
        choice3: "16",
        choice4: "17",
        correct: "14",
        answer: 2
    },

    {
        question: "Which of the following items contain an allergen?",
        // choices:["Rice Milk", "Honey", "Celeriac", "Linseed"],
        choice1: "Rice Milk",
        choice2: "Honey",
        choice3: "Celeriac",
        choice4: "Linseed",
        correct: "Celeriac",
        answer: 3
    },

    {
        question: "Which of the following does NOT contain Sulphites?",
        // choices:["Vinegar", "Wine", "Sesame Oil", "Beer",],
        choice1: "Vinegar",
        choice2: "Wine",
        choice3: "Sesame Oil",
        choice4: "Beer",
        correct: "Sesame Oil",
        answer: 3
    },

    {
        question: "Choose the item that contains Soybean allergen",
        // choices:["Egg", "Beer", "Milk", "Edamame Bean"],
        choice1: "Egg",
        choice2: "Beer",
        choice3: "Milk",
        choice4: "Edamame Bean",
        correct: "Edamame Bean",
        answer: 4
    },

    {
        question: "Why is Peanut different allergen then Nuts?",
        // choices:["It grows from ground", "It grows on trees", "It grows by the coast", "It's just special"],
        choice1: "It grows from ground",
        choice2: "It grows on trees",
        choice3: "It grows by the coast",
        choice4: "It's just special",
        correct: "It grows from ground",
        answer: 1
    },

    {
        question: "Choose the right option that gives the correct allergens for this dish: 'Fries: Potato, Salt, Soybean Oil'.",
        // choices:["Gluten", "Gluten, Soybean", "Soybean", "Milk"],
        choice1: "Gluten",
        choice2: "Gluten, Soybean",
        choice3: "Soybean",
        choice4: "Milk",
        correct: "Soybean",
        answer: 3
    },

    {
        question: "Choose the items that contain Crustaceans allergen",
        // choices:["Crab and Lobster", "Squid and Snail", "Pork and Beef", "Salmon and Trout"],
        choice1: "Crab and Lobster",
        choice2: "Squid and Snail",
        choice3: "Pork and Beef",
        choice4: "Salmon and Trout",
        correct: "Crab and Lobster",
        answer: 1
    },

    {
        question: "Choose the item that contains Gluten",
        // choices:["Corn", "Potato", "Carrot", "Barley"],
        choice1: "Corn",
        choice2: "Potato",
        choice3: "Carrot",
        choice4: "Barley",
        correct: "Barley",
        answer: 4
    },

    {
        question: "Choose the right option that gives the correct allergens for this dish: 'Vegan Cannelloni: Quinoa, Pasta, Mushroom, Courgette, Vinegar, Garlic, Salt, Pepper'",
        // choices:["Gluten", "Gluten, Sulphites", "Gluten, Milk", "Egg"],
        choice1: "Gluten",
        choice2: "Gluten, Sulphites",
        choice3: "Gluten, Milk",
        choice4: "Egg",
        correct: "Gluten, Sulphites",
        answer: 2
    },

    {
        question: "Which of the following items contain Milk?",
        // choices:["Peanut Butter", "Margarine", "Coconut Milk", "Butter"],
        choice1: "Peanut Butter",
        choice2: "Margarine",
        choice3: "Coconut Milk",
        choice4: "Butter",
        correct: "Butter",
        answer: 4
    }
];

// Questions that will be in quiz when user choose HACCP category
let haccpQuestions = [
    {
        question:"What is FIFO?",
        // choices:["Football Federation", "Food Federadion", "First in, First out method", ""],
        choice1: "Football Federation",
        choice2: "Food Federadion",
        choice3: "First in, First out method",
        choice4: "Allergens label",
        correct: "First in, First out method",
        answer: 3
    },

    {
        question:"What is critical control point?",
        // choices:["A hazard with an easy solution", "The point in a process where a hazard must be prevented, eliminated or reduced", "Workplace doors", "An area of the premises where food safety is most important"],
        choice1: "A hazard with an easy solution",
        choice2: "The point in a process where a hazard must be prevented, eliminated or reduced",
        choice3: "Workplace doors",
        choice4: "An area of the premises where food safety is most important",
        correct: "The point in a process where a hazard must be prevented, eliminated or reduced",
        answer: 2
    },

    {
        question:"What is danger zone?",
        // choices:["Temperature of 0 - 5 degrees", "Temperature below -18 degrees", "Temperature above 75 deegrees", "Temperature between 5 and 65 degrees"],
        choice1: "Temperature of 0 - 5 degrees",
        choice2: "Temperature below -18 degrees",
        choice3: "Temperature above 75 deegrees",
        choice4: "Temperature between 5 and 65 degrees",
        correct: "Temperature between 5 and 65 degrees",
        answer: 4
    },

    {
        question:"What does HACCP stand for?",
        // choices:["Hazard Analysis and Critical Control Point", "Hazard Analysis and Critical Control Probe", "Hazard Analysis and Cooking Control Point", "Hazard Assessment and Critical Control Point"],
        choice1: "Hazard Analysis and Critical Control Point",
        choice2: "Hazard Analysis and Critical Control Probe",
        choice3: "Hazard Analysis and Cooking Control Point",
        choice4: "Hazard Assessment and Critical Control Point",
        correct: "Hazard Analysis and Critical Control Point",
        answer: 1
    },

    {
        question:"How many types of contamination are there?",
        // choices:["1", "6", "4", "2"],
        choice1: "1",
        choice2: "6",
        choice3: "4",
        choice4: "2",
        correct: "4",
        answer:3
    },

    {
        question:"The definition of hazard is...",
        // choices:["Something with the potential to cause harm", "Piece of metal in food", "Mould on food", "Dirt on shoes"],
        choice1: "Something with the potential to cause harm",
        choice2: "Piece of metal in food",
        choice3: "Mould on food",
        choice4: "Dirt on shoes",
        correct: "Something with the potential to cause harm",
        answer: 1
    },

    {
        question:"Why is conducting a hazard analysis important?",
        // choices:["To make a point", "To make food taste better", "To make food look better", "To identify potential hazards"],
        choice1: "To make a point",
        choice2: "To make food taste better",
        choice3: "To make food look better",
        choice4: "To identify potential hazards",
        correct: "To identify potential hazards",
        answer: 4
    },

    {
        question:"How many principles are there in HACCP system?",
        // choices:["4", "7", "15", "9"],
        choice1: "4",
        choice2: "7",
        choice3: "15",
        choice4: "9",
        correct: "7",
        answer: 2
    },

    {
        question:"Why food must be thoroughly cooked to the correct time and temperature combination?",
        // choices:["It helps to improve the taste", "It makes the food look more attractive", "It is a requirement of the law", "It helps to kill harmful microbes that can cause disease"],
        choice1: "It helps to improve the taste",
        choice2: "It makes the food look more attractive",
        choice3: "It is a requirement of the law",
        choice4: "It helps to kill harmful microbes that can cause disease",
        correct: "It helps to kill harmful microbes that can cause disease",
        answer: 4
    },

    {
        question:"In a place of work, the best way to dry your hands after washing them is to:",
        // choices:["Use a paper towel", "Use a air dryer", "Just shake excess water away", "Use a cotton towel"],
        choice1: "Use a paper towel",
        choice2: "Use a air dryer",
        choice3: "Just shake excess water away",
        choice4: "Use a cotton towel",
        correct: "Use a paper towel",
        answer: 1
    }
]

// Questions that will be in quiz when user choose Health & Safety category
let healthAndSafetyQuestions = [
    {
        question: "Why is important to wash hands properly?",
        // choices: ["So they look nice", "To be cleaner than other people", "To waste the water", "To prevent spreading of poisoning bacteria"],
        choice1: "So they look nice",
        choice2: "To be cleaner than other people",
        choice3: "To waste the water",
        choice4: "To prevent spreading of poisoning bacteria",
        correct: "To prevent spreading of poisoning bacteria",
        answer: 4
    },

    {
        question: "Heavy and glass items should be stored on:",
        // choices: ["Higher shelves", "Middle shelves", "Lower shelves", "Bin"],
        choice1: "Higher shelves",
        choice2: "Middle shelves",
        choice3: "Lower shelves",
        choice4: "Bin",
        correct: "Lower shelves",
        answer: 3
    },

    {
        question: "In case of spillage, we should:",
        // choices: ["Put a yellow sign and clean", "Tell a manager", "Go home", "Ask someone else to clean"],
        choice1: "Put a yellow sign and clean",
        choice2: "Tell a manager",
        choice3: "Go home",
        choice4: "Ask someone else to clean",
        correct: "Put a yellow sign and clean",
        answer: 1
    },

    {
        question: "When lifting a heavy load, we should:",
        // choices: ["Show how strong I am", "Assess and lift with knees not backs", "Eat some spinach", "Call security team"],
        choice1: "Show how strong I am",
        choice2: "Assess and lift with knees not backs",
        choice3: "Eat some spinach",
        choice4: "Call security team",
        correct: "Assess and lift with knees not backs",
        answer: 2
    },

    {
        question: "When handling hot equipment, we should:",
        // choices: ["Just do our job", "Use cutting glove", "Use the kitchen towel and be careful", "Bend your knees"],
        choice1: "Just do our job",
        choice2: "Use cutting glove",
        choice3: "Use the kitchen towel and be careful",
        choice4: "Bend your knees",
        correct: "Use the kitchen towel and be careful",
        answer: 3
    },

    {
        question: "What does PPE stand for?",
        // choices: ["Protective Preventative Equipment", "Personal Protective Equipment", "People's Protective Equipment", "Personal Protective Establishment"],
        choice1: "Protective Preventative Equipment",
        choice2: "Personal Protective Equipment",
        choice3: "People's Protective Equipment",
        choice4: "Personal Protective Establishment",
        correct: "Personal Protective Equipment",
        answer: 2
    },

    {
        question: "Which of the following is not classified as a manual handling activity?",
        // choices: ["Throwing", "Pushing", "Carrying", "Pulling"],
        choice1: "Throwing",
        choice2: "Pushing",
        choice3: "Carrying",
        choice4: "Pulling",
        correct: "Throwing",
        answer: 1
    },

    {
        question: "6.What type of injury is the most common when manual handling?",
        // choices: ["Broken limbs", "Broken heart", "Broken knees", "Muscular and skeletal disorders"],
        choice1: "Broken limbs",
        choice2: "Broken heart",
        choice3: "Broken knees",
        choice4: "Muscular and skeletal disorders",
        correct: "Muscular and skeletal disorders",
        answer: 4
    },

    {
        question: "All businesses must have 1st aid kits that are available to:",
        // choices: ["All persons over the age of 18", "A qualified 1st aider", "All staff", "Health and safety officer"],
        choice1: "All persons over the age of 18",
        choice2: "A qualified 1st aider",
        choice3: "All staff",
        choice4: "Health and safety officer",
        correct: "All staff",
        answer: 3
    },

    {
        question: "One of the preventive measures to avoid slips, trips and falls is:",
        // choices: ["Wear runners", "Walk, do not run", "Let others clean", "Clean later"],
        choice1: "Wear runners",
        choice2: "Walk, do not run",
        choice3: "Let others clean",
        choice4: "Clean later",
        correct: "Walk, do not run",
        answer: 2
    }
]

// Questions that will be in quiz when user choose Diets category
let dietsQuestions = [
    {
        question: "Crushed Baby Potato with Scallion: Potato, Salt, Pepper, Scallion, Margarine. Select the diet of the dish.",
        // choices: ["Vegan", "Vegetarian", "Halal", "Non-vegetarian"],
        choice1: "Vegan",
        choice2: "Vegetarian",
        choice3: "Halal",
        choice4: "Non-vegetarian",
        correct: "Vegan",
        answer: 1
    },

    {
        question: "Spicy Buffalo Cauliflower Wings. Ingredients: cauliflower, lasagna sheets, tofu, vegan mozzarella, spinach. Choose the correct diet.",
        // choices: ["Vegan", "Vegetarian", "Halal", "Non-vegetarian"],
        choice1: "Vegan",
        choice2: "Vegetarian",
        choice3: "Halal",
        choice4: "Non-vegetarian",
        correct: "Vegan",
        answer: 1
    },

    {
        question: "Choose the item that could turn a vegan dish into vegetarian.",
        // choices: ["Maple Syrup", "Honey", "Pork", "Carrot"],
        choice1: "Maple Syrup",
        choice2: "Honey",
        choice3: "Pork",
        choice4: "Carrot",
        correct: "Honey",
        answer: 2
    },

    {
        question: "Parmesan with Animal-Rennet is:",
        // choices: ["Vegan", "Vegetarian", "Halal", "Non-vegetarian"],
        choice1: "Vegan",
        choice2: "Vegetarian",
        choice3: "Halal",
        choice4: "Non-vegetarian",
        correct: "Non-vegetarian",
        answer: 4
    },

    {
        question: "Which of the following items is suitable for customers who are vegetarian?",
        // choices: ["Egg", "Pork Gelatin", "Chicken Wings", "Salmon"],
        choice1: "Egg",
        choice2: "Pork Gelatin",
        choice3: "Chicken Wings",
        choice4: "Salmon",
        correct: "Egg",
        answer: 1
    },

    {
        question: "Which of the following items are suitable for customers who are vegan?",
        // choices: ["Yogurt", "Egg", "Honey", "Maple Syrup"],
        choice1: "Yogurt",
        choice2: "Egg",
        choice3: "Honey",
        choice4: "Maple Syrup",
        correct: "Maple Syrup",
        answer: 4
    },

    {
        question: "Which of the following items are Halal?",
        // choices: ["Pork Sausage", "Lamb Mince", "Ham", "Parmesan"],
        choice1: "Pork Sausage",
        choice2: "Lamb Mince",
        choice3: "Ham",
        choice4: "Parmesan",
        correct: "Lamb Mince",
        answer: 2
    },

    {
        question: "Can a vegetarian food item contain honey and cream?",
        // choices: ["Sometimes", "No", "Yes", "Maybe"],
        choice1: "Sometimes",
        choice2: "No",
        choice3: "Yes",
        choice4: "Maybe",
        correct: "Yes",
        answer: 3
    },

    {
        question: "Which of the following food items is suitable for both vegan and vegetarian diets?",
        // choices: ["Honey", "Trout", "Margarine", "Parmesan"],
        choice1: "Honey",
        choice2: "Trout",
        choice3: "Margarine",
        choice4: "Parmesan",
        correct: "Margarine",
        answer: 3
    },

    {
        question: "Which of the following food items is not suitable for Halal diet?",
        // choices: ["Turkey", "Hake", "Cod", "Gammon"],
        choice1: "Turkey",
        choice2: "Hake",
        choice3: "Cod",
        choice4: "Gammon",
        correct: "Gammon",
        answer: 4
    }
]