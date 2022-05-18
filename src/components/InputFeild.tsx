import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import "./styles.css";

interface props {
    handleOnChange: ChangeEventHandler;
    handleKeyDown: KeyboardEventHandler;
    input: string;
    }

const InputField: React.FC<props> = ({ handleKeyDown, handleOnChange, input }) => {
    return (
        <form className='input'>
            <input value={input} type='text' placeholder="Type Here" onKeyDown={handleKeyDown} onChange={handleOnChange}/>           
        </form>
    );
};

export default InputField;

