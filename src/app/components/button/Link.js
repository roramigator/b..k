import React from 'react';
import {Link} from 'react-router-dom';

import {CookieContext} from '../../cookie/Context';

import './Link.css';

function Button({link, str, children, hover, on, click=()=>{}}){
  const [cookie, IO] = React.useContext(CookieContext);
  const ch = hover ? 'Hover' : 'void';
  const text = hover ? <span>{children}</span> : children;
  return (
    <Link to={link || ''} className={str ? 'Link' : ch} style={on && {backgroundColor:'#ff6161'}} onClick={()=>click({found:cookie,log:IO})}>{str || text}</Link>
  )
}

export default Button
