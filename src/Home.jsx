import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Home.css";
import HOMEGRAPHIC from "./images/homeGraphic.jpg";
import REGISTRATION2 from "./images/registration2.jpg";
import LISTINGSETUP from "./images/listingSetup.jpg";
// import ACCOUNTMANAGEMENT from './images/accountManagement.jpg'
import ACCOUNT from "./images/account.jpg";
import BRAND from "./images/brand.jpg";

import CARTICON from "./images/carticon.png";

import ImageSlider, { Slide } from "react-auto-image-slider";
import { motion, variants } from "framer-motion";

import WEBSITE from "./images/website.jpg";
import CHARTED from "./images/charted.jpg";
// import CARTICON from './images/carticon.png';

import DEMANDICON from "./images/demandicon.png";
import DESIGNERICON from "./images/designericon.png";
import DIGITALMARKETINGICON from "./images/digitalmarketingicon.png";
import DIGITALOFFICERICON from "./images/digitalofficericon.png";
import ECOMMERCEICON from "./images/ecommerceicon.png";
import HARDWAREICON from "./images/hardwareicon.png";
import OPERATIONICON from "./images/operationicon.png";
import SOFTWAREICON from "./images/softwareicon.png";
import ADMINISTRATORICON from "./images/administratoricon.png";
import WRITERICON from "./images/writericon.png";
import QAICON from "./images/qaicon.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const homeBoxesimage = {
    offscreen: { x: -200, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      // rotate:[0,10,0],
      transition: {
        // type:"spring",
        // bounce:0.4,
        duration: 1,
      },
    },
  };

  const homeBoxesfirstheading = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      // rotate:[0,10,0],
      transition: {
        // type:"spring",
        // bounce:0.4,
        duration: 0.4,
      },
    },
  };

  const homeBoxessecondheading = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      // rotate:[0,10,0],
      transition: {
        // type:"spring",
        // bounce:0.4,
        duration: 0.4,
      },
    },
  };

  const offeringBoxes1 = {
    offscreen: { x: -50, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  const offeringBoxes2 = {
    offscreen: { y: -50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  const offeringBoxes3 = {
    offscreen: { x: 50, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  const offeringBoxrow2 = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  const offeringBoxesRow3box1 = {
    offscreen: { x: 50, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  const offeringBoxesRow3box2 = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  const offeringBoxesRow3box3 = {
    offscreen: { x: 50, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  const offeringBoxesRow4box2 = {
    offscreen: { y: -50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  const homeCompanyinfo = {
    offscreen: { y: -200, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const companyDetails = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      // rotate: [0, 10, 0],
      transition: {
        // type: 'spring',
        // bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <motion.div className="home">
      {/* <ImageSlider effectDelay={500} autoPlayDelay={2000}>
        <Slide>
          <img
            alt="img2"
            src="https://images.unsplash.com/photo-1663174495175-088493482631?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </Slide>
        <Slide>
          <img
            alt="img1"
            src="https://images.unsplash.com/photo-1663174495175-088493482631?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </Slide>
        <Slide>
          <img
            alt="img1"
            src="https://images.unsplash.com/photo-1663174495175-088493482631?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </Slide>
        <Slide>
          <img
            alt="img1"
            src="https://images.unsplash.com/photo-1663174495175-088493482631?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </Slide>
      </ImageSlider> */}

<Carousel>
                <div>
                    <img src="https://images.unsplash.com/photo-1663174495175-088493482631?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1663174495175-088493482631?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1663174495175-088493482631?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>

      <motion.div
        // className="home__bannerDetail"
        className="home__companyInfo"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 1 }}
        transition={{ staggerChildren: 0.9 }}
        variants={homeCompanyinfo}
      >
        <motion.h2
          className="home__bannerDetail__heading"
          // initial={'offscreen'}
          // whileInView={'onscreen'}
          // viewport={{ once: true, amount: 1 }}
          // transition={{ staggerChildren: 0.9 }}
          // variants={homeCompanyinfo}
        >
          Web Developmen service
        </motion.h2>
        <motion.p
        // className="home__companyInfo"
        // initial={'offscreen'}
        // whileInView={'onscreen'}
        // viewport={{ once: true, amount: 1 }}
        // transition={{ staggerChildren: 0.9 }}
        // variants={homeCompanyinfo}
        >
          {/* <span className="webDevelopmentservices"> */}
          Web development services
          {/* </span>{' '} */}
          help create all types of web-based software and ensure great
          experience for web users.
        </motion.p>

        <Link to="/services">
          <button className="readmore__button">Read more...</button>
        </Link>
      </motion.div>

      <motion.div
        className="home__companyDetail"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.9 }}
        variants={companyDetails}
      >
        <p className="home__companyDetail__first">
          Ehirix is ​​primarily designed for Start-up, Non-profit organization,
          Zero funding companies. Our team of ecommerce professionals provides
          services to improve and establish client&#39;s business in a
          competitive marketplace. We provide cost effective services in terms
          of quality. Our vision is to provide client&#39;s satisfaction with
          the visibility of their brand across India/Global.
        </p>

        <p className="home__companyDetail__first">
          Ecommerce marketplace is a place where we can sell our products
          globally, there are lot of helping hands here which help to do
          business on portals, it is called ecommerce marketplace. We are the
          middlemen who help to establish your business on marketplace portals
          like Amazon, Flipkart, Meesho, Pepperfry, etc.
        </p>
        <p className="home__companyDetail__second">
          We provide these services to our clients for better access to products
          globally. We provide end-to- end marketplace management services such
          as account setup, listing, cataloguing, image editing, ad optimization
          with relevant keywords.
        </p>
      </motion.div>

      <div className="home__boxes">
        <motion.div
          className="home__boxes__box"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.9 }}
        >
          <motion.img
            className="home__boxes__box__img charted"
            src={CHARTED}
            variants={homeBoxesimage}
          ></motion.img>

          <div className="home__boxes__box__data">
            <motion.h1
              className="home__boxes__box__heading"
              variants={homeBoxesfirstheading}
            >
              ECOMMERCE
            </motion.h1>

            <motion.p
              className="home__boxes__box__details firstBoxdetail"
              variants={homeBoxessecondheading}
            >
              Ecommerce marketplace is a place where we can sell our products
              globally, there are lot of helping hands here which help to do
              business on portals, it is called ecommerce marketplace. We are
              the middlemen who help to establish your business on marketplace
              portals like Amazon, Flipkart, Meesho, Pepperfry, etc. We provide
              these services to our clients for better access to products
              globally. We provide end-to- end marketplace management services
              such as account setup, listing, cataloguing, image editing, ad
              optimization with relevant keywords.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="home__boxes__box"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.9 }}
        >
          <motion.img
            className="home__boxes__box__img website"
            src={WEBSITE}
            variants={homeBoxesimage}
          ></motion.img>

          <div className="home__boxes__box__data">
            <motion.h1
              className="home__boxes__box__heading"
              variants={homeBoxesfirstheading}
            >
              WEBSITE DEVELOPEMENT
            </motion.h1>

            <motion.p
              className="home__boxes__box__details secondBoxdetail"
              variants={homeBoxessecondheading}
            >
              Our website developers provide expert web application development
              and web design services to our clients. Appnovation offers a
              variety of website design and development services, from creating
              mobile web development solutions and responsive website designs,
              to building custom e-commerce and intranet experiences using the
              latest and proven web technologies. With up to 85% of consumers
              visiting company’s or service provider’s website before making a
              purchase, more and more consumers make decisions based on their
              online experience.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="home__boxes__box"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.9 }}
        >
          <motion.img
            className="home__boxes__box__img"
            src={HOMEGRAPHIC}
            variants={homeBoxesimage}
          ></motion.img>

          <div className="home__boxes__box__data">
            <motion.h1
              className="home__boxes__box__heading"
              variants={homeBoxesfirstheading}
            >
              HIRING SERVICES
            </motion.h1>

            <motion.p
              className="home__boxes__box__details thirdBoxDetail"
              variants={homeBoxessecondheading}
            >
              We are the one of the start-up company that will provide the
              staffing solutions at this place. ehirix solutions is a
              combination of talents, professional management and will provide
              services to multiple industries. We are here with the Innovative
              approach that will create a great relationship b/w Employer,
              Employee and ehirix solutions. We provide the solutions for all
              type of business (Large scale and Medium Scale and Start-up). Our
              expert management having a great exposure for the placing the
              right candidate at the right time. 
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="home__offering">
        <div className="home__offering__headings">
          <h1 className="home__offering__heading__firstHeading">
            We Are Offering
          </h1>
          <p className="home__offering__heading__secondHeading">
            Check Out our handpicked services to suit your business.
          </p>
        </div>
      </div>

      <div className="home__offering__boxes">
        <motion.div
          className="home__offering__boxes__row"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.9 }}
        >
          <motion.div
            className="home__offering__boxes__row__box"
            variants={offeringBoxes1}
          >
            <img
              className="home__offering__boxes__row__box__img"
              src={CARTICON}
            />

            <div className="home__offering__boxes__row__box__data">
              <h4 className="home__offering__boxes__row__box__data__heading">
                e-Commerce Solutions
              </h4>
              <p className="home__offering__boxes__row__box__data__details">
                
              </p>
            </div>
          </motion.div>

          <motion.div
            className="home__offering__boxes__row__box"
            variants={offeringBoxes2}
          >
            <img
              className="home__offering__boxes__row__box__img"
              src={DIGITALMARKETINGICON}
            />

            <div className="home__offering__boxes__row__box__data">
              <h4 className="home__offering__boxes__row__box__data__heading">
                Digital Marketing Manager/Executives
              </h4>
              <p className="home__offering__boxes__row__box__data__details">
                
              </p>
            </div>
          </motion.div>

          <motion.div
            className="home__offering__boxes__row__box"
            variants={offeringBoxes3}
          >
            <img
              className="home__offering__boxes__row__box__img"
              src={SOFTWAREICON}
            />

            <div className="home__offering__boxes__row__box__data">
              <h4 className="home__offering__boxes__row__box__data__heading">
                Software Developers
              </h4>
              <p className="home__offering__boxes__row__box__data__details">
                
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="home__offering__boxes__row"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.9 }}
          variants={offeringBoxrow2}
        >
          <div className="home__offering__boxes__row__box">
            <img
              className="home__offering__boxes__row__box__img"
              src={DIGITALOFFICERICON}
            />

            <div className="home__offering__boxes__row__box__data">
              <h4 className="home__offering__boxes__row__box__data__heading">
                Chief Digital Officers
              </h4>
              <p className="home__offering__boxes__row__box__data__details">
                
              </p>
            </div>
          </div>

          <div className="home__offering__boxes__row__box">
            <img
              className="home__offering__boxes__row__box__img"
              src={ADMINISTRATORICON}
            />

            <div className="home__offering__boxes__row__box__data">
              <h4 className="home__offering__boxes__row__box__data__heading">
                HR &amp; Administration Manager/Executives
              </h4>
              <p className="home__offering__boxes__row__box__data__details">
                
              </p>
            </div>
          </div>

          <div className="home__offering__boxes__row__box">
            <img
              className="home__offering__boxes__row__box__img"
              src={DESIGNERICON}
            />

            <div className="home__offering__boxes__row__box__data">
              <h4 className="home__offering__boxes__row__box__data__heading">
                Graphic Designer
              </h4>
              <p className="home__offering__boxes__row__box__data__details">
                
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="home__offering__boxes__row"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.9 }}
        >
          <motion.div
            className="home__offering__boxes__row__box"
            variants={offeringBoxesRow3box1}
          >
            <img
              className="home__offering__boxes__row__box__img"
              src={WRITERICON}
            />

            <div className="home__offering__boxes__row__box__data">
              <h4 className="home__offering__boxes__row__box__data__heading">
                Content Writer
              </h4>
              <p className="home__offering__boxes__row__box__data__details">
                
              </p>
            </div>
          </motion.div>

          <motion.div
            className="home__offering__boxes__row__box"
            variants={offeringBoxesRow3box2}
          >
            <img
              className="home__offering__boxes__row__box__img"
              src={ECOMMERCEICON}
            />

            <div className="home__offering__boxes__row__box__data">
              <h4 className="home__offering__boxes__row__box__data__heading">
                Ecommerce Manager/Executives
              </h4>
              <p className="home__offering__boxes__row__box__data__details">
                
              </p>
            </div>
          </motion.div>

          <motion.div
            className="home__offering__boxes__row__box"
            variants={offeringBoxesRow3box3}
          >
            <img
              className="home__offering__boxes__row__box__img"
              src={OPERATIONICON}
            />

            <div className="home__offering__boxes__row__box__data">
              <h4 className="home__offering__boxes__row__box__data__heading">
                Operation Manager/Executives
              </h4>
              <p className="home__offering__boxes__row__box__data__details">
                
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="home__offering__boxes__row"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.9 }}
        >
          <motion.div
            className="home__offering__boxes__row__box"
            variants={offeringBoxes1}
          >
            <img
              className="home__offering__boxes__row__box__img"
              src={QAICON}
            />

            <div className="home__offering__boxes__row__box__data">
              <h4 className="home__offering__boxes__row__box__data__heading">
                QA Analyst
              </h4>
              <p className="home__offering__boxes__row__box__data__details">
                
              </p>
            </div>
          </motion.div>

          <motion.div
            className="home__offering__boxes__row__box"
            variants={offeringBoxesRow4box2}
          >
            <img
              className="home__offering__boxes__row__box__img"
              src={DEMANDICON}
            />

            <div className="home__offering__boxes__row__box__data">
              <h4 className="home__offering__boxes__row__box__data__heading">
                On- Demand IT
              </h4>
              <p className="home__offering__boxes__row__box__data__details">
                
              </p>
            </div>
          </motion.div>

          <motion.div
            className="home__offering__boxes__row__box"
            variants={offeringBoxes3}
          >
            <img
              className="home__offering__boxes__row__box__img"
              src={HARDWAREICON}
            />

            <div className="home__offering__boxes__row__box__data">
              <h4 className="home__offering__boxes__row__box__data__heading">
                hardware
              </h4>
              <p className="home__offering__boxes__row__box__data__details">
                
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* <div className='header__top'>
    <div className='home__left'>
    <p className='home__left__details'>Ehirix is ​​primarily designed for Start-up, Non-profit organization, Zero funding companies. Our team
