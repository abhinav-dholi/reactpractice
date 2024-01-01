import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  // const toggleMode = () => setMode(mode === 'dark'? 'light' : 'dark');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#05093b'
      document.title = "TextUtils - Dark Mode"
      showAlert("This is the Dark Mode","success")
      // setInterval(() => {
      //   document.title = "TextUtils is amazing mode" 
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install TextUtils is amazing mode" 
      // }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = "TextUtils - Light Mode"
      showAlert("This is the Light Mode","success")
    }
  }

  return (
    <>
    <Router>

      {/* <Navbar title = "TextUtils" aboutText = "About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element = {<About mode = {mode}/>}>
            
          </Route>
          <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading="Enter the text to analyse" mode={mode} />}>
          
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
