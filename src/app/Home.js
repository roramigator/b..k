import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './Home.css';

import SearchBar from './components/search/Bar';
import Button from './components/button/Link';
import Search from './views/search/Page';
import Bookshelf from './views/bookshelf/Page'

function Home() {
  return (
    <div className='Home'>
      <header>
        <h1><Button link={`/bookshelf`}><i className='bx bxs-book'></i></Button>b..k</h1>
        <SearchBar />
      </header>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/bookshelf' />
        </Route>
        <Route exact path='/bookshelf' component={Bookshelf} />
        <Route path='/search/:s' component={Search} />
      </Switch>
      <footer>
        <div>
          <Button link={`/bookshelf`} hover={true}>./shelf</Button>
          <span style={{textAlign:'center'}}><i className='bx bx-copyright bx-flip-horizontal'></i> copyleft 2020. all rights reversed.</span>
          <h1><Button link={`/bookshelf`}><i className='bx bxs-book'></i></Button></h1>
        </div>
      </footer>
    </div>
  )
}

export default Home
