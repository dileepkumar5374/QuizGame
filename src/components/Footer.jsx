import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

function Footer() {
  return (
    <div className="main-footer">
      <div className="icon-arrengement ">
        <li className="icon-flex fb">
          <BsFacebook />
        </li>
        <li className="icon-flex insta">
          <BsInstagram />
        </li>
        <li className="icon-flex utube">
          <BsYoutube />
        </li>
        <li className="icon-flex twitter">
          <BsTwitter />
        </li>
        <li className="icon-flex linkedin">
          <GrLinkedinOption />
        </li>
      </div>
      <div className="footer-list">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>CONTACT US</li>
        <li>BLOG</li>
      </div>
      <div className="footer-list two">
        <li>GALLERY</li>
        <li>PRODUCT</li>
        <li>NEW</li>
        <li>MEDIA</li>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Footer;
