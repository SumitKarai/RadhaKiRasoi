
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
];
