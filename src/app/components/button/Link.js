import React from 'react';
import {Link} from 'react-router-dom';

import {CookieContext} from '../../cookie/Context';

import './Link.css';

function Button({link, str, children, hover, on, click=()=>{},history}){
  const [cookie, IO] = React.useContext(CookieContext);
  const ch = hover ? 'Hover' : 'void';
  const text = hover ? <span>{children}</span> : children;

  const addToShelf = (bk,sh) => {
    (bk && sh) && (
      fetch(`http://localhost:7000/bookshelf/${bk}/${sh}?id=${cookie}`,{
        method:"PUT"
      })
    )
  };

  return (
    <Link
      to={link || ''}
      className={str ? 'Link' : ch}
      style={on && {backgroundColor:'#ff6161'}}
      onClick={()=>click({found:cookie,log:IO,addToShelf})}
    >
      {str || text}
    </Link>
  )
}

export default Button
