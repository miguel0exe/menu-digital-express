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
  // Agrega un par más para tener volumen
];