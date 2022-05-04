import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputFeild';
import Preview from './components/Preview';

const App: React.FC = () => {
  const text = "Historically, the fundamental role of pharmacists as a healthcare practitioner was to check and distribute drugs to doctors for medication that had been prescribed to patients. In more modern times, pharmacists advise patients and health care providers on the selection, dosages, interactions, and side effects of medications, and act as a learned intermediary between a prescriber and a patient."
  const [paragraph, setParagraph] = useState<string>("Text")
  const [input, setInput] = useState<string>('')
  
  return (
    <div className='container'>
      <span className='heading'>Type Racer</span>
      <Preview paragraph={paragraph} input={input} />
      <InputField setInput={setInput}/>
    </div>
  );
};

export default App;
