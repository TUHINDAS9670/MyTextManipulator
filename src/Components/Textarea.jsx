import React, { useState } from 'react'

export default function Textarea(props) {

  const changeUpperUponClick = () => {
    setText(text.toUpperCase());
    props.changeAlert("Your text has been changed to Uppercase");
  }
  const changeLowerUponClick = () => {
    setText(text.toLowerCase());
    props.changeAlert("Your text has been changed to Lowercase");

  }
  const clearText = () => {
    setText("");
    props.changeAlert("Textarea is Cleared");

  }
  const copyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.changeAlert("Text is copied to clipboard");

  }
  const removeExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.changeAlert("Extra space has been cleared from the text");

  }
  const inTimeofChange = (event) => {
    console.log("Change is done");
    setText(event.target.value);
  }
  //function for calculating length of the word
  const lengthOfWord=()=>{
    let count =0;
    for(let i=0;i<text.split("").length;i++){
      if(text.split(" "[i]=="")){
        count++;
      }
    } 
    return text.split("").length-count;
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" rows="9" value={text} onChange={inTimeofChange} style={{backgroundColor:props.mode==='dark'?'#212529':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
        <input className="btn btn-primary" type="submit" value="Uppercase" onClick={changeUpperUponClick} />
        <input className="btn btn-primary m-3" type="submit" value="Lowercase" onClick={changeLowerUponClick} />
        
        <input className="btn btn-primary m-3" type="submit" value="Remove Extra Space" onClick={removeExtraSpace} />
        <input className="btn btn-primary" type="submit" value="Clear Text" onClick={clearText} />
      </div>
      <div style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Text Summary : </h3>
        <p> Word Count : {text.split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters</p>
        <p >Read Time : {0.008 * text.length} minutes</p>
        <h3>Preview</h3>
        <p>{text}</p>
        <input className="btn btn-primary" type="submit" value="Copy Text To Clipboard" onClick={copyText}/>
      </div>
    </>
  )
}
