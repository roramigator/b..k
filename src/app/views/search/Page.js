import React from 'react';
import passwd from '../../su';
import './Style.css';

import Button from '../../components/button/Link';

function Search(props){
  const sudo = passwd();
  const bk = props.match.params.bk;
  const [results, changeResults] = React.useState({});
  const [status, setStatus] = React.useState(props.status);
  const [error, newError] = React.useState('missing sock!. dobby is free!');


  React.useEffect(()=>{
    setStatus(props.status);
    sudo.find(bk,changeResults,setStatus,newError);
  },[bk]);

  return (
    <div className='Search'>
    <h2>[/search]$ cd <Button link={`\/bookshelf`} hover={true}>/bookshelf</Button>_</h2>
    <p style={{color:'#ff6161'}}>$ find / | grep -i '{bk}' [{status}]</p>
    <span style={{color:'black'}}>{status === 'searching' && error}</span>
    <div className='books'>
      {
        results.status === 'complete' && (
          results.books.map(book=>{
            return book.volumeInfo.imageLinks && (
              <div>
                <img src={book.volumeInfo.imageLinks.thumbnail} />
                <div className='btns'>
                  <span>
                    <Button click={({addToShelf})=>addToShelf(book.id,"/wantToRead")} hover={true}><i className='bx bx-book-add' ></i></Button>
                    <Button link={`/bookshelf/${book.id}/currentlyReading`} hover={true}><i className='bx bx-book-bookmark' ></i></Button>
                    <Button link={`/bookshelf/${book.id}/read`} hover={true}><i className='bx bx-book-heart' ></i></Button>
                  </span>
                  <Button str='more' on={true} />
                </div>
              </div>
            )
          })
        )
      }
    </div>
  </div>
  )
}

export default Search
