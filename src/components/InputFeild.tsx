import React from "react";
import "./styles.css";

interface props {
    setInput: React.Dispatch<React.SetStateAction<string>>;
    }

const InputField: React.FC<props> = ({ setInput }) => {
    return (
        <form className='input'>
            <input type='text' placeholder="Type Here" onChange={(e) => setInput(e.target.value)}/>
        </form>
    );
};

export default InputField;

