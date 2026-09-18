import api from './api';

export const getInventory = (params = {}) => api.get('/inventory', { params });
export const adjustInventory = (payload) => api.post('/inventory/adjust', payload);
export const getLowStock = () => api.get('/inventory/low-stock');
