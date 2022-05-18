import React, { KeyboardEvent, useState } from 'react';
import './App.css';
import InputField from './components/InputFeild';
import Preview from './components/Preview';

const App: React.FC = () => {
  const text = `I've been going out with Nick Nelson since I was fourteen. He likes rugby, and Formula 1. Animals, especially dogs. The Marvel Universe, the sound felt tips make on paper. Rain, drawing on shoes. Disneyland, and minimalism. He also likes me.`
  const textWords = text.split(' ')
  const [paragraph, setParagraph] = useState<string>(text)
  const [input, setInput] = useState<string>('')
  const [index, setIndex] = useState<number>(0)
  const [correctWords, setCorrectWords] = useState<string>('')
  const [status, setStatus] = useState<boolean>(true)
  const [wordCount, setWordCount] = useState<number>(0)
  const [countDown, setCountDown] = useState<number>(60)
  const [timerStarted, setTimerStarted] = useState<boolean>(false)
  const [WPM, setWPM] = useState<number>(0)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    if (!timerStarted) {
      setTimerStarted(true)
      // calls the function inside every 1000 milliseconds
      let interval = setInterval(() => {
        setCountDown((prevCountdown) => {
          if (prevCountdown === 0) {
            clearInterval(interval)
            setStatus(false)
            return 0
          } else {
            return prevCountdown - 1
          }
        } )
      } , 1000 )
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
    else if (e.key === 'Backspace' && input === ' ') {
      e.preventDefault()
    }
    else if (e.key === ' ') {
      if (input.trim() === textWords[index]) {
        setWordCount(wordCount + input.length)
        setCorrectWords(correctWords + input)
        setIndex(index + 1)
        setParagraph(paragraph.slice(input.length, paragraph.length))
        setInput('');       
      }
      if (index === (textWords.length-1)) {
        setStatus(false)
        const WPM = Math.floor((wordCount/5)/((60-countDown)/60))
        setWPM(WPM)  
      }
    }
  };

  if (status === true) return (
    <div className='container'>
      <span className='heading'>Type Racer</span> 
      <span className='timer'> {countDown} </span>
      <Preview paragraph={paragraph} input={input} correctWords={correctWords}/>
      <InputField handleKeyDown={handleKeyDown} handleOnChange={handleOnChange} input={input}/>
    </div>
  );
  else return (
    <div className='container'>
      <span className='result'>You Finished!</span>
      <span className = 'result'> Your WPM was {WPM}</span>
    </div>
  )
};

export default App;
