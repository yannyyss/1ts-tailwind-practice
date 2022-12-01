import React from 'react'

const Button = ({color, onClick, children}) => {

    const currentColor = color === 'primary' ? 'bg-blue-900' : 'bg-blue-200'

    return (
        <button onClick={onClick} className={`${currentColor} dark:bg-french-rose-300 rounded text-white px-4 py-2 shadow-md focus:ring hover:bg-white hover:text-blue-900 active:transform active:translate-y-1 transition-all`}>
        {children}
        </button>
    )
}

export default Button