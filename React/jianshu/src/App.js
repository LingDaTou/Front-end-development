import React from 'react';
import Header from './common/Header'
import {GlobalStyled } from './style.js'
import { Provider } from 'react-redux'
import { BrowserRouter,Route} from 'react-router-dom'
import store from './store'
import {GlobalIconfont} from './statics/fonts/iconfont'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'

function App() {
  return (
    <div>
        <GlobalStyled/>
        <GlobalIconfont/>
        <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
          </div>
        </BrowserRouter>   
        </Provider> 
    </div>
  );
}

export default App;
