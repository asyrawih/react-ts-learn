import React from 'react'
import "./Button.css"

type Props = {
    name?: string,
    onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

export const Button: React.FC<Props> = ({ name, onClick }) => {
    return (
        <div className="button">
            <button className="btn" onClick={onClick} >{name}</button>
        </div>
    );
}