import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  const [IsOpen,setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled,setIsScrolled] = useState(false);
    useEffect(()=>{
      const handleScroll=()=>{
        setIsScrolled(window.scrollY>50);
      };
      window.addEventListener("scroll",handleScroll);
      return () =>{
        window.removeEventListener("scroll",handleScroll);
      }
    },[]);
    //smooth scrol
    const handleMenuClick = (sectionId) => {
  setActiveSection(sectionId);
  setIsOpen(false);

  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

    const menuItems=[
        { id:"about" ,label:"About"},
        { id:"skills" ,label:"Skills"},
        { id:"experience" ,label:"Experience"},
        { id:"work" ,label:"Work"},
        { id:"education" ,label:"Education"}
    ]
  return (
    <nav className={`fixed top-0 z-50 w-full transition duration-300 px-[7vw] md:px-[7vw] lg:px-[7vw] ${isScrolled ?"bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className='py-5 justify-between item-center flex'>
            <div className=' font-bold text-xl text-white'>
                <span className='text-[#8245ec]'>&lt;</span>
                <span className='text-white'>Sameer</span>
                <span className='text-[#8245ec]'>/</span>
                <span className='text-[#8245ec]'>&gt;</span>
            </div>
            <ul className=' hidden space-x-6 text-white md:flex'>
  {menuItems.map((item) => (
    <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] transition ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
      <button className='hover:text-[#8245ec] transition' onClick={() => handleMenuClick(item.id)}>
        {item.label}
      </button>
    </li>
  ))}
</ul>
<div className='hidden md:flex space-x-4'>
  <a href="https://github.com/Sameer2501" target="_blank" rel="noopener noreferrer">
    <FaSquareGithub className='text-white hover:text-[#8245ec] transition text-xl' />
  </a>
  <a href="https://www.linkedin.com/in/sameer-ansari-00ba08334/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className='text-white  hover:text-[#8245ec] transition text-xl' />
  </a>
</div>
<div className='md:hidden'>
  {
    IsOpen ? (
      <FiX className='text-white text-2xl cursor-pointer' onClick={() => setIsOpen(false)} />
    ) : (
      <FaBars className='text-white text-2xl cursor-pointer' onClick={() => setIsOpen(true)} />
    )
  }
</div>


        </div>
        {IsOpen &&( <div className='absolute top-19 left-1/2 w-4/5 transform -translate-x-1/2 bg-[#050414] bg-opacity-90 backdrop-blur-md flex justify-center items-center text-white rounded-lg shadow-lg '>
          <ul className='flex flex-col items-center space-y-4 py-4 text-grey-300'>
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-white transition ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                <button className='hover:text-[#8245ec] transition' onClick={() => handleMenuClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-4 '>
          <a href="https://github.com/Sameer2501" target="_blank" rel="noopener noreferrer">
    <FaSquareGithub className='text-white hover:text-[#8245ec] transition text-xl' />
  </a>
  <a href="https://www.linkedin.com/in/sameer-ansari-00ba08334/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className='text-white  hover:text-[#8245ec] transition text-xl' />
  </a>

        </div>
          </ul>

        </div>)}
        

    </nav>
  )
}

export default Navbar