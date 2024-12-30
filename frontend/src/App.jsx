import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Lockscreen from "./Pages/Lockscreen";
import Desktop from "./Pages/Desktop"
import BlueScreen from "./Pages/Bluescreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lockscreen />} />
        <Route path="/bluescreen" element={<BlueScreen />} />
        <Route path="/desktop" element={<Desktop />} />
      </Routes>
    </Router>
  )
}

export default App;