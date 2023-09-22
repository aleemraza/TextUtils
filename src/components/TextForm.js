import React, {useState} from 'react'
{/*rfs*/}
export default function TextForm(props) {
  const handelOnchange = (event)=>{
    console.log("click me")
    setText(event.target.value)
  }
  const handelUpclick = ()=>{
    let textUpper = text.toUpperCase();
    setText(textUpper)
    props.showAlert("Converted to Uppercase","success")  
  }
  const handellowclick = ()=>{
    let textUpper = text.toLowerCase();
    setText(textUpper) 
    props.showAlert("Converted to LowerCase","success")  
  }
  const handelclearclick = ()=>{
    let textUpper = " ";
    setText(textUpper)
    props.showAlert("Text was cleared","success")   
  }
  const handelCopy = () =>{
    let text =document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copy to Clipboard","success") 
  }
  
  const [text,setText] = useState("Enter text here");
  return (
    <>
  <div>
    <div className='container' style={{color:props.mode==="dark"?"white":'black'}}>
      <h4>{props.heading}</h4>
    <div className="mb-3">
    <textarea className="form-control" value= {text} onChange={handelOnchange} id="myBox" rows="8" 
    style={{background:props.mode==="dark"? "gray":"light" , color:props.mode==="dark"?"white":'black'}}
    ></textarea>
    </div>
    <button className="btn btn-primary mb-3 mx-3" onClick={handelUpclick}>Uppercase</button>
    <button className="btn btn-primary mb-3 mx-3" onClick={handellowclick}>LowerCase</button>
    <button className="btn btn-primary mb-3 mx-3" onClick={handelclearclick}>Clear</button>
    <button className="btn btn-primary mb-3 mx-3" onClick={handelCopy}>Copy</button>
    </div>
    <div className='container' style={{color:props.mode==="dark"?"white":'black'}}>
      <p>{text.split(" ").length}word and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} read in mintues </p>
      <h2>Previews</h2>
      <p>{text}</p>
    </div>
  </div>
  </>
  )
} 
