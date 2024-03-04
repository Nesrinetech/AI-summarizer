import React from "react";
import { logo } from "../assets";
import { ComputersCanvas } from "./canvas";
import "../App.css";   // Make sure to import your CSS file

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='logo' className='w-28 object-contain' />
        
      </nav>

      <h1 className='head_text'>
        <span className='purple_gradient'>Nesrine's AI summarizer</span><br></br>
        <br className='max-md:hidden' />
        <span className='purple_gradient'>Your tool for quick summaries.</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading! Just paste an article or webpage link, and let the app create concise summaries for quick understanding.
      </h2>

      <ComputersCanvas />
    </header>
  );
};

export default Hero;
