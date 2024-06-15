import React,{ useState } from 'react'


export default function Textform(props) {
    const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleCaplizedClick =()=>{
      let words = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
      setText(words);
      props.showAlert("First Letter Capitalize!","success");
  }
    const handleClearClick =()=>{
      let newText='';
      setText(newText);
      props.showAlert("Text got cleared!","success");
  }
    const handleLoClick =()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!","success");
  }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("new text");//Correct way to change the text
  return (
<>
    <div className="container" style={{color:props.mode==='dark'?'white':'rgb(4 15 74)'}}>
      <h1 className='mb-4'>{props.heading}</h1>
         <div className="mb-2">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#113369':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"/>
         </div>
       <button disabled={text.length===0} button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button disabled={text.length===0} button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
       <button disabled={text.length===0} button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Click to clear</button>
       <button disabled={text.length===0} button className="btn btn-primary mx-2 my-1" onClick={handleCaplizedClick}>Caplized Case</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
       <h2>Your text Summary</h2>
       <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
       <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
</>
  )
}
