import React from 'react'

const Search = (searchTerm, setSearchTerm) => {
    return (
        <div className='Search'>
            <div>
                <img src='search.svg' alt='search'></img>
                <input 
                type='text'
                placeholder='Search through thousand of movies'
                value={searchTerm}
                onChange={{e}=> setSearchTerm(e.target.value)</div>}></input>
            </div>
        </div>
    )
}