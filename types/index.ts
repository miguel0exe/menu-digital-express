export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isAvailable: boolean;
}

export interface StoreConfig {
  name: string;
  whatsappNumber: string;
  currency: string;
  deliveryCost: number;
  categories: string[];
}

export interface Check {
  size: number;
}