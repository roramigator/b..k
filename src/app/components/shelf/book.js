import React from "react";

import Button from "../button/Link";

function Shelf({bookshelf,shelf,icon}){
  return bookshelf && (
    <div>
      <h2>{icon[shelf]}{shelf}</h2>
      {
        bookshelf[shelf].map(book=>{
          return (
            <Button link={"/"} key={book.id}>{book.title}</Button>
          )
        })
      }
    </div>
  )
}

export default Shelf
