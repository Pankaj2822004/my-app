import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [bluemode, setBlueMode] = useState("light");
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
      document.title = "Textutills - darkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutills - lightMode";
    }
  };

  const toggleBlueMode = () => {
    if (bluemode === "light") {
      setBlueMode("blue");
      document.body.style.backgroundColor = "blue";
      showAlert("Blue mode has been enabled", "success");
    } else {
      setBlueMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar
        title="MYWEBS"
        nav="Home"
        mode={mode}
        bluemode={bluemode}
        toggleBlueMode={toggleBlueMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <Textform
                heading="Enter the text to analyze below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          {/* <Route path="/About" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
