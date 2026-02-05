"use client";

import { STORE_CONFIG } from "@/config/data";
import { formatWhatsAppMessage } from "@/lib/utils";
import { useCart } from "@/store/useCart";
import { ShoppingBag, Trash2, X } from "lucide-react";
import { useState } from "react"; // Añadimos estado para el modal

export const CartDrawer = () => {
  const { items, total, removeItem } = useCart();
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir el resumen

  if (items.length === 0) return null;

  const handleCheckout = () => {
    const message = formatWhatsAppMessage(items, total);
    const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* --- MODAL DE RESUMEN --- */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-60 flex items-end justify-center">
          <div className="bg-white w-full max-w-md rounded-t-3xl p-6 animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Tu Pedido</h2>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full">
                <X size={20} className=" bg-amber-500" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-bold text-gray-800">{item.quantity}x {item.name}</p>
                    <p className="text-sm text-gray-500">{STORE_CONFIG.currency}{item.price * item.quantity}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-red-500 p-2">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
            >
              Confirmar y enviar por WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* --- BOTÓN FLOTANTE (TRIGGER) --- */}
      <div className="fixed bottom-6 left-0 right-0 px-4 z-50">
        <button
          onClick={() => {
            console.log('first')
            setIsOpen(true)
          }}
          className="max-w-md mx-auto w-full bg-orange-600 z-20 text-white flex items-center justify-between p-4 rounded-2xl shadow-2xl active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 p-2 rounded-lg">
              <ShoppingBag size={20} />
            </div>
            <span className="font-bold text-lg">Ver pedido ({items.length})</span>
          </div>
          <span className="font-bold text-lg">
            {STORE_CONFIG.currency}{total + STORE_CONFIG.deliveryCost}
          </span>
        </button>
      </div>
    </>
  );
};