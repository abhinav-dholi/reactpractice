import React, { useState } from "react";


export default function TextForm(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase());
        // console.log('upper case was clicked');
        props.showAlert("Converted to upper case", "success");
    }

    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value);
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        // console.log('lower case was clicked');
        props.showAlert("Converted to lower case", "success");
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("Cleared", "success");
    }
    
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        
        props.showAlert("Copied!", "success");
    }

    const handleSpaces =() =>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }

    // working with state in React 
    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1> {props.heading} </h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        value={text}
                        style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
                        rows="8"
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove extra spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
            </div>
        </>

    );
}
