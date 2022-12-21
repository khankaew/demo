import React, { useState } from 'react';
import Menu from "../components/Menu";
import logo from "../logo.svg";

function Home() {

  return (
    <>
      <Menu />

      <h1>Home</h1>
      <img src={logo} alt="" />
    </>
  );
}

export default Home