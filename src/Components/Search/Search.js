import React from 'react'
import './searchstyle.scss'

function Search({ handleInput, search, searchClick }) {
    return (
        <section className='search-wrapper'>
            <input 
                type='text' 
                className='searchbox' 
                placeholder='Buscar...'
                onChange={handleInput}
                onKeyPress={search}
            />
            <button className='button' onClick={searchClick}><i className="fa fa-search"></i></button>
        </section>
    )
}

export default Search
