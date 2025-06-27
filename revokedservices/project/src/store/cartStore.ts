import { create } from 'zustand';
import { CartItem } from '../types';

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => {
    console.log('Adding item to cart:', item);
    set((state) => ({
      items: [...state.items, { ...item, id: crypto.randomUUID() }]
    }));
  },
  removeItem: (id) => {
    console.log('Removing item from cart:', id);
    set((state) => ({
      items: state.items.filter(item => item.id !== id)
    }));
  },
  clearCart: () => {
    console.log('Clearing cart');
    set({ items: [] });
  },
  getTotal: () => get().items.reduce((total, item) => total + item.price, 0)
}));