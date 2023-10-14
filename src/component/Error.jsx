import React from 'react'
import { BiBook } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

export default function Error({childToParent},props) {
   const[inputData, setInputData] = React.useState('')
   const data = 'This data is from C TO P'

   const display = (event) => {
    if(event.which === 13) {
      // console.log(results.word)
      searchWord()
      if(results === undefined) {
        setError(prevError => !prevError)
        // error()
        console.log(props.word)
      }else{
      console.log('gg')
      setError(prevError => !prevError)
      }
      
    }
  }

    return(
        <div>
          <div className="input-container">
          <CiSearch className="icon" />
          <input 
          type="text" 
          className='input-box'
          placeholder='Enter a word'
          value={inputData}
          onChange={event => setInputData(event.target.value)}
          onKeyUp={event => display(event)}
          />
          </div>
          {/* <button onClick={() => childToParent(inputData)}>Click</button> */}
        </div>
    )
}