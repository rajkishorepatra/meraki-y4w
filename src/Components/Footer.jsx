import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin, FaSquareInstagram, FaTwitter, FaXTwitter } from 'react-icons/fa6'
import { TfiWorld } from 'react-icons/tfi'

const Footer = () => {
    return (
        <>
            <div className='bg-[#333] text-white py-10'>
                <div className="max-w-screen-lg px-5  mx-auto">
                    <div className='flex justify-between flex-wrap md:flex-nowrap'>
                        <div>Meraki</div>
                        <div className='text-white flex'>
                            <a href="https://www.facebook.com/Youth4WaterPlus" className='hover:text-theme-blue'><FaFacebook size={30} className='mx-2' /></a>
                            <a href="https://www.instagram.com/youth4waterplus" className='hover:text-theme-blue'><FaSquareInstagram size={30} className='mx-2' /></a>
                            <a href="https://x.com/Youth4WaterPlus" className='hover:text-theme-blue'><FaXTwitter size={30} className='mx-2' /></a>
                            <a href="https://www.linkedin.com/company/youth4water-plus?trk=feed_main-feed-card_feed-actor-name" className='hover:text-theme-blue'><FaLinkedin size={30} className='mx-2' /></a>
                            <a href="https://youth4water.org/" className='hover:text-theme-blue'><TfiWorld size={30} className='mx-2' /></a>
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