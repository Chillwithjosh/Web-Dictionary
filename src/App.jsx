import React from 'react'
import './App.css'
// import {nanoid} from 'nanoid'
// import Value from './component/Value'
import Content from './component/Content'
import Heading from './component/Heading'
import Footer from './component/footer'
import Error from './component/Error'
import { BiBook } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { BsPlayFill } from "react-icons/bs";


// ` `
export default function App() {
  // const[word,setWords] = React.useState([])
  const[error, setError] = React.useState(false)
  const[inputData, setInputData] = React.useState('')
  const[enter, setEnter] = React.useState(false)
  const[results, setResult] = React.useState(null)
  const[data, setData] = React.useState('')
  const[exist, setExist] = React.useState(true)
  const[loading, setLoading] = React.useState(true)
  const[audio, setAudio] = React.useState(null)

  // let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputData}`
  // let url = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`

  // React.useEffect(()=>{
  //   // console.log(num)
  //   async function getWord(){
  //     const res = await fetch (url)
  //     const data = await res.json()
  //     let container = []
  //     data.results.forEach(word =>{ // results is not suppose to be part
  //       container.push({word:word.word, phonetic: word.phonetic, audio:word.phonetics.audio, partOfSpeech: word.meanings.partOfSpeech, definition: word.definitions.definition, example: word.definitions.example, synonyms: word.definitions.synonyms, antonyms: word.definitions.antonyms})
  //     })
  //     setWords(container)
  //   }
  //   getWord()
  // },[])


  // console.log(word[0])

  // let inputValue = inputData
  // let wordValue = word.key
  // console.log(inputValue)

  // let value = word[0].word

  // const display = (event) => {
  //   if(event.which === 13) {
  //     setEnter(prevEnter => !prevEnter)
  //     // console.log('hr')
      // if(inputData  == word[0].word) {
      //   console.log('gg')
      // }
  //   }
  // }

  // const loop = word.map(word => {
  //   return(
  //     <div>
        // <div className="word">
        //     <h1>{word.word}<br/><h3 className='sound'>{word.phonetic}</h3></h1>
        //     <button className='play-button'><span className='play'>p</span></button>
        // </div>
  //       <div className="word-meaning">
  //         <div className="divider">
  //           <h3><span>{word.partOfSpeech}</span></h3>
  //         </div>
  //         <p className='gray'>Meaning</p>
          
  //         <ul className='word-definition'>
  //           <li>{word.definition}</li>
  //           {word.example ? <p className='example'>{word.example}</p> : null}
  //         </ul>
          // {/* "" */}
  //         {word.synonyms ? <p className='gray margin'>Synonyms <span>{word.synonyms}</span></p> : null}
  //         {word.antonyms ? <p className='gray margin'>Antonyms <span>{word.antonyms}</span></p> : null}
  //         </div>
  //         <div className="line"></div>
  //         <div className="word-source">
  //           <p>Source <a href="">httsp//</a></p>
  //         </div>
  //     </div>
  //   )
  // })

  // const summ = word[0].phonetics[0].license.name
  // let container = []
  // let sum = word.forEach(word =>{
  //   container.push({
  //     word: word[0].phonetics[0].license.name
  //   })
  // })

  // console.log(container)

  const childToParent = (childData) => {
    setData(childData)
    
  }


  const handleError = () => {
  // if(results === ''){
    let errorWord = ` is not found in Web Dictionary`
    return (
      errorWord)
  // }
    // let errorWord
    // if(!results){
    //   errorWord = 'Word not found in Web Dictionary'
    // }else{
    //   errorWord = ``
    // }
    // return (
    //   errorWord)
  }

  const display = (event) => {
    let errorWord = `is not found in Web Dictionary`
    if(event.which === 13) {
      searchWord()
      // if(results === undefined){
      //     setError(errorWord)
      // }else if(results !== undefined){
      //   setError('')
      // }
      // if(results){
      //   setError(false)
      // }else{
      //   setError(true)
      // }
    }
  }

  // console.log(results.word)

  const searchWord = async () =>{
      const response = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${inputData}`)
      const data = await response.json()
      setResult(data[0])
      const phonetics = data[0].phonetics
      if(!phonetics) return;
      const url = phonetics[0].audio
      setAudio(new Audio(url))
  }

  console.log(results)


  const refresh = () => window.location.reload(true)

  if(results===undefined) return (
    <div className='error-container'>
      <p className='error-word'><span>{inputData}</span> not found in Web Dictionary</p>
      <button className='error-button' onClick={refresh} >Go Back</button>
    </div>
  )

  // if(loading) return <CircularProgress />

  

  // const heading = () => {
  //   // const audio = results.phonetics.find(phone => phone.audio !== '').audio
  //   return{
  //     // audioUrl: audio,
  //     word: results.word,
  //     phonetic: results.phonetic
  //   }
  // }


  return (
    <div className="app">
      <div className="container">
        <div className="header"><BiBook className='header-icon'/><span>Web Dictionary</span></div>
        <div className="content">
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
            {/* {inputData  !== word[0].word === ''  ? error() : ''} */}
            {/* {error  ?  handleError() : ''} */}
            {/* {error} */}
            {/* {handleError()} */}
            {/* {errorWord} */}
          {/* <Error childToParent={childToParent}/> */}
          {/* {exist ?    errorWord : ''} */}
          {/* results.phonetics[0].audio */}

          {results ?  (
            <>
            {/* <Heading {...heading()}/> */}
            {/* <Heading {...results} /> */}
            <div className="word">
            <h1>{results.word}<br/><h3 className='sound'>{results.phonetic}</h3></h1>
            {results.phonetics[0].audio  ? <button onClick={() => audio.play()} className='play-button'><BsPlayFill className='play' /></button> : '' }
            </div>
            {results.meanings.map((content) =>{
              return <Content {...content} />
            })}
            <Footer {...results} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}


