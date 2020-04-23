import React from 'react';
import Bar from './Bar.css';

import {CookieContext} from '../../cookie/Context';

import Button from '../button/Link';

function SearchBar(){
  const [search, setSearch] = React.useState('');
  const [cookie] = React.useContext(CookieContext);

  return (
    cookie ? (
      <div className='Bar'>
        <input type='text' value={search} onChange={e=>setSearch(e.target.value)} />
        <Button link={`/search/${search === '' ? 'potter' : search}`} str='find' />
      </div>
    ) : (
      <h1 className='H'>
        <i className='bx bxl-react'></i>
        <i className='bx bxl-nodejs' ></i>
      </h1>
    )
  )
}

export default SearchBar
