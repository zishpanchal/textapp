import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Type here...');
  const handleOnchange = (event)=>setText(event.target.value) ;
  
  const clearExtraSpace = () => setText(text.replace(/\s+/g,' ').trim());
  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const clearText = ()=>setText('');
    return (
    <div className={`container form-group text-${props.mode === 'light'? 'dark':'light'}`}>
    <textarea className="form-control mt-5" id="myBox" rows="8" value={text} onChange={handleOnchange}></textarea>
    <div className='d-flex flex-row'>
        <div><button type="button" className={`btn btn-${props.mode === 'light'? 'dark':'light'} my-3`} onClick={handleCopy}>Copy text</button></div>
        <div><button type="button" className={`btn btn-${props.mode === 'light'? 'dark':'light'} m-3`} onClick={clearExtraSpace}>Clear extra spaces</button></div>
        <div><button type="button" className={`btn btn-${props.mode === 'light'? 'dark':'light'} my-3`} onClick={clearText}>Clear all</button></div>
        <div className='my-3 p-2'>{`You have `+(text ? (text.match(/\S+/g) ? text.match(/\S+/g).length: 0):0) +` words`}</div>
    </div>  
  </div>
  )
}
