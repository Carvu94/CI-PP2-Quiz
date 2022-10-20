// Questions that will be in quiz when user choose Allergens category
let allergensQuestions = [
    {
        question: "By European legislation, how many items are listed as allergens?",
        choices:["15", "14", "16", "10"],
        answer: 2
    },

    {
        question: "Which of the following items contain an allergen?",
        choices:["Rice Milk", "Honey", "Celeriac", "Linseed"],
        answer: 3
    },

    {
        question: "Which of the following does NOT contain Sulphites?",
        choices:["Vinegar", "Wine", "Sesame Oil", "Beer",],
        answer: 3
    },

    {
        question: "Choose the item that contains Soybean allergen",
        choices:["Egg", "Beer", "Milk", "Edamame Bean"],
        answer: 4
    },

    {
        question: "Why is Peanut different allergen then Nuts?",
        choices:["It grows from ground", "It grows on trees", "It grows by the coast", "It's just special"],
        answer: 1
    },

    {
        question: "Choose the right option that gives the correct allergens for this dish: 'Fries: Potato, Salt, Soybean Oil'.",
        choices:["Gluten", "Gluten, Soybean", "Soybean", "Milk"],
        answer: 3
    },

    {
        question: "Choose the items that contain Crustaceans allergen",
        choices:["Crab and Lobster", "Squid and Snail", "Pork and Beef", "Salmon and Trout"],
        answer: 1
    },

    {
        question: "Choose the item that contains Gluten",
        choices:["Corn", "Potato", "Carrot", "Barley"],
        answer: 4
    },

    {
        question: "Choose the right option that gives the correct allergens for this dish: 'Vegan Cannelloni: Quinoa, Pasta, Mushroom, Courgette, Vinegar, Garlic, Salt, Pepper'",
        choices:["Gluten", "Gluten, Sulphites", "Gluten, Milk", "Egg"],
        answer: 2
    },

    {
        question: "Which of the following items contain Milk?",
        choices:["Peanut Butter", "Margarine", "Coconut Milk", "Butter"],
        answer: 4
    }
];

export {AllergensQuiz};

// Questions that will be in quiz when user choose HACCP category
let haccpQuestions = [
    {
        question:"What is FIFO?",
        choices:["Football Federation", "Food Federadion", "First in, First out method", ""],
        answer: 3
    },

    {
        question:"What is critical control point?",
        choices:["A hazard with an easy solution", "The point in a process where a hazard must be prevented, eliminated or reduced", "Workplace doors", "An area of the premises where food safety is most important"],
        answer: 2
    },

    {
        question:"What is danger zone?",
        choices:["Temperature of 0 - 5 degrees", "Temperature below -18 degrees", "Temperature above 75 deegrees", "Temperature between 5 and 65 degrees"],
        answer: 4
    },

    {
        question:"What does HACCP stand for?",
        choices:["Hazard Analysis and Critical Control Point", "Hazard Analysis and Critical Control Probe", "Hazard Analysis and Cooking Control Point", "Hazard Assessment and Critical Control Point"],
        answer: 1
    },

    {
        question:"How many types of contamination are there?",
        choices:["1", "6", "4", "2"],
        answer:3
    },

    {
        question:"The definition of hazard is...",
        choices:["Something with the potential to cause harm", "Piece of metal in food", "Mould on food", "Dirt on shoes"],
        answer: 1
    },

    {
        question:"Why is conducting a hazard analysis important?",
        choices:["To make a point", "To make food taste better", "To make food look better", "To identify potential hazards"],
        answer: 4
    },

    {
        question:"How many principles are there in HACCP system?",
        choices:["4", "7", "15", "9"],
        answer: 2
    },

    {
        question:"Why food must be thoroughly cooked to the correct time and temperature combination?",
        choices:["It helps to improve the taste", "It makes the food look more attractive", "It is a requirement of the law", "It helps to kill harmful microbes that can cause disease"],
        answer: 4
    },

    {
        question:"In a place of work, the best way to dry your hands after washing them is to:",
        choices:["Use a paper towel", "Use a air dryer", "Just shake excess water away", "Use a cotton towel"],
        answer: 1
    }
]

// Questions that will be in quiz when user choose Health & Safety category
let healthAndSafetyQuestions = [
    {
        question: "Why is important to wash hands properly?",
        choices: ["So they look nice", "To be cleaner than other people", "To waste the water", "To prevent spreading of poisoning bacteria"],
        answer: 4
    },

    {
        question: "Heavy and glass items should be stored on:",
        choices: ["Higher shelves", "Middle shelves", "Lower shelves", "Bin"],
        answer: 3
    },

    {
        question: "In case of spillage, we should:",
        choices: ["Put a yellow sign and clean", "Tell a manager", "Go home", "Ask someone else to clean"],
        answer: 1
    },

    {
        question: "When lifting a heavy load, we should:",
        choices: ["Show how strong I am", "Assess and lift with knees not backs", "Eat some spinach", "Call security team"],
        answer: 2
    },

    {
        question: "When handling hot equipment, we should:",
        choices: ["Just do our job", "Use cutting glove", "Use the kitchen towel and be careful", "Bend your knees"],
        answer: 3
    },

    {
        question: "What does PPE stand for?",
        choices: ["Protective Preventative Equipment", "Personal Protective Equipment", "People's Protective Equipment", "Personal Protective Establishment"],
        answer: 2
    },

    {
        question: "Which of the following is not classified as a manual handling activity?",
        choices: ["Throwing", "Pushing", "Carrying", "Pulling"],
        answer: 1
    },

    {
        question: "6.What type of injury is the most common when manual handling?",
        choices: ["Broken limbs", "Broken heart", "Broken knees", "Muscular and skeletal disorders"],
        answer: 4
    },

    {
        question: "All businesses must have 1st aid kits that are available to:",
        choices: ["All persons over the age of 18", "A qualified 1st aider", "All staff", "Health and safety officer"],
        answer: 3
    },

    {
        question: "One of the preventive measures to avoid slips, trips and falls is:",
        choices: ["Wear runners", "Walk, do not run", "Let others clean", "Clean later"],
        answer: 2
    }
]

// Questions that will be in quiz when user choose Diets category
let dietsQuestions = [
    {
        question: "Crushed Baby Potato with Scallion: Potato, Salt, Pepper, Scallion, Margarine. Select the diet of the dish.",
        choices: ["Vegan", "Vegetarian", "Halal", "Non-vegetarian"],
        answer: 1
    },

    {
        question: "Spicy Buffalo Cauliflower Wings. Ingredients: cauliflower, lasagna sheets, tofu, vegan mozzarella, spinach. Choose the correct diet.",
        choices: ["Vegan", "Vegetarian", "Halal", "Non-vegetarian"],
        answer: 1
    },

    {
        question: "Choose the item that could turn a vegan dish into vegetarian.",
        choices: ["Maple Syrup", "Honey", "Pork", "Carrot"],
        answer: 2
    },

    {
        question: "Parmesan with Animal-Rennet is:",
        choices: ["Vegan", "Vegetarian", "Halal", "Non-vegetarian"],
        answer: 4
    },

    {
        question: "Which of the following items is suitable for customers who are vegetarian?",
        choices: ["Egg", "Pork Gelatin", "Chicken Wings", "Salmon"],
        answer: 1
    },

    {
        question: "Which of the following items are suitable for customers who are vegan?",
        choices: ["Yogurt", "Egg", "Honey", "Maple Syrup"],
        answer: 4
    },

    {
        question: "Which of the following items are Halal?",
        choices: ["Pork Sausage", "Lamb Mince", "Ham", "Parmesan"],
        answer: 2
    },

    {
        question: "Can a vegetarian food item contain honey and cream?",
        choices: ["Sometimes", "No", "Yes", "Maybe"],
        answer: 3
    },

    {
        question: "Which of the following food items is suitable for both vegan and vegetarian diets?",
        choices: ["Honey", "Trout", "Margarine", "Parmesan"],
        answer: 3
    },

    {
        question: "Which of the following food items is not suitable for Halal diet?",
        choices: ["Turkey", "Hake", "Cod", "Gammon"],
        answer: 4
    }
]