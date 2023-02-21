
import React from 'react';
import Search from './components/Search';
import Cards from './components/Cards';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Logos from './components/Logos';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Loading/>
      <Cards/>
      <Search/>
      <Logos/>
    </div>
  );
};

export default App;