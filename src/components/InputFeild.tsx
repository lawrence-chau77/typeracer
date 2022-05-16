import React, { KeyboardEventHandler } from "react";
import "./styles.css";

interface props {
    setInput: React.Dispatch<React.SetStateAction<string>>;
    handleKeyDown: KeyboardEventHandler;
    input: string;
    }

const InputField: React.FC<props> = ({ setInput, handleKeyDown, input }) => {
    return (
        <form className='input'>
            <input value={input} type='text' placeholder="Type Here" onKeyDown={handleKeyDown} onChange={(e) => {setInput(e.target.value)}}/>           
        </form>
    );
};

export default InputField;

