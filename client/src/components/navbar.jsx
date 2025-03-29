import React from "react";
import { useState } from "react";
import {HashLink as Link} from "react-router-hash-link";

const Navbar = () => {
  const[isDropdownOpen, setIsDropdownOpen]=useState(false);
  const handdleDropdownToggle=()=>{
    setIsDropdownOpen(!isDropdownOpen);
  }
  return (
    <div className="sticky top-0 z-10">
    <nav className=" flex flex-row justify-between p-5 text-xl font-bold bg-gray-700 text-white ">
      <ul>
        <li className=" absolute"><Link smooth to="#home">Sathish R</Link></li>
      </ul>
      <ul className=" lg:flex lg:flex-row flex-col justify-between items-center gap-10 pr-10 hidden md:hidden lg:visible">
        <li className=" h-8 hover:border-b-3"><Link smooth to="#home">Home</Link></li>
        <li className=" h-8 hover:border-b-3"><Link smooth to="#about">About</Link></li>
        <li className=" h-8 hover:border-b-3"><Link smooth to="#skills">Skills</Link></li>
        <li className=" h-8 hover:border-b-3"><Link smooth to="#projects">Projects</Link></li>
        <li className=" h-8 hover:border-b-3"><Link smooth to="#contact">Contact</Link></li>
      </ul>
      <button className="flex flex-row visible lg:hidden" onClick={handdleDropdownToggle}>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="40" 
      height="30" 
      fill="currentColor" 
      viewBox="0 0 16 16" 
      className=" sm:visible md:visible lg:invisible"
    >
      <path 
        fillRule="evenodd" 
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  </button>

  {isDropdownOpen &&(<ul className=" absolute gap-10 lg:hidden bg-gray-600 top-16 right-5 p-1 rounded-md w-42">
        <li className=" flex justify-center p-2 hover:bg-gray-500 rounded-md right-0"><Link smooth to="#home">Home</Link></li>
        <li className=" flex justify-center p-2 hover:bg-gray-500 rounded-md right-0"><Link smooth to="#about">About</Link></li>
        <li className=" flex justify-center p-2 hover:bg-gray-500 rounded-md right-0"><Link smooth to="#skills">Skills</Link></li>
        <li className=" flex justify-center p-2 hover:bg-gray-500 rounded-md right-0"><Link smooth to="#projects">Projects</Link></li>
        <li className=" flex justify-center p-2 hover:bg-gray-500 rounded-md right-0"><Link smooth to="#contact">Contact</Link></li>
      </ul>)}
    </nav>
    </div>
  );
};

export default Navbar;
