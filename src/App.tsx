import React, { KeyboardEvent, useState } from 'react';
import './App.css';
import InputField from './components/InputFeild';
import Preview from './components/Preview';

const App: React.FC = () => {
  const text = "many each during hand tell too time through not show here while same form"
  let i = 0;
  const textWords = text.split(' ')
  const [paragraph, setParagraph] = useState<string>(text)
  const [input, setInput] = useState<string>('')
  const [words, setWords] = useState<string>(textWords[i])

  /*
  const checkMatch = () => {
    if (input[input.length -1] === ' ') {
      const check = words + ' '
      if (input === check) {
          let correct = words;
          setInput('');
          setParagraph(paragraph.slice(input.length, paragraph.length))
          i++;
          setWords(textWords[i])
          return correct;
      }
    }
  }
  */

  const handleKeyUp = (e: KeyboardEvent<HTMLImageElement>) => {
    // try chuck the stuff into here 
    if (e.key === ' ') {
      setInput('')
    }
  };

  return (
    <div className='container'>
      <span className='heading'>Type Racer</span> 
      <Preview paragraph={paragraph} input={input}/>
      <InputField setInput={setInput} handleKeyUp={handleKeyUp} input={input}/>
    </div>
  );
};

export default App;
