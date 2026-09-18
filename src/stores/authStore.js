import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('pharmaflow_token') || '',
  setAuth: (user, token) => {
    if (token) localStorage.setItem('pharmaflow_token', token);
    else localStorage.removeItem('pharmaflow_token');

    set({ user, token });
  },
  logout: () => {
    localStorage.removeItem('pharmaflow_token');
    set({ user: null, token: '' });
  },
}));
