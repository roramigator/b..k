import React from 'react';
import {CookieContext} from '../../cookie/Context';

import Shelf from "../../components/shelf/book";
import Button from '../../components/button/Link';

function Bookshelf(){
  const [cookie, IO] = React.useContext(CookieContext);
  const [bookshelf,loadBookshelf] = React.useState(false)

  const icons = {
    wantToRead: <i className='bx bx-book-add' ></i>,
    currentlyReading: <i className='bx bx-book-bookmark' ></i>,
    read: <i className='bx bx-book-heart' ></i>
  }

  React.useEffect(()=>{
    fetch(`http://localhost:7000/bookshelf?id=${cookie}`)
      .then(load=>load.json())
      .then(res=>loadBookshelf(res.books))
  },[cookie])

  return (
    <>
      <h2>[/bookshelf]$ <Button click={(user)=>user.found&&user.log()} hover={true}>exit</Button>_</h2>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <Shelf bookshelf={bookshelf} shelf="wantToRead" icon={icons} />
        <Shelf bookshelf={bookshelf} shelf="currentlyReading" icon={icons} />
        <Shelf bookshelf={bookshelf} shelf="read" icon={icons} />
      </div>
    </>
  )
}

export default Bookshelf
