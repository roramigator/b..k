import React from 'react';

import Button from '../../components/button/Link';

function Search(props){
  return (
    <>
    <h2><Button link={`/`} hover={true}>../</Button> search results</h2>
    {console.log(props)}
    </>
  )
}

export default Search
