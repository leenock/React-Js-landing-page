import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Homepage";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
              <Routes>
                <Route path="/" element={<Home />}></Route>
             </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;
