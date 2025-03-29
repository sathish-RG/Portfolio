import React from 'react'
import { saveAs } from 'file-saver';
import Sathish_resume from '../assets/sathish_resume.pdf'
import {HashLink as Link} from "react-router-hash-link";

const MainPage = () => {
  const handleDownload = () => {
    saveAs(Sathish_resume, 'sathish_resume.pdf');
  };
  return (
    <div>
  {/* Home page content goes here */}
    <section id='home' className=' h-[520px] bg-blue-200 flex flex-row justify-center items-center'>
    <div>
      <h1 className=' text-3xl font-bold text-blue-950'>I'm Sathish</h1><br></br> 
      <h1 className=' text-2xl text-blue-600'>a Full-MERN Stack Developer</h1>
      <div className=' flex flex-row gap-5'>
      <button
      onClick={handleDownload}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded inline-flex items-center transition-colors duration-300 p-3 mt-5 hover:cursor-pointer"
    >
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Resume
    </button>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded inline-flex items-center transition-colors duration-300 p-3 mt-5 hover:cursor-pointer w-26"><Link smooth to="#contact">Contact</Link></button></div>
    <div className=' flex flex-row gap-3'>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" className=' mt-10 bg-gray-400 p-2 rounded-md transition-colors duration-300 hover:bg-blue-700 text-blue-950'>
    <a href='https://github.com/sathish-RG'>
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></a>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" className=' mt-10 bg-gray-400 p-2 rounded-md transition-colors duration-300 hover:bg-blue-700 text-blue-950'>
 <a href='https://www.linkedin.com/in/sathish-rg/'>
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></a>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16" className=' mt-10 bg-gray-400 p-2 rounded-md transition-colors duration-300 hover:bg-blue-700 text-blue-950 text-sm'>
 <a href='#contact'>
  <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765zM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873z"/></a>
</svg>
    </div>
    </div>
    </section>
  {/*About page content gose here */}  
    <section id='about' className=' h-[520px] bg-blue-950'>About</section>
  {/*Skills page content gose here */}
    <section id='skills' className=' h-[520px] bg-blue-950'>Skills</section>
  {/*Projects page content gose here */}
    <section id='projects' className=' h-[520px] bg-blue-950'>Projects</section>
  {/*Contacts page content gose here */}    
    <section id='contact' className=' h-[520px] bg-blue-950'>Contact</section>
    </div>
  )
}

export default MainPage