import { create } from 'zustand';

export const useCartStore = create((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((entry) => entry.id === item.id);

      if (existing) {
        return {
          items: state.items.map((entry) =>
            entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry,
          ),
        };
      }

      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((entry) => entry.id !== id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items
        .map((entry) => (entry.id === id ? { ...entry, quantity: Math.max(quantity, 1) } : entry))
        .filter((entry) => entry.quantity > 0),
    })),
  clear: () => set({ items: [] }),
}));
