import React from 'react'
import './App.css'
import Content from './component/Content'
import Footer from './component/footer'
import { BiBook } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { BsPlayFill } from "react-icons/bs";


// ` `
export default function App() {
  const[inputData, setInputData] = React.useState('')
  const[results, setResult] = React.useState(null)
  const[audio, setAudio] = React.useState(null)

  const display = (event) => {
    if(event.which === 13) {
      searchWord()
    }
  }
  const click = () => {
    searchWord()
  }

  const searchWord = async () =>{
      const response = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${inputData}`)
      const data = await response.json()
      setResult(data[0])
      const phonetics = data[0].phonetics
      if(!phonetics) return;
      const url = phonetics[0].audio
      setAudio(new Audio(url))
  }

  const refresh = () => window.location.reload(true)

  if(results===undefined) return (
    <div className='error-container'>
      <p className='error-word'><span>{inputData}</span> not found in Web Dictionary</p>
      <button className='error-button' onClick={refresh} >Go Back</button>
    </div>
  )

  return (
    <div className="app">
      <div className="container">
        <div className="header"><BiBook className='header-icon'/><span>Web Dictionary</span></div>
        <div className="content">
          <div className="input-container">
          <CiSearch className="icon" onClick={click}/>
          <input 
          type="text" 
          className='input-box'
          placeholder='Enter a word'
          value={inputData}
          onChange={event => setInputData(event.target.value)}
          onKeyUp={event => display(event)}
          />
          </div>
          {results ?  (
            <>
            <div className="word">
            <h1>{results.word}<br/><p className='sound'>{results.phonetic}</p></h1>
            {results.phonetics[0].audio  ? <button onClick={() => audio.play()} className='play-button'><BsPlayFill className='play' /></button> : '' }
            </div>
            {results.meanings.map((content, index) =>{
              return <Content key={index} {...content} />
            })}
            <Footer {...results} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}


