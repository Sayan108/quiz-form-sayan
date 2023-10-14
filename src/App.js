import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contact";
import Partners from "./pages/partners";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;