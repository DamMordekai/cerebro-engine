import React from 'react'
import Result from './Result'
import './resultstyle.scss'

function Results({ results, searched, error, openDetails }) {
    return (
        <section className='results'>
            {searched && results.length === 0  ? <h1 style={{color:'white', fontSize: '100px', textShadow: '2px 3px black'}}>No results</h1>: null}
            {error ? <h1 style={{color:'white', fontSize: '100px', textShadow: '2px 3px black'}}>Error</h1>: null}
            {results.map(result => (
                <Result 
                    key={result.id} 
                    result={result}
                    openDetails={openDetails}
                />
            ))}
        </section>
    )
}

export default Results
