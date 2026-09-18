import api from './api';

export const getSales = (params = {}) => api.get('/sales', { params });
export const getSaleById = (id) => api.get(`/sales/${id}`);
export const createSale = (payload) => api.post('/sales', payload);
