import React from "react";
import "./footer.scss";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
const {APP_BASE_URL_PUBLIC} = process.env;

const Footer = () => {
  return (
    <div id="bwm-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="#" className="logo">

              <div className="text-wrapper">
                <h4 id="logo-text">Book Worm</h4>
                <p id="logo-text">Book store</p>
              </div>
            </a>
            
            <div className="payment">
              <img src="/payment.png" alt="" />
            </div>
          </div>

          <div className="col-md-3">
            <h5 className="list-title">About Us</h5>
            <ul className="list about-us">
              <li>Phone: (48) 025023203</li>
              <li>Address: Ak47 Wasinton DC</li>
              <li>Fax: 089-0980-0989</li>
              <li>Email: bookwormstore@gmail.com</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5>Contact</h5>
            <ul className="list contact">
              <li>
                <BsFacebook />
                Facebook
              </li>
              <li>
                <MdEmail />
                Email
              </li>
              <li>
                <AiFillInstagram />
                Instagram
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Links</h5>
            <ul className="list links">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
