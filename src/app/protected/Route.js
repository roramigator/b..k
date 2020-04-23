import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {CookieContext} from '../cookie/Context';

function ProtectedRoute({status, component: Component, ...rest}) {
  const [cookie] = React.useContext(CookieContext);

  return (
    <Route {...rest} render={routpps => {
      return cookie ? <Component {...routpps} status={status} /> : <Redirect to='/' {...routpps} {...rest} />
    }} />
  )
}

export default ProtectedRoute