of ecommerce professionals provides services to improve and establish client&#39;s business in a
competitive marketplace. We provide cost effective services in terms of quality. Our vision is to
provide client&#39;s satisfaction with the visibility of their brand across India/Global.</p>
    </div>

    <div className='home__right'>
    <img className='home__right__img' src={HOMEGRAPHIC}/>
    </div>

    </div>

    <div className='home__bottom'>
    <p className='home__bottom__details'>Ecommerce marketplace is a place where we can sell our products globally, there are lot of helping
hands here which help to do business on portals, it is called ecommerce marketplace. We are the
middlemen who help to establish your business on marketplace portals like Amazon, Flipkart,
Meesho, Pepperfry, etc.
We provide these services to our clients for better access to products globally. We provide end-to-
end marketplace management services such as account setup, listing, cataloguing, image editing, ad
optimization with relevant keywords.

    </p>

    <div className='home__bottom__accountRegistration'>


    <div className='home__bottom__accountRegistration__left'>
    <img className='home__bottom__accountRegistration__left__img' src={REGISTRATION2}/>
    </div>

    <div className='home__bottom__accountRegistration__right'>
    <h1 className='home__bottom__accountRegistration__heading'>Account Registration</h1>
    <p className='home__bottom__accountRegistration__details'>We help clients to establish their business on different ecommerce
