import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contact";
import Partners from "./pages/partners";
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
        </Routes>
      </main>
    </div>
  );
}

export default App;