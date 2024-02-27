// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
// import About from "./Components/About";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "light";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
    {/* // <BrowserRouter> */}
      <Navbar title="Bootstrap" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" mode={mode}>
        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Textform
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
              
            }
          />
        </Routes> */}
        {/* if u r noy using router then */}
        <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      </div>
    {/* </BrowserRouter> */}
    
  </>
  );
}


export default App;
