import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputFeild';
import Preview from './components/Preview';

const App: React.FC = () => {
  return (
    <div className='App'>
      <span className='heading'>Type Racer</span>
      <Preview/>
      <InputField/>
    </div>
  );
};

export default App;
