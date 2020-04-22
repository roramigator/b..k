import React from 'react';

import Button from '../../components/button/Link';

function Bookshelf(){
  return (
    <>
    <h2><Button link={`/`} hover={true}>../</Button> my bookshelf</h2>
    </>
  )
}

export default Bookshelf
