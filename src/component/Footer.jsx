import React from 'react'


export default function Footer({sourceUrls}) {
   
    return(
        <div className='footer'>
           <div className="line"></div>
            <div className="word-source">
            <p>Source <a className='link' href={sourceUrls}>{sourceUrls}</a></p>
            </div> 
        </div>
    )
}