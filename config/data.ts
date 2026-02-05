import { Product, StoreConfig } from "@/types";

export const STORE_CONFIG: StoreConfig = {
  name: "Burger Magic",
  whatsappNumber: "5215512345678", // Reemplaza con el tuyo para probar
  currency: "$",
  deliveryCost: 25,
  categories: ["Burgers", "Papas", "Bebidas"]
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Classic Burger",
    description: "Carne de res, queso, lechuga y tomate.",
    price: 120,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500",
    category: "Burgers",
    isAvailable: true
  },
  {
    id: "2",
    name: "Cheese Burger",
    description: "Carne de res, doble queso, lechuga y tomate.",
    price: 140,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500",  
    category: "Burgers",
    isAvailable: true
  },
  {
    id: "3",
    name: "Papas Fritas",
    description: "Papas fritas crujientes con sal.",
    price: 50,
    image: "https://static.vecteezy.com/system/resources/previews/037/499/240/large_2x/ai-generated-french-fried-chips-free-png.png",
    category: "Papas",
    isAvailable: true
  },
];