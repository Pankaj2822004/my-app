import React, { useState } from "react";

export default function Textform(props) {
 
  const handleUpClick = () => {
    console.log("uppercase log clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
   
  const handleDownClick = () => {
    console.log("Lowercase log clicked" + text);
    let newText = text.toLocaleLowerCase();
    // let newText=text.tri
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  
  const handleClearClick = () => {
    let newText = '' ;
    setText(newText)
    props.showAlert("Text will be cleared")
  };
  const handleCopy = () => {
    // console.log("uppercase log clicked" + text);
    var text = document.getElementById("mybox")
     text.select();
     navigator.clipboard.writeText(text.value) ;
     props.showAlert("Copied To Clipboard")
  };

  const handleExtraSpaces=()=>{
  let newtext= text.split(/[ ] + /) ;
  setText(newtext.join(" "))

  };
  
  const [text, setText] = useState(""); //  hooks state
  return (
    <div>
      <h2 style={{color: props.mode==='dark' ? 'white' : 'black'}}>{props.heading}</h2>
      <div className="my-4">
        <textarea
          className="form-control"
          style={{backgroundColor: props.mode==='dark' ? 'grey' : 'pink'}}
          id="mybox"
          value={text}
          onChange={handleOnChange}
          cols="90"
          rows="6"
        ></textarea>
      </div>
      <button className="btnbtnprimary my-3" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btnbtnprimary" onClick={handleDownClick}>
        Convert to Lowercase
      </button>
      <button className="btnbtnprimary" onClick={handleClearClick}>
        Clear text
      </button>
      <button className="btnbtnprimary" onClick={handleCopy}>
        Copy text
      </button>
      <button className="btnbtnprimary" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      
           <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h1>You text Summary</h1>
        <p> {text.split(" ").length} words {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2 >Preview</h2>
        <p > {text.length>0?text: " Enter something in the textarea to preview it"} </p>
      </div>
    </div>
  );
}
