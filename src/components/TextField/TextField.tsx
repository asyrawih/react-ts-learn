// @flow 
import React, { FormEvent, useState } from 'react';
import "./TextField.css"

interface Person {
    name?: string,
    onChange?: () => void,
}


export const TextField: React.FC<Person> = () => {

    const [name, setName] = useState("");

    let handleInput = (e: FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    return (
        <div className="TextField">
            <label htmlFor="name">Name</label>
            <input type="text" className="input-field" onChange={handleInput} />
            <span className="title">{name}</span>
           
        </div>
    );
}