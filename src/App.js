import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      // document.title = "MYWEBS - darkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "MYWEBS - lightMode";
    }
  };


  return (
    <>
      {/* <Router> */}
        <Navbar
          title="MYWEBS"
          nav="Home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route
              path="/"
              element={ */}
                <Textform
                  heading="MYWEBS - Word counter , character counter , Remove Extra Spaces , clear text , copy text"
                  mode={mode}
                  showAlert={showAlert}
                />
              {/* /* 
            />
            <Route path="/About" element={<About mode={mode}/>} />
          </Routes>  */}
         </div> 
       {/* </Router>  */}
    </>
  );
}

export default App;
