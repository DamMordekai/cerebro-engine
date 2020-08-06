import React from 'react'

function Result({ result, openDetails }) {
    return (
        <div className='result-card'>
            <div className='result-image'>
                <img 
                    onClick={() => openDetails(result.id, result.name)} 
                    alt={result.name} 
                    src={`${result.thumbnail.path}.${result.thumbnail.extension}`} 
                />
            </div>
            <div></div>
            <div className='result-name'>
                <h3 onClick={() => openDetails(result.id, result.name)}>{result.name}</h3>
            </div>
            <div className='result-description'>
                {result.description ? <span>{result.description}</span>: <h2 style={{color: 'rgb(151, 151, 151)'}}>No description</h2>}
            </div>
            <div className='info-link'>
                <span onClick={() => openDetails(result.id, result.name)}>Mais Detalhes</span>
            </div>
        </div>
    )
}

export default Result
