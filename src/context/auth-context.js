import { useContext, createContext } from 'react';

const AuthContext = createContext(null);

function useAuth() {
  return useContext(AuthContext);
}

export { AuthContext, useAuth };
