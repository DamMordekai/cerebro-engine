import React from 'react'

function Comiccard({ comics }) {
    return (
        <a href={comics.urls[0].url} target='_blank' rel="noopener noreferrer">
            <div className='comic-card'>
                <img src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} alt='Comic Img'/>
                <span>{comics.title}</span>
            </div>
        </a>
        
    )
}

export default Comiccard
