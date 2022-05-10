import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputFeild';
import Preview from './components/Preview';

const App: React.FC = () => {
  const text = "many each during hand tell too time through not show here while same form"
  const [paragraph, setParagraph] = useState<string>(text)
  const [input, setInput] = useState<string>('')
  
  return (
    <div className='container'>
      <span className='heading'>Type Racer</span>
      <Preview paragraph={paragraph} input={input} />
      <InputField setInput={setInput} setParagraph={setParagraph} paragraph={paragraph}/>
    </div>
  );
};

export default App;
