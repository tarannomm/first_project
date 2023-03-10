
import React from 'react';

import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Landing from './components/Landing';
import { Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path='/products' component={Products}/>
        <Route path='/aboutUs' component={AboutUs}/>
        <Route path='/' component={Landing}/>
      </Switch>
      <Footer/>
    </div>
  );
};

export default App;