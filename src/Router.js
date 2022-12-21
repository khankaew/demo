import React from 'react'
import { Route, Routes } from 'react-router-dom'
// Pages ---
import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";


const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/page1" element={<Page1 />} />
    <Route path="/page2" element={<Page2 />} />
  </Routes>
)

export default Router
