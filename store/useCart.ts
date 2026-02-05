import { Product } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      addItem: (product) => set((state) => {
        const existing = state.items.find(i => i.id === product.id);
        const newItems = existing 
          ? state.items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
          : [...state.items, { ...product, quantity: 1 }];
        
        return {
          items: newItems,
          total: newItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        };
      }),
      removeItem: (id) => set((state) => {
        const newItems = state.items.filter(i => i.id !== id);
        return {
          items: newItems,
          total: newItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        };
      }),
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage', 
    }
  )
);