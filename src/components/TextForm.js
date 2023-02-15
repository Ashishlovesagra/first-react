import React,{useState} from "react";



export default function TextForm(props) {
    const handelupclick =(event)=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelloclick =(event)=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handelClearclick =(event)=>{
        let newText = "";
        setText(newText);
    }
    const handleSentanceChange = (event) => {
        const words = text.split(" ");
        const capitalizedWords = words.map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
        setText(capitalizedWords.join(" ")); 
    }
    // const handleCapitalizedChange = (event) => {
    //     const capitalizedText = text.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    //     .join(" ");
    //     setText(capitalizedText);
    // }
    const handleCopy = ()=>{
        let text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState('');
    return (
        <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'rgb(50, 49, 49)',color: props.mode==='dark'?'white':'black'}}></textarea> 
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handelupclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handelloclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleSentanceChange}>Convert to Sentance Case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleCapitalizedChange}>Convert to capitalized Text</button> */}
        <button className="btn btn-primary mx-2 my-2" onClick={handelClearclick}>Clear text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
    );
}
