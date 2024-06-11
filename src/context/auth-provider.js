/* eslint-disable consistent-return */
import { useState, useMemo } from 'react';
import { AuthContext } from './auth-context';
import css from './css.module.scss';

function AuthContextProvider({ children }) {
  const [modalState, setModalState] = useState(false);
  const [stateAuth, setStateAuth] = useState(false);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    modalState,
    setModalState,
    stateAuth,
    setStateAuth,
  };
  const modal = useMemo(() => {
    if (modalState) {
      return (
        <div className={css.modal}>
          <div className={css.content}>content modal context</div>
        </div>
      );
    }
  }, [modalState]);

  return (
    <AuthContext.Provider value={value}>
      {modal}
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
