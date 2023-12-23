import React, { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';


const SingleQuestion = ({question, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className='article'>
        <header>
            <h1>{question}</h1>
            <button className='btn' onClick={()=> setShowAnswer(!showAnswer)}>{showAnswer ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </header>

        {showAnswer && <h4>{answer}</h4>}


    </article>
  )
}

export default SingleQuestion;
