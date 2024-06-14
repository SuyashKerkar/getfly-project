import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home"; 
import Application from "./components/pages/Application";
import Pastdrives from "./components/pages/Pastdrives";
import FAQ from "./components/pages/FAQ";
import Notification from "./components/pages/Notification";
import "./App.css"
import Main from "./components/sections/Main";
import Footer from "./components/Footer";





function App() {

  return (
    <div className = "App">
      <Navbar />
      <Routes>
      <Route path= "/" element = {<Home/>}/>
        <Route path= "/home" element = {<Home/>}/>
        <Route path= "/notifications" element = {<Notification/>}/>
        <Route path= "/FAQ" element = {<FAQ/>}/>
        <Route path= "/pastdrives" element = {<Pastdrives/>}/>
        <Route path= "/applications" element = {<Application/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
