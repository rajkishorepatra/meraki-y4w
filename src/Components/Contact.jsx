import React, { useRef } from "react";
import './contact.css'
import { FaAddressBook, FaFacebook } from "react-icons/fa";
import { IoCall, IoLocation } from "react-icons/io5";
import { GiMailbox } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import Heading from "./Heading";
import Swal from "sweetalert2";
import { FaLinkedin, FaSquareInstagram, FaTwitter, FaXTwitter } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";

const Contact = () => {
  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxQhEQVisR9qr7uGqAsvigj0clN_ww6KAzXVJRXYwWQJUO--aiTnM2dJCj1yoWPdRYZ/exec";
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have successfully registered with us. Thank you",
        });
      })
      .catch((err) => console.log(err));
    formRef.current.reset();
  };


  return (
    <>
      <div className="startupbg" id="contact">
        <Heading start='Contact' end='us' color={'blue'} />
        <div className="container mx-auto pb-28 pt-10 max-w-screen-xl">
          <div className="form">
            <div className="contact-info my-10">
              <h3 className="title">Let's get in touch</h3>
              <p className="text">
                Our mission is to empower startups to address critical issues of Water, Sanitation, Hygiene, and Climate Change
              </p>

              <div className="info">
                <div className="information">
                  <IoLocation />&nbsp; &nbsp;
                  <p>Khandagiri,751030</p>
                </div>
                <div className="information">
                  <IoIosMail /> &nbsp; &nbsp;
                  <p>s.dharmananda2020@gmail.com <br />payalpihu9861@gmail.com</p>
                </div>
                <div className="information">
                  <IoCall />&nbsp;&nbsp;
                  <p>+91 8249081144</p>
                </div>
              </div>

              <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/Youth4WaterPlus">
                    <FaFacebook size={25} className='mx-auto mt-1' />
                  </a>
                  <a href="https://x.com/Youth4WaterPlus">
                    <FaXTwitter size={25} className='mx-auto mt-1' />
                  </a>
                  <a href="https://www.instagram.com/youth4waterplus">
                    <FaSquareInstagram size={25} className='mx-auto mt-1' />
                  </a>
                  <a href="https://www.linkedin.com/company/youth4water-plus?trk=feed_main-feed-card_feed-actor-name">
                    <FaLinkedin size={25} className='mx-auto mt-1' />
                  </a>
                  <a href="https://youth4water.org/">
                    <TfiWorld size={25} className='mx-auto mt-1' />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>

              <form onSubmit={handleSubmit} ref={formRef} name="google-sheet" autocomplete="off" className=" my-10">
                <h3 className="title">Contact us</h3>
                <div className="input-container">
                  <input type="text" placeholder="Name" required name="name" className="input placeholder-white" />
                  {/* <label for="">Name</label> */}
                  <span>Name</span>
                </div>
                <div className="input-container">
                  <input type="email" placeholder="Email" required name="email" className="input placeholder-white" />
                  {/* <label for="">Email</label> */}
                  <span>Email</span>
                </div>
                <div className="input-container textarea">
                  <textarea name="message" placeholder="message" required className="input placeholder-white"></textarea>
                  {/* <label for="">Message</label> */}
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
