// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./index.css"
import Profile from "./Pages/Profile";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route - Home */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile  />} />

        {/* Other routes */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}

        {/* Catch-all (404) */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
