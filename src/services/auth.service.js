import api from './api';

export const login = (payload) => api.post('/auth/login', payload);
export const logout = () => api.post('/auth/logout');
export const getProfile = () => api.get('/auth/profile');
