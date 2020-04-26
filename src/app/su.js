function passwd(){

  const search = (bk,send,status,error) => {
    const searchURL = `http://localhost:7000/book/search/${bk}`;
    fetch(searchURL)
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

  const login = (user, pass, log, history, error) => {
    const loginURL = `http://localhost:7000/signin/uuid`;
    fetch(loginURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: user, password: pass})
    })
    .then(is=>{
      return is.ok ? is.json() : {error:true, message:'muggle error!. ¡aa sa ñaħal. ši ññox'};
    })
    .then(has=>{
      !has.error ? (()=>{
        log(has.uuid);
        history.push("/bookshelf");
      })() : (
        error(has.message)
      )
    })
  };

  return {
    find: search,
    ssh: login
  }

}

export default passwd
