import React, { KeyboardEventHandler } from "react";
import "./styles.css";

interface props {
    setInput: React.Dispatch<React.SetStateAction<string>>;
    handleKeyUp: KeyboardEventHandler;
    input: string;
    }

const InputField: React.FC<props> = ({ setInput, handleKeyUp, input }) => {
    return (
        <form className='input'>
            <input value={input} type='text' placeholder="Type Here" onKeyUp={handleKeyUp} onChange={(e) => {setInput(e.target.value)}}/>           
        </form>
    );
};

export default InputField;

