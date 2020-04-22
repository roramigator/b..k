import React from 'react';
import {Link} from 'react-router-dom';
import './Link.css';

function Button({link, str, children, hover, on}){
  const ch = hover ? 'Hover' : 'void';
  const text = hover ? <span>[{children}]</span> : children;
  return (
    <Link to={link} className={str ? 'Link' : ch} style={on && {backgroundColor:'#ff6161'}}>{str || text}</Link>
  )
}

export default Button
