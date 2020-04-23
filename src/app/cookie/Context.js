import React from 'react';
import {mk,ls,rm} from './rc';

export const CookieContext = React.createContext();

export const CookieProvider = ({children}) => {
  const [cookie, lets] = React.useState(ls);

  const IO = overwrite => {
    overwrite ? mk(overwrite) : rm();
    lets(overwrite);
  };

  return (
    <CookieContext.Provider value={[cookie,IO]}>
      {children}
    </CookieContext.Provider>
  )
};
