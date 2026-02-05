"use client";

import { STORE_CONFIG } from "@/config/data";
import { cn } from "@/lib/utils";

interface Props {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const CategoryFilter = ({ selectedCategory, setSelectedCategory }: Props) => {
  return (
    <div className="sticky top-18 z-10 bg-gray-50/80 backdrop-blur-md py-4 -mx-4 px-4 overflow-x-auto no-scrollbar">
      <div className="flex gap-2 max-w-md mx-auto">
        <button
          onClick={() => setSelectedCategory("Todos")}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
            selectedCategory === "Todos"
              ? "bg-orange-600 text-white shadow-md"
              : "bg-white text-gray-600 border border-gray-200"
          )}
        >
          Todos
        </button>
        {STORE_CONFIG.categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
              selectedCategory === cat
                ? "bg-orange-600 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};