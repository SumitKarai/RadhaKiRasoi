
export type MenuItem = {
    id: string;
    name: string;
    price: number;
    category: string;
    items?: string[];
};

export const menu: MenuItem[] = [
    {
        id: "regular-thali",
        name: "Regular Thali",
        price: 70,
        category: "Thali",
        items: [
            "Daal",
            "Rice",
            "5 Butter Tawa Roti",
            "Seasonal Veg",
            "Pickle",
            "Salad",
        ],
    },
    {
        id: "special-thali",
        name: "Special Thali",
        price: 99,
        category: "Thali",
        items: [
            "Daal",
            "Rice",
            "5 Butter Tawa Roti",
            "Seasonal Veg",
            "Boondi Raita",
            "2 Gulab Jamun",
            "Papad",
            "Pickle",
            "Salad",
        ],
    },
    {
        id: "radha-special-thali",
        name: "Radha Ki Rasoi Thali",
        price: 199,
        category: "Thali",
        items: [
            "Daal",
            "Jeera Rice",
            "Matar Paneer",
            "Jeera Aalu",
            "5 Butter Tawa Roti",
            "1 Paratha",
            "Seasonal Veg",
            "Boondi Raita",
            "2 Gulab Jamun",
            "Papad",
            "Pickle",
            "Salad",
        ],
    },
    // Paneer
    { id: "matar-paneer", name: "Matar Paneer", price: 120, category: "Paneer" },
    { id: "shahi-paneer", name: "Shahi Paneer", price: 130, category: "Paneer" },
    { id: "kadai-paneer", name: "Kadai Paneer", price: 150, category: "Paneer" },

    // Daal
    { id: "daal-fry", name: "Daal Fry", price: 100, category: "Daal" },
    { id: "daal-tadka", name: "Daal Tadka", price: 110, category: "Daal" },
    { id: "daal-gujarati", name: "Daal Gujarati", price: 110, category: "Daal" },

    // Paratha
    { id: "simple-paratha", name: "Simple Paratha", price: 20, category: "Paratha" },
    { id: "aalu-paratha", name: "Aalu Paratha", price: 30, category: "Paratha" },
    { id: "sev-paratha", name: "Sev Paratha", price: 35, category: "Paratha" },
    { id: "paneer-paratha", name: "Paneer Paratha", price: 50, category: "Paratha" },
    { id: "onion-paratha", name: "Onion Paratha", price: 35, category: "Paratha" },

    // Seasonal vegetables
    { id: "sev-tamatar", name: "Sev Tamatar", price: 120, category: "Seasonal Veg" },
    { id: "sev-bhaaji", name: "Sev Bhaaji", price: 140, category: "Seasonal Veg" },
    { id: "aalu-matar", name: "Aalu Matar", price: 120, category: "Seasonal Veg" },
    { id: "jeera-aalu", name: "Jeera Aalu", price: 130, category: "Seasonal Veg" },
    { id: "dam-aalu", name: "Dam Aalu", price: 140, category: "Seasonal Veg" },

    // Rice
    { id: "simple-rice", name: "Simple Rice", price: 50, category: "Rice" },
    { id: "jeera-rice", name: "Jeera Rice", price: 60, category: "Rice" },
    { id: "pulab", name: "Pulab", price: 70, category: "Rice" },
    { id: "matar-pulab", name: "Matar Pulab", price: 80, category: "Rice" },
    { id: "namkin-rice", name: "Namkin Rice", price: 60, category: "Rice" },
    { id: "butter-khichdi", name: "Butter Khichdi", price: 70, category: "Rice" },

    // Drinks
    { id: "regular-chai", name: "Regular Chai", price: 15, category: "Drinks" },
    { id: "ginger-chai", name: "Ginger Chai", price: 20, category: "Drinks" },
    { id: "ilaychi-chai", name: "Ilaychi Chai", price: 20, category: "Drinks" },
    { id: "long-chai", name: "Long Chai", price: 20, category: "Drinks" },
    { id: "chocolate-chai", name: "Chocolate Chai", price: 30, category: "Drinks" },
    { id: "special-coffee", name: "Special Coffee", price: 40, category: "Drinks" },
    { id: "meggie-special", name: "Meggie Special", price: 50, category: "Drinks" },


    // PIZZA
    { id: "rr-pizza-1", name: "Margherita Pizza", price: 99, category: "Pizza" },
    { id: "rr-pizza-2", name: "Farmhouse Pizza", price: 119, category: "Pizza" },
    { id: "rr-pizza-3", name: "Onion Capsicum Pizza", price: 119, category: "Pizza" },
    { id: "rr-pizza-4", name: "Mexican Green Wave", price: 129, category: "Pizza" },
    { id: "rr-pizza-5", name: "Veggie Supreme/Deluxe Pizza", price: 149, category: "Pizza" },
    { id: "rr-pizza-6", name: "Cheese Burst Pizza", price: 159, category: "Pizza" },
    { id: "rr-pizza-7", name: "Golden Corn Pizza", price: 129, category: "Pizza" },
    { id: "rr-pizza-8", name: "Peppy Paneer Pizza", price: 149, category: "Pizza" },

    // MAGGI
    { id: "rr-maggi-1", name: "Masala Maggi", price: 50, category: "Maggi" },
    { id: "rr-maggi-2", name: "Veg Masala Maggi", price: 60, category: "Maggi" },
    { id: "rr-maggi-3", name: "Garlic Maggi", price: 70, category: "Maggi" },
    { id: "rr-maggi-4", name: "Cheese Garlic Maggi", price: 80, category: "Maggi" },
    { id: "rr-maggi-5", name: "Corn Cheese Maggi", price: 90, category: "Maggi" },
    { id: "rr-maggi-6", name: "Hot Garlic Cheese Maggi", price: 100, category: "Maggi" },

    // PATTIES
    { id: "rr-pat-1", name: "Masala Patties", price: 50, category: "Patties" },
    { id: "rr-pat-2", name: "Veg Masala Patties", price: 60, category: "Patties" },
    { id: "rr-pat-3", name: "Paneer Patties", price: 70, category: "Patties" },
    { id: "rr-pat-4", name: "Cheese Patties", price: 80, category: "Patties" },
    { id: "rr-pat-5", name: "Paneer Cheese Patties", price: 90, category: "Patties" },
    { id: "rr-pat-6", name: "Corn Patties", price: 70, category: "Patties" },
    { id: "rr-pat-7", name: "Corn Cheese Patties", price: 80, category: "Patties" },
    { id: "rr-pat-8", name: "Corn Cheese Paneer Patties", price: 100, category: "Patties" },

    // CHINESE
    { id: "rr-ch-1", name: "Veg Noodles", price: 80, category: "Chinese" },
    { id: "rr-ch-2", name: "Veg Chowmein", price: 90, category: "Chinese" },
    { id: "rr-ch-3", name: "Hakka Noodles", price: 100, category: "Chinese" },
    { id: "rr-ch-4", name: "Veg Garlic Noodles", price: 110, category: "Chinese" },
    { id: "rr-ch-5", name: "Veg Garlic Chowmein", price: 120, category: "Chinese" },
    { id: "rr-ch-6", name: "Schezwan Noodles", price: 120, category: "Chinese" },

    // SANDWICH
    { id: "rr-sw-1", name: "Veg Cheese Sandwich", price: 70, category: "Sandwich" },
    { id: "rr-sw-2", name: "Masala Sandwich", price: 60, category: "Sandwich" },
    { id: "rr-sw-3", name: "Double Cheese Sandwich", price: 90, category: "Sandwich" },
    { id: "rr-sw-4", name: "Paneer Cheese Sandwich", price: 100, category: "Sandwich" },
    { id: "rr-sw-5", name: "Tawa Sandwich", price: 80, category: "Sandwich" },
    { id: "rr-sw-6", name: "Corn Sandwich", price: 90, category: "Sandwich" },

    // BURGER
    { id: "rr-burg-1", name: "Veg Burger", price: 70, category: "Burger" },
    { id: "rr-burg-2", name: "Paneer Burger", price: 90, category: "Burger" },
    { id: "rr-burg-3", name: "Paneer Cheese Burger", price: 110, category: "Burger" },
    { id: "rr-burg-4", name: "Corn Burger", price: 90, category: "Burger" },
    { id: "rr-burg-5", name: "Corn Cheese Burger", price: 110, category: "Burger" },
    { id: "rr-burg-6", name: "Corn Cheese Paneer Cheese Burger", price: 140, category: "Burger" },

    // PASTA
    { id: "rr-pasta-1", name: "Veg Pasta", price: 70, category: "Pasta" },
    { id: "rr-pasta-2", name: "Red Sauce Pasta", price: 80, category: "Pasta" },
    { id: "rr-pasta-3", name: "White Sauce Pasta", price: 90, category: "Pasta" },
    { id: "rr-pasta-4", name: "Veg Garlic Pasta", price: 120, category: "Pasta" },
    { id: "rr-pasta-5", name: "Veg Hot Garlic Cheese Pasta", price: 140, category: "Pasta" },
    { id: "rr-pasta-6", name: "Veg Paneer Cheese Pasta", price: 180, category: "Pasta" },

    // PAV BHAJI
    { id: "rr-pav-1", name: "Pav Bhaji", price: 70, category: "Pav Bhaji" },
    { id: "rr-pav-2", name: "Butter Pav Bhaji", price: 80, category: "Pav Bhaji" },
    { id: "rr-pav-3", name: "Butter Cheese Pav Bhaji", price: 100, category: "Pav Bhaji" },
    { id: "rr-pav-4", name: "Paneer Cheese Pav Bhaji", price: 120, category: "Pav Bhaji" },
    { id: "rr-pav-5", name: "Masala Pav", price: 40, category: "Pav Bhaji" },
    { id: "rr-pav-6", name: "Bada Pav", price: 40, category: "Pav Bhaji" },
    { id: "rr-pav-7", name: "Misal Pav", price: 60, category: "Pav Bhaji" },

    // TEA
    { id: "rr-tea-1", name: "Normal Tea", price: 15, category: "Tea & Coffee" },
    { id: "rr-tea-2", name: "Ginger Tea", price: 20, category: "Tea & Coffee" },
    { id: "rr-tea-3", name: "Chocolate Tea", price: 25, category: "Tea & Coffee" },
    { id: "rr-tea-4", name: "Masala Tea", price: 20, category: "Tea & Coffee" },
    { id: "rr-tea-5", name: "Elaichi Tea", price: 25, category: "Tea & Coffee" },
    { id: "rr-tea-6", name: "Gud Tea", price: 20, category: "Tea & Coffee" },

    // COFFEE
    { id: "rr-coffee-1", name: "Hot Coffee", price: 30, category: "Tea & Coffee" },
    { id: "rr-coffee-2", name: "Cold Coffee", price: 60, category: "Tea & Coffee" },
    { id: "rr-coffee-3", name: "Chocolate Cold Coffee", price: 70, category: "Tea & Coffee" },

    // STARTERS
    { id: "rr-start-1", name: "Chilli Paneer", price: 120, category: "Starter" },
    { id: "rr-start-2", name: "Chilli Potato", price: 100, category: "Starter" },
    { id: "rr-start-3", name: "Dry Manchurian", price: 120, category: "Starter" },
    { id: "rr-start-4", name: "Hara Bhara Kebab", price: 90, category: "Starter" },
    { id: "rr-start-5", name: "Dahi Sole", price: 100, category: "Starter" },
    { id: "rr-start-6", name: "French Fries", price: 70, category: "Starter" },
    { id: "rr-start-7", name: "Crispy Corn", price: 100, category: "Starter" },

    // ROLLS
    { id: "rr-roll-1", name: "Veg Roll", price: 50, category: "Rolls" },
    { id: "rr-roll-2", name: "Veg Cheese Roll", price: 70, category: "Rolls" },
    { id: "rr-roll-3", name: "Paneer Roll", price: 80, category: "Rolls" },
    { id: "rr-roll-4", name: "Paneer Cheese Roll", price: 100, category: "Rolls" },
    { id: "rr-roll-5", name: "Corn Cheese Roll", price: 90, category: "Rolls" },

];
