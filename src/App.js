
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [myStyle, setMyStyle] = useState('light');
 const modeToggle =()=> {
    if(myStyle === 'dark'){
        setMyStyle('light');
        document.body.style.backgroundColor = '#f8f9fa';
        showAlert('warning', 'Dark mode has been disabled')
    }else{
        setMyStyle('dark');
        document.body.style.backgroundColor = '#212529';
        showAlert('success', 'Dark mode has been enabled')
    }
}  
const [alert, setAlert] = useState({})
const showAlert = function(type, msg){
  setAlert({
    type: type,
    msg: msg
  })
  setTimeout(() => {
    setAlert({})
  }, 1500);
}
  return (
<>

      <Navbar mode={myStyle} toggle={modeToggle}/>
      <Alert alert={alert}/>
      <TextForm mode={myStyle}/>
</>
  );
}

export default App;
