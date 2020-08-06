import React from 'react'
import './Footer.scss'

function Footer() {
    
    function scrollTop(){
        window.scrollTo(0, 0)
    }
    return (
        <section className='footer'>
            <div className='links'>
                <span onClick={scrollTop}>Home</span> 
            </div>
            <span>Desing by João Egidio, Copyright Marvel©, All Data Provided by Marvel 2014</span>
        </section>
    )
}

export default Footer
