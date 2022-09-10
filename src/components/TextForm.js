import React, { useState } from 'react'

export default function TextForm(props) {

    const convertToU = () => {
        settext(text.toUpperCase())
    }

    const convertToL = () => {
        settext(text.toLowerCase())
    }

    const TextCopy = () => {
        let textbox = document.getElementById("myBox")
        textbox.select()
        navigator.clipboard.writeText(textbox.value);
    }

    const handOnChange = (event) => {
        settext(event.target.value)
    }
    const clear = () => {
        settext("")
    }

    const [text, settext] = useState('');

    return (
        <div className="container my-3">
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handOnChange} rows="8"></textarea>
                </div>
                <button type="button" className=" btn btn-success my-3" onClick={clear}>clear</button>
                <button type="button" className="btn btn-primary mx-3 my-3" onClick={convertToU}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary my-3" onClick={convertToL}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-3 my-3" onClick={TextCopy}>Text Copy</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}