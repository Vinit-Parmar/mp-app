import React, {useState} from 'react'
// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase.","success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase.","success")
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared.","success")
    }
    const handleCapClick = ()=>{
        let newText = text.toLowerCase().split(' ').map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        setText(newText);
        props.showAlert("First letter of each word capitalized.","success")
    }
    const handleCopy = ()=>{
        let text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied.","success")
    }
    const handleExtraSpaces = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("ExtraSpaces has been removed.","success")
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    
    const [text, setText] = useState('');
    
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="MyBox" className="form-label"></label>
        <textarea className="form-control my-2" value={text} onChange={handleOnChange} id="MyBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleCapClick}>Caplitalized Case</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
    
  )
}
