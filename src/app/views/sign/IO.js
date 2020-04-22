import React from 'react';

import Button from '../../components/button/Link';

function Bookshelf(){
  return (
    <form class="modal-content animate" action="/action_page.php" method="post">
      <input type='text' />
      <input type='password' />
      <Button link='/' str='cancel' />
      <Button link='/in' str='login' on={true} />
    </form>
  )
}

export default Bookshelf
