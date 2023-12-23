import React, { useState } from 'react';
import qBank from './question';
import SingleQuestion from './singleQuestion';

function App() {
  const [questions, setQuestions] = useState(qBank);

  return (
    <main>
      <div className='appContainer'>
      <h1 className='topic'>Question and Answer</h1>
      <section className='section'>
      {questions.map((quest)=>{

        return <SingleQuestion key={quest.id} {...quest} />
      })} 
      </section>

      </div>

    </main>
  );
}

export default App;
