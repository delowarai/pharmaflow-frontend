import { useCallback } from 'react';
import { useAuthStore } from '../stores/authStore';
import { login as loginRequest } from '../services/auth.service';

export const useAuth = () => {
  const { user, token, setAuth, logout } = useAuthStore();

  const login = useCallback(
    async (payload) => {
      const response = await loginRequest(payload);
      const nextUser = response?.data?.user || { name: 'Pharma Admin' };
      const nextToken = response?.data?.access_token;

      if (!nextToken) {
        throw new Error('The login response did not include an access token.');
      }

      setAuth(nextUser, nextToken);
      return response;
    },
    [setAuth],
  );

  return { user, token, login, logout };
};
