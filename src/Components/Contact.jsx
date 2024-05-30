import React from "react";
import './contact.css'
import { FaAddressBook } from "react-icons/fa";
import { IoCall, IoLocation } from "react-icons/io5";
import { GiMailbox } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import Heading from "./Heading";

const Contact = () => {
  return (
    <>
    <div className="startupbg">
        <Heading start='Contact' end='us' color={'blue'}/>
      <div className="container mx-auto pb-28 pt-10 max-w-screen-xl">
        <div className="form">
          <div className="contact-info my-10">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
               <IoLocation/>&nbsp; &nbsp;
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
              <IoIosMail /> &nbsp; &nbsp;
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
              <IoCall />&nbsp;&nbsp;
                <p>123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html" autocomplete="off" className=" my-10">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label for="">Name</label>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label for="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label for="">Message</label>
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
