
import { useState } from 'react';
import './App.css'
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import SuccessAlerts from './Components/SuccessAlerts';
// import Footer from './Components/Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Footer from './Components/Footer';
import Footer1 from './Components/Footer';

function App() {

  const [mode, setMode] = useState('light');
  const [darkModeText, setDarkModeText] = useState('dark')
  const [alert, setAlert] = useState(null);

  const changeAlert = (message) => {
    setAlert({ msg: message })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }
  const changeMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setDarkModeText('dark');
      document.body.style.backgroundColor = 'white';
      changeAlert("Dark mode disabled");
    }
    else {
      setMode('dark');
      setDarkModeText('light');
      document.body.style.backgroundColor = '#495057';
      changeAlert("Dark mode enabled");


    }
  }




  return (
    <>
      <Router>
        <Navbar Appname="MyTextManipulator" AboutusText="About US" mode={mode} darkModeText={darkModeText} changeMode={changeMode} />
        <div style={{ height: "60px" }}>
          <SuccessAlerts alerts={alert} />
        </div>

          <div className='container'>
        <Routes>
        <Route path="/About US" element={<About mode={mode} changeMode={changeMode}/>} />
        <Route path="/" element={<Textarea heading="Fastest online tool to manipulate your text for FREE!" mode={mode} changeAlert={changeAlert} />} />

          {/* <Route path="/">
            <div className='container' >
            
          </div> */}

          {/* </Route> */}
        </Routes>
          </div>
          {/* <Footer></Footer> */}
          <Footer1></Footer1>
      </Router>
    </>
  )
}

export default App;
