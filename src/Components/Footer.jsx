import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaLinkedin, FaSquareInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
    <div className='bg-[#333] text-white py-10'>
        <div className="max-w-screen-lg px-5  mx-auto">
        <div className='flex justify-between flex-wrap md:flex-nowrap'>
            <div>Logos</div>
            <div className='text-white flex'>
                <a href="#" className='hover:text-theme-blue'><FaFacebook size={30} className='mx-2'/></a>
                <a href="#" className='hover:text-theme-blue'><FaSquareInstagram  size={30} className='mx-2'/></a>
                <a href="#" className='hover:text-theme-blue'><FaTwitter  size={30} className='mx-2'/></a>
                <a href="#" className='hover:text-theme-blue'><FaLinkedin size={30} className='mx-2'/></a>
            </div>
        </div>
        <div className="flex justify-between mt-5 flex-wrap md:flex-nowrap">
            <div>© 2024 Youth4Water Plus. All rights reserved.</div>
            <div className='flex mt-2 md:mt-0'>
                <a href="#">Privacy Policy</a>&nbsp;|&nbsp;<a href='#'>Terms and Conditions</a>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer