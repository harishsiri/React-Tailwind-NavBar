
import React, { useState } from 'react';
import logo from "./assets/tailwind logo.png"

function App() {
  const [isMenuOpen, setIsMenuOpen]  = useState(false);
  return (
    <div className='w-full h-full absolute bg-gradiant-to-r from-blue-400 to-emerald-400'>
      <header className='flex justify-between items-center text-black py-6 px-9 md:px-32 bg-white drop-shadow-md '>
        <a href='#'>
          <img src={logo} className='w-32 hover:scale-105 transition-all'></img>
        </a>
        <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Home</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Products</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Contact us</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Explore</li>
        </ul>
        <div className='relative hidden md:flex items-center justify-center gap-3'>
          <i className='bx bx-search absolute left-3 text-2xl text-grey-500'></i>
          <input type='text' placeholder='search...' className='py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 
          foucus:outline-sky-100'></input>
        </div>
        <i className='bx bx-menu lg:hidden block text-5xl cursor-pointer'
        onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center
        gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"} `} 
        
        style={{transition: "transfrom 0.3s ease, opacity 0.3s ease"}}>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Home</li>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Products</li>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Contact Us</li>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Explore</li>
        </div>
      </header>
    </div>
  )
}

export default App
