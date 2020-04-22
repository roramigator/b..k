import React from 'react';
import Bar from './Bar.css';

import Button from '../button/Link';

function SearchBar(){
  const [search, setSearch] = React.useState('');
  return (
    <div className='Bar'>
      <input type='text' value={search} onChange={e=>setSearch(e.target.value)} />
      <Button link={`/search/${search}`} str='find' />
    </div>
  )
}

export default SearchBar
