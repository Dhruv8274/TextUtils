// import React from 'react'
import React,{useState} from 'react'
export default function TextForms(props) {
    const[text,setText]=useState('Enter The Text Here');
    const handleUpClick=()=>{
        console.log("Upper Case Was Clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick=()=>{
        console.log("Lower Case Was Clicked "+text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    
  return (
    <>
    <div>
      <div className="mb-3" style={{color:props.mode === 'light'?'black':'white'}}>
      <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:props.mode === 'light'?'black':'white'}}><h1>Enter Your Text</h1></label>
      <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'#fff6e6':'#67573ee2'}} id="exampleFormControlTextarea1" rows="12"></textarea>
      </div>
      <div className="button" >     
      <button className="btn btn-primary" onClick={handleUpClick} style={{backgroundColor:props.mode==='light'?'blue':'black'}} >Convert to Upper Case</button>
      <button className="btn btn-primary my-2" onClick={handleLowerClick} style={{backgroundColor:props.mode==='light'?'blue':'black'}}>Convert to Lower Case</button>
      </div>
    </div>
    <div className="container" style={{color:props.mode === 'light'?'black':'white'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Character</p>
    </div>
    </>
  );
}
  // style={{backgroundColor: props.mode === 'light'?'':'cream'}}