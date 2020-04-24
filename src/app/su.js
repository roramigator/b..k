function passwd(){

  const search = (bk,send,status,error) => {
    fetch(`http://localhost:7000/book/search/${bk}`)
    . then(is=>{
        return is.ok ? is.json() : {error:true, message:'missing sock!. dobby is free!'};
      })
    .then(has=> {
      if(!has.error){
        send(has)
        status(has.status)
      }else{
        error(has.message)
      }
    });
  };

  return {
    find: search
  }

}

export default passwd
