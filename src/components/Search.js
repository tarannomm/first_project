import React, { useState } from 'react';
import "../styles/scss/Search.scss";
const Search = () => {
    const [search,setSearch]=useState('');
   
    return (
        <div className='searchContainer'>
            <h1>Search what you want !!!</h1>
            <input type="search" placeholder='search...' value={search}  onChange={e => setSearch(e.target.value)}/>
        </div>
    );
};

export default Search;