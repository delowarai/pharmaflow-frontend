import api from './api';

export const getPurchases = (params = {}) => api.get('/purchases', { params });
export const createPurchase = (payload) => api.post('/purchases', payload);
export const updatePurchase = (id, payload) => api.put(`/purchases/${id}`, payload);
