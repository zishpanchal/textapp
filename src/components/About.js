import React from 'react'

export default function About(props) {
  return (
    <div className={`card m-5 p-5 rounded text-bg-${props.mode === 'light'? 'light':'dark'}`}>
            <div className=" mx-auto text-center w-50">
            <h1 className="card-title">About</h1>
            <p className="lead card-text">Welcome to Text App, a React.js powered text utility by Zishan Panchal. Effortlessly copy, trim extra space, or clear all text with a single click. This sleek app prioritizes simplicity and efficiency, adapting seamlessly across devices. Elevate your text processing with Text App—innovation at your fingertips!</p>
            </div>
    </div>
        
    
  )
}
