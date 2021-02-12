import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
    <a href="https://www.youtube.com/c/villagerant"
      className="youtube social">
      <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>
    <a href="https://www.facebook.com/villagerant"
       className="facebook social">
       <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a href="https://www.twitter.com/villagerant" className="twitter social">
       <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a href="https://www.instagram.com/villagerant"
       className="instagram social">
    <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>

    <style jsx>{`
    .social-container {
        background: transparent;
        padding: 25px 50px;
        align-items:center;
        
      }
    a.social {
        margin: 2rem;
        transition: transform 250ms;
        display: flex;
        align-items:center;
      }
    a.social:hover {
        transform: translateY(-2px);
      }
     a.youtube {
        color: #fc1300;
        box-shadow: 1px 2px 10px black;
        border-radius:15px;
      }
      
      a.facebook {
        color: #0589f7;
        box-shadow: 1px 2px 10px  black;
        border-radius:25px;
      }
      
      a.twitter {
        color: #49a1eb;
        box-shadow: 1px 2px 10px black;
        border-radius:25px;
       
      }
      
      a.instagram {
        color: #e80025;
        box-shadow: 1px 2px 10px black;
        border-radius:15px;
      }
      @media(max-width:768px){
        a.social {
          display:flex;
        }
      }
    
    `}</style>
</div>
  );
}