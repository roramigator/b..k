import React from 'react';
import './Style.css';

import Button from '../../components/button/Link';

function Search(props){
  const bk = props.match.params.bk;
  const [results, changeResults] = React.useState({});
  const [status, setStatus] = React.useState(props.status);
  const [error, newError] = React.useState('missing sock!. dobby is free!');

  React.useEffect(()=>{
    setStatus(props.status);
    fetch(`http://localhost:7000/book/search/${bk}`)
    . then(is=>{
        return is.ok ? is.json() : {error:true, message:'missing sock!. dobby is free!'};
      })
    .then(has=> {
      if(!has.error){
        changeResults(has)
        setStatus(has.status)
      }else{
        newError(has.message)
      }
    });
  },[bk]);
  // console.log(book)

  return (
    <div className='Search'>
    <h2>[/search]$ cd <Button link={`/bookshelf`} hover={true}>/bookshelf</Button>_</h2>
    <p style={{color:'#ff6161'}}>$ find / | grep -i '{bk}' [{status}]</p>
    <span style={{color:'black'}}>{status === 'searching' && error}</span>
    <div className='books'>
      {
        results.status === 'complete' && (
          results.books.map(book=>{
            return book.volumeInfo && (
              <div className='book'>
                {
                  book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} />
                }
                <div>
                  <p>{book.volumeInfo.title.substring(0,15)}...</p>
                  <span>
                    <i className='bx bx-book-heart' ></i>
                    <i className='bx bx-book-bookmark' ></i>
                    <i className='bx bx-book-add'></i>
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
