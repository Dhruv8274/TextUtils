import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react'
import Footar from './components/Footar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode === 'dark'){
      setMode ('light');
      document.body.style.backgroundColor='#f8e6c5';
    }
    else{
      setMode ('dark');
      document.body.style.backgroundColor='#383125';
    }
  }
  return (
  <>
  <Router>
  <Navbar title = "TextUtils" home ="Home" mode={mode} toggleMode={toggleMode}/>
  
  <div className = "container my-3">
       <Routes>
          <Route exact path="/about"
            element={<About />}>
          </Route>
          <Route exact path="/"
            element={<TextForms mode={mode}  />}>
          </Route>
        </Routes>
  </div>
  <Footar mode={mode}/>
  </Router>  
  </>
  );
} 
export default App;
