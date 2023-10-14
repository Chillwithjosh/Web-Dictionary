import React from 'react'


export default function Content({partOfSpeech, definitions, synonyms, antonyms}) {
    return(
        <div>
        <div className="word-meaning">
          <div className="divider">
            <h3><span>{partOfSpeech}</span></h3>
          </div>
          <p className='gray'>Meaning</p>
          
          <ul className='word-definition'>

            {
                definitions.map((def, index) =>(
                    <div key={index}>
                    <li key={index}>{def.definition}</li>
                    {
                        def.example ? <p className='example'>"{def.example}"</p> : null
                    }
                    
                    </div>
                ))
            }

          </ul>
          {
            synonyms[0] === undefined ?   null : <p className='gray margin'>
                Synonyms:{" "}  
                {synonyms.map((synonym, index) => (
                    <span key={index} className='sy-word'>{synonym}</span>
                ))}
                
                </p> 
 
          }
          {
            antonyms[0] === undefined ?   null : <p className='gray margin'>
                Antonyms:{" "}  
                {antonyms.map((antonym, index) => (
                    <span key={index} className='sy-word'>{antonym}</span>
                ))}
                
                </p> 
   
          }
        </div>
        </div>
    )
}