import React from "react";
import "../App.css";
import {FaGithub } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
    return (
        <div class="container-2" >
          <div >
            <a class="icon" href="https;//github.com/divya-kallagunta" ><FaGithub/></a>
            <a class="icon" href="https://www.instagram.com/divya_kallagunta/" ><FaInstagram/></a>
            <a class="icon" href="https://linkedin.com/in/divya-kallagunta-3187b820b" ><FaLinkedin/></a>
            <a class="icon" href="#" ><FaFacebookF/></a>
            </div>
      </div>
    )
}