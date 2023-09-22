import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "gray";
      showAlert("Enable Dark mode","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Enable Light Mode","success")
    }

  }

  const showAlert = (message,type) =>{
    setalert({
      mesg : message,
      type : type,
    })
    setTimeout(() => {
      setalert(null);
      
    }, 3000);

  }
  return (
    <>
  
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <TextForm heading="Enter the Text here to Analyze" mode={mode} showAlert={showAlert} />
   </>
  );
}


export default App;