marketplaces, clients who are new to online market and want to sell products online. We
are helping new start-ups as well as existing companies that are doing business online. We
register their account on various marketplaces like Amazon, Flipkart etc. We try our best to
provide all services like seller flex, FBA, Easyship, selfship etc.</p>
    </div>

    
    
    </div>


    <div className='home__bottom__listingSetup'>

    <div className='home__bottom__listingSetup__left'>
    <h1 className='home__bottom__listingSetup__heading'>Listing setup</h1>
    <p className='home__bottom__listingSetup__details'>We creates a new listing for the new clients and optimization the existing
listing which helps in increasing the visibility of their product in terms of search. In this we
use relevant keywords to create descriptions and bullet points. We follow the guidelines of
ecommerce marketplace to get high rank and visibility of the products.</p>
    </div>

    <div className='home__bottom__listingSetup__right'>
    <img src={LISTINGSETUP} className='home__bottom__listingSetup__right__img'/>
    </div>

    </div>


    <div className='home__bottom__accountManagement'>

    <div className='home__bottom__accountManagement__left'>
    <img src={ACCOUNT} className='home__bottom__accountManagement__left__img'/>
    </div>

    <div className='home__bottom__accountManagement__right'>
    <h1 className='home__bottom__accountManagement__right__heading'>Account Management</h1>
    <p className='home__bottom__accountManagement__right__details'>We manage the overall vendor portal on behalf of the customer.
    
    It is also a part of building brand visibility and sales. Our professionals create a
