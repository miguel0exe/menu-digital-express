"use client";

import { CartDrawer } from "@/components/cart/CartDrawer";
import { CategoryFilter } from "@/components/menu/CategoryFilter";
import { ProductCard } from "@/components/menu/ProductCard";
import { PRODUCTS, STORE_CONFIG } from "@/config/data";
import { useCart } from "@/store/useCart";
import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Lógica de filtrado
const [searchQuery, setSearchQuery] = useState("");

// Actualizamos la lógica de filtrado para que use AMBOS filtros
const filteredProducts = PRODUCTS.filter((p) => {
  const matchesCategory = selectedCategory === "Todos" || p.category === selectedCategory;
  const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.description.toLowerCase().includes(searchQuery.toLowerCase());
  return matchesCategory && matchesSearch;
});
  const items = useCart((state) => state.items); // Obtenemos los items
  
  // Calculamos la cantidad total de productos (sumando cantidades)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <main className="min-h-screen bg-gray-50 pb-32">
      <header className="bg-white px-4 py-6 shadow-sm sticky top-0 z-20">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">{STORE_CONFIG.name}</h1>
          
          {/* Contador Visual */}
          <div className="relative p-2 bg-orange-100 rounded-full text-orange-600">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </header>

     <section className="max-w-md mx-auto px-4 mt-4">
  {/* Contenedor del Buscador */}
  <div className="relative group">
    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
      <Search className="text-gray-400 group-focus-within:text-orange-500 transition-colors" size={20} />
    </div>
    <input
      type="text"
      placeholder="¿Qué se te antoja hoy?"
      className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-11 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-gray-700 placeholder:text-gray-400"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>

  {/* Filtro de Categorías - Ajusté el margen para que no choque */}
  <div className="mt-2">
    <CategoryFilter 
      selectedCategory={selectedCategory} 
      setSelectedCategory={setSelectedCategory} 
    />
  </div>
  <div className="grid gap-4 mt-2">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">No hay productos en esta categoría.</p>
          )}
        </div>
</section>

      <CartDrawer />
    </main>
  );
}