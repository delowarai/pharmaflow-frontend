import api from './api';

export const getSummaryReport = (params = {}) => api.get('/reports/summary', { params });
export const exportReport = (type = 'pdf', params = {}) =>
  api.get(`/reports/export/${type}`, { params, responseType: 'blob' });