unique catalogue which helps in increasing the sales of the clients. We create A+ content for
Amazon, RPD (Rich Product Description) for Flipkart.
Your product catalogue should be up-to-date, accurate and complete to the last detail to
drive traffic and convert visitors. We therefore provide every support necessary to ensure
that all basic cataloguing activities are taken care of efficiently. Our basic cataloguing service
includes categorizing products, creating appropriate titles, generating product information,

preparing product descriptions, customizing content, and collecting relevant images and
videos. We standardize product information and metadata to support browsing, search and
merchandising.

    </p>
    </div>

    
    </div>



    <div className='home__bottom__enhancedBrand'>

    <div className='home__bottom__enhancedBrand__left'>
    <h1 className='home__bottom__enhancedBrand__left__heading'>Enhanced brand content with visibility</h1>
    <p className='home__bottom__enhancedBrand__left__details'>We tailor the content to the products to create
brand visibility. Content is the most sensitive and most important part of selling a product.
We have increased the visibility of the products with the help of content creation. Our
experts create a content to increase the ranking of the products.</p>
    </div>

    <div className='home__bottom__enhancedBrand__right'>
    <img src={BRAND} className='home__bottom__enhancedBrand__right__img'/>
    </div>

  
    </div>



    <div className='home__bottom__catalouging'>

    <div className='home__bottom__catalouging__right'>
    <h1 className='home__bottom__catalouging__right__heading'>Cataloguing</h1>
    <p className='home__bottom__catalouging__right__details'>It is also a part of building brand visibility and sales. Our professionals create a
unique catalogue which helps in increasing the sales of the clients. We create A+ content for
Amazon, RPD (Rich Product Description) for Flipkart.
Your product catalogue should be up-to-date, accurate and complete to the last detail to
drive traffic and convert visitors. We therefore provide every support necessary to ensure
that all basic cataloguing activities are taken care of efficiently. Our basic cataloguing service
includes categorizing products, creating appropriate titles, generating product information,

preparing product descriptions, customizing content, and collecting relevant images and
videos. We standardize product information and metadata to support browsing, search and
merchandising.</p>
    </div>

  
    </div>



    </div> */}
    </motion.div>
  );
}

export default Home;
