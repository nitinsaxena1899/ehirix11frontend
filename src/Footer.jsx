import React, { useEffect } from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, useNavigate } from "react-router-dom";
// import LOGO from './images/Logo.jpg'
// import LOGO from './images/LOGOtransparent.png'
import LOGO from "./images/newlogo.png";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Footer() {
  // useEffect(()=>{
  //   window.scrollTo(0, 0)
  // })

  return (
    <footer className="footer">
      <div className="foorter__firstDiv">
        <div className="foorter__firstDiv__first">
          <Link to={"/"}>
            <img className="foorter__firstDiv__first__logo" src={LOGO} />
          </Link>
          <p className="foorter__firstDiv__first__details">
            Ehirix is ​​primarily designed for Start-up, Non-profit
            organization,
          </p>
        </div>

        <div className="foorter__firstDiv__second__socialMedia">
          <FacebookIcon className="foorter__firstDiv__second__socialMedia__facebook" />
          <TwitterIcon className="foorter__firstDiv__second__socialMedia__twitter" />
          <InstagramIcon className="foorter__firstDiv__second__socialMedia__instagram" />
          <YouTubeIcon className="foorter__firstDiv__second__socialMedia__youtube" />
        </div>
      </div>

      <div className="foorter__secondDiv">
        <p className="footer__secondDiv__firstHeading">Explore</p>
        <div>

          <div className="socailMediaDiv">
          <KeyboardArrowRightIcon/>
        <Link to={"/"}>
          <p className="footer__secondDiv__heading">Home</p>
          </Link>
          </div>


          <div className="socailMediaDiv">
          <KeyboardArrowRightIcon/>
          <Link to={"/about"}>
          <p className="footer__secondDiv__heading">About Us</p>
          </Link>
          </div>

          <div className="socailMediaDiv">
          <KeyboardArrowRightIcon/>
          <Link to={"/hiringservices"}>
          <p className="footer__secondDiv__heading">Hirgin Services</p>
          </Link>
          </div>

          <div className="socailMediaDiv">
          <KeyboardArrowRightIcon/>
          <Link to={"/marketplaceservices"}>
          <p className="footer__secondDiv__heading">Marketplace Services</p>
          </Link>
          </div>

          <div className="socailMediaDiv">
          <KeyboardArrowRightIcon/>
          <Link to={"/contact"}>
          <p className="footer__secondDiv__heading">Contact Us</p>
          </Link>
          </div>

        </div>
      </div>

      <div className="foorter__thirdDiv">
        <p className="foorter__thirdDiv__heading">Contact</p>

        <div className="foorter__thirdDiv__first">
          <CallIcon className="foorter__thirdDiv__first__icon" />
          <p className="foorter__thirdDiv__first__detail">+91-9910679045</p>
        </div>

        <div className="foorter__thirdDiv__second">
          <EmailIcon className="foorter__thirdDiv__second__icon" />
          <p className="foorter__thirdDiv__second__detail">ehirix@gmail.com</p>
        </div>

        <div className="foorter__thirdDiv__third">
          <LocationOnIcon className="foorter__thirdDiv__third__icon" />
          <p className="foorter__thirdDiv__third__detail">
            Ehirix company address
          </p>
        </div>
        
      </div>

      <div className="footer__fifthDiv">
        <p className="footer__fifthDiv__heading">Request A CALLBACK</p>
        <input placeholder="Name" className="footer__fifthDiv__inputs" />
        <input placeholder="Email" className="footer__fifthDiv__inputs" />
        <input placeholder="Phone No" className="footer__fifthDiv__inputs" />
        <button>Submit</button>

      </div>
    </footer>
  );
}

export default Footer;

// <div className='foorter__fourthDiv'>
// <p className='foorter__fourthDiv__heading'>Support</p>
// <p className='foorter__fourthDiv__second__detail'>With enthusiastic employees and volunteers, we are ready to support you no matter any time.</p>
// <button className='foorter__fourthDiv__third__button' onClick={donate}>Donate</button>
// </div>
