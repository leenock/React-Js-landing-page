import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homepage";
import About from "./pages/AboutUs/About";
import Practice from "./pages/practice-area/Practice";


function App() {
  return (
    <div className="App">
        <Router>
            <div>
             <Navbar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/practice-area" element={<Practice />}></Route>
             </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;
