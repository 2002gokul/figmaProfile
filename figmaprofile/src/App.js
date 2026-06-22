import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";



function App(){
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="./" element={Navbar}></Route>
      </Routes>
      <Sidebar/>
      <Routes>
        <Route path="./Sidebar"element={Sidebar}></Route>
      </Routes>
    </Router>

  );
}
export default App;