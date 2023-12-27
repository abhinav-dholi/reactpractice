import React, { useState } from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        // console.log('upper case was clicked');
    }

    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value);
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        // console.log('lower case was clicked');
    }
    const handleClearClick = () => {
        setText('');
    }

    // working with state in React 
    const [text, setText] = useState('');

    return (
        <>
            <div className="container">

                <h1> {props.heading} </h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        value={text}
                        rows="8"
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length } minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>

    );
}
