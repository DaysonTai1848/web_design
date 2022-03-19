// This is a react functional component 
// shortcut: rafce for initialization

// what is useState?
import React from 'react';

import { Brand, CTA, Navbar } from "./components";
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";

import "./App.css";

// Use Alt+Click to navigate to certain code

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App