import React from 'react';
import './Style.css';

import {CookieContext} from '../../cookie/Context';

import Button from '../../components/button/Link';

const l = (log) => console.log(log);

function IO({history}){
  const [cookie, IO] = React.useContext(CookieContext);
  cookie && history.push("/bookshelf");
  
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');

  const [error, newError] = React.useState('');

  // document.addEventListener('keypress', e=>{
  //   const key = e.key;
  //   // ctrl+b
  //   // ctrl+k
  // });

  const login = () => {
    fetch('http://localhost:7000/signin/uuid', {
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
        IO(has.uuid);
        history.push("/bookshelf");
      })() : (
        newError(has.message)
      )
    })
  };

  return (
    <form className='IO'>
      {
        error && (
          <h3 className='error'>{error}</h3>
        )
      }
      <fieldset>
        <legend>login</legend>
        <div className='inputs'>
          <input type='text' value={user} placeholder='namepass' onChange={e=>setUser(e.target.value)} />
          <input type='password' value={pass} placeholder='userword' onChange={e=>setPass(e.target.value)} />
          <span>
            <Button click={login} str='login' on={true} />
            <Button click={()=>{
                newError('')
                setUser('')
                setPass('')
              }} str='cancel' />
          </span>
        </div>
      </fieldset>
    </form>
  )
}

export default IO
