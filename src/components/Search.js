import React from 'react';
import "../styles/scss/Search.scss";
const Search = () => {
    return (
        <div className='searchContainer'>
            <h1>Search what you want !!!</h1>
            <input type="search" placeholder='search...'/>
        </div>
    );
};

export default Search;