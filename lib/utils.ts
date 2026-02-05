import { STORE_CONFIG } from "@/config/data";

export const formatWhatsAppMessage = (items: any[], total: number) => {
  const header = `*NUEVO PEDIDO - ${STORE_CONFIG.name}*\n--------------------------\n`;
  
  const productsList = items
    .map((item) => `- ${item.quantity}x ${item.name} (${STORE_CONFIG.currency}${item.price * item.quantity})`)
    .join("\n");

  const footer = `\n--------------------------\n*Total a pagar: ${STORE_CONFIG.currency}${total + STORE_CONFIG.deliveryCost}*\n_(Incluye envío: ${STORE_CONFIG.currency}${STORE_CONFIG.deliveryCost})_`;

  const finalMessage = `${header}${productsList}${footer}\n\n*¿Cómo deseas pagar?*`;
  
  return encodeURIComponent(finalMessage);
};


export const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
}