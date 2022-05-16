import React, { KeyboardEvent, useState } from 'react';
import './App.css';
import InputField from './components/InputFeild';
import Preview from './components/Preview';

const App: React.FC = () => {
  const text = 'I have spoken words of hope. But only of hope. Hope is not victory. War is upon us and all our friends, a war in a which only the use of the Ring could give us surety of victory.'
  const textWords = text.split(' ')
  const [paragraph, setParagraph] = useState<string>(text)
  const [input, setInput] = useState<string>('')
  const [index, setIndex] = useState<number>(0)
  const [correctWords, setCorrectWords] = useState<string>('')

  const handleKeyDown = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
    else if (e.key === 'Backspace' && input === ' ') {
      e.preventDefault()
    }
    else if (e.key === ' ') {
      if (input.trim() === textWords[index]) {
        setCorrectWords(correctWords + input)
        setIndex(index + 1)
        setParagraph(paragraph.slice(input.length, paragraph.length))
        setInput('');       
        console.log(input.length)
      }
      if (index === (textWords.length-1)) {
        setInput('You finished!')
      }
    }
  };

  return (
    <div className='container'>
      <span className='heading'>Type Racer</span> 
      <Preview paragraph={paragraph} input={input} correctWords={correctWords}/>
      <InputField setInput={setInput} handleKeyDown={handleKeyDown} input={input}/>
    </div>
  );
};

export default App;
