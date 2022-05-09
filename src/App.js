import { useState } from "react";

import "./App.css";
import { Alert, Button, Snackbar, Typography } from "@mui/material";
import ButtonAppBar from "./components/ButtonAppBar";
import About from "./components/About/About";
import ContactMe from "./components/Contact/ContactMe";
import { Route, Routes } from "react-router-dom";
import Tutorials from "./components/Tutorials/Tutorials";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  console.log("hello")
  return (
    <div className="App">
      <ButtonAppBar />
      <Routes>
        <Route index element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
    </div>
  );
}

export default App;
