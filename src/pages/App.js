import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Orchestra from "./Orchestra";
import Musicians from "./Musicians";
import More from "./More";


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route exact={"true"} path='/' element={<Home />} />
        <Route path='/orchestra' element={<Orchestra />} />
        <Route path='/musicians' element={<Musicians />} />
        <Route path='/album' element={<More />} />
        {/* <Route path='/test' component={Scroll} /> */}
      </Routes>
    </>
  );
}

export default App;
