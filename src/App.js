import React from 'react';
import { Route, Router, Routes } from "react-router-dom";
import NavBar from "./Components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contact";
import Partners from "./pages/partners";
import Pagenotfound from "./pages/pageNotFound";
export const routeAppPath = "/quiz-form-sayan";
function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path={routeAppPath + "/"} element={<Home />} />
          <Route path={routeAppPath + "/about"} element={<About />} />
          <Route path={routeAppPath + "/partners"} element={<Partners />} />
          <Route path={routeAppPath + "/contacts"} element={<Contacts />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;