import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './Home.css';

import {CookieProvider} from './cookie/Context';
import ProtectedRoute from './protected/Route';
import IO from './views/sign/IO';

import NotFound from './views/404/Page';
import Search from './views/search/Page';
import Bookshelf from './views/bookshelf/Page'
  import SearchBar from './components/search/Bar';
  import Button from './components/button/Link';

// const home = require('../assets/1.svg');

function Home() {
  { /*}<Route path='/' component={NotFound} /> */ }
  return (
    <CookieProvider>
      <i class='bx bx-code'></i>
      <div className='Home'>
        <header>
          <h1><Button link={`/bookshelf`}><i className='bx bxs-book'></i></Button>b..k</h1>
          <SearchBar />
        </header>
        <div className='body'>
          <Switch>
            <Route exact path='/' component={IO} />
            <ProtectedRoute exact path='/bookshelf' component={Bookshelf} />
            <ProtectedRoute exact path='/search/:bk' component={Search} status='..' />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
        <footer>
          <div>
            <span style={{textAlign:'center'}}><i className='bx bx-copyright bx-flip-horizontal'></i> copyleft 2020. all rights reversed.</span>
            <h1><Button link={`/bookshelf`}><i className='bx bxs-heart' style={{color:'red'}}></i></Button></h1>
          </div>
        </footer>
      </div>
      <i class='bx bx-code-alt'></i>
    </CookieProvider>
  )
}

export default Home
