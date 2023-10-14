import React from 'react'
import { BsPlayFill } from "react-icons/bs";

export default function Heading({word, phonetic, phonetics}) {
    const[audio, setAudio] = React.useState(null)
    const url = phonetics.audio
    // const ref = React.useRef()

    // const playAudio = () => {
    //     ref.current.play();
    // }

    return(
        <div>
            {url}
            <div className="word">
            <h1>{word}<br/><h3 className='sound'>{phonetic}</h3></h1>
            <button  className='play-button'><BsPlayFill className='play' /></button>
            </div>
            {/* <audio className='hidden' ref={ref} scr={audioUrl}/> */}
        </div>
    )
}