"use client";

import { STORE_CONFIG } from "@/config/data";
import { cn } from "@/lib/utils";
import { useCart } from "@/store/useCart";
import { Product } from "@/types";
import { Check, Plus } from "lucide-react";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const addItem = useCart((state) => state.addItem);

  const [isAdding, setIsAdding] = useState(false);

const handleAdd = () => {
  addItem(product);
  setIsAdding(true);
  setTimeout(() => setIsAdding(false), 500); // Reset después de medio segundo
};

  return (
    <div className="bg-white rounded-2xl p-3 flex gap-4 shadow-sm border border-gray-100 items-center">
      <div className="relative h-24 w-24 shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-bold text-gray-800 text-lg">{product.name}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 leading-tight">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-orange-600 text-lg">
            {STORE_CONFIG.currency}{product.price}
          </span>
         <button
  onClick={handleAdd}
  className={cn(
    "p-2 rounded-lg transition-all active:scale-90",
    isAdding ? "bg-green-500 text-white" : "bg-orange-500 text-white"
  )}
>
  {isAdding ? <Check size={20} /> : <Plus size={20} />}
</button> 
        </div>
      </div>
    </div>
  );
};