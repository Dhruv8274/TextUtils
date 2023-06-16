import React, { useState } from "react";

export default function About() {
    const[myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'#f7daa4',
        border:'1px solid rgb(243, 210, 166)'
    })
    const[btnText,setBtnText]=useState("Enable Dark Mode")
    const toggleStyle=()=>{
      if(myStyle.color ==='black'){
        setMyStyle({
          color:'#f7c058',
          backgroundColor:'black',
        })
        setBtnText("Enable Light Mode");
      }
      else{
        setMyStyle({
          color:'black',
          backgroundColor:'#f7daa4',
          border:'1px solid black'
        })
        setBtnText("Enable Dark Mode");
      }
    }
  return (
    <div className="container" style={myStyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About Our Site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  style={myStyle}>
              <strong>This is our site which is named TextUtils.</strong> This site is basically used For arranging the text 
              either in the lower case or upper case . This site will also help in counting the words and alphabets in the 
              whole text. in future we will be going to update this site and bring more feature like converting to camel case ,
              Alternative lower and upper case converting,etc. This site will going to help in our day to day life.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Description
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils is a simple and user-friendly text manipulation 
                tool built with React. It allows you to easily convert text to uppercase, lowercase, and remove spaces.</strong>
                Text-Utils.com is described as a central repository of tools For helping with developer activities. It includes
                 tools such as For Formatting JSON, XML, HTML, CSS, JavaScript, multiple text tools such as to convert case,
                  remove accents, line breaks, extra space, also regular expressions tools For extracting elements from text such as IPs 
                  and e-mail addresses. And this is actually only a subset of what we have
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Why To Use TextUtils
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This site is made with the help of React , so it is fast, simple and easy to use </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button type="button" className="btn btn-primary" onClick={toggleStyle} mx-12 my-12>{btnText}</button>
      </div>
      
    </div>
  );
}
