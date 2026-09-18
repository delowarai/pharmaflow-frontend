import api from './api';

export const login = ({ email, password }) => {
  const body = new URLSearchParams();
  body.set('username', email);
  body.set('password', password);

  return api.post('/auth/login', body, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

export const logout = () => api.post('/auth/logout');
export const getProfile = () => api.get('/auth/profile');
