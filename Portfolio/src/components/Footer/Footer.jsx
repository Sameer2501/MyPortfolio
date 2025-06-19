import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {

  return (
    <footer className="text-white py-3 px-[12vw] md:px-[7vw] lg:px-[20vw]">
    <h2 className="text-xl  text-center font-semibold text-purple-500">Sameer Ansari</h2>
    <div className='mt-3 py-7 flex justify-center items-center gap-4 text-xl text-gray-100'>
        <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"><FaFacebook className=' hover:text-purple-500'/></a>
        <a href="https://www.twitter.com/" target='_blank' rel="noopener noreferrer"><FaTwitter className=' hover:text-purple-500'/></a>
        <a href="https://www.linkedin.com/in/sameer-ansari-00ba08334/" target='_blank' rel="noopener noreferrer"><FaLinkedin className=' hover:text-purple-500'/></a>
        <a href="https://github.com/Sameer2501" target='_blank' rel="noopener noreferrer"><FaGithub className=' hover:text-purple-500'/></a>
    </div>
    <p className='text-gray-400 text-center'>© 2025 Sameer Ansari. All rights reserved.</p>

    </footer>
  )
}

export default Footer