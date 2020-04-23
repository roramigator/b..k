import React from 'react';

import Button from '../../components/button/Link';

function Bookshelf(){

  return (
    <>
      <h2>[/bookshelf]$ <Button click={(user)=>user.found&&user.log()} hover={true}>exit</Button>_</h2>
    </>
  )
}

export default Bookshelf
