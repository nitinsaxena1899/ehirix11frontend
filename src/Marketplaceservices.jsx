import React, { useEffect } from 'react';
import REGISTRATION2 from './images/registration2.jpg';
import LISTINGSETUP from './images/listingSetup.jpg';
// import ACCOUNTMANAGEMENT from './images/accountManagement.jpg'
import ACCOUNT from './images/account.jpg';
import BRAND from './images/brand.jpg';
import './Marketplaceservices.css'
import { motion, variants } from 'framer-motion';


function Marketplaceservices() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const listingsetupLeft = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
        // rotate: [0, 360],
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  const listingsetupRight = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
        // rotate: [0, 360],
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 2,
      },
    },
  };


  const accountmanagementLeft = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
        // rotate: [0, 360],
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  const accountmanagementRight = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
        // rotate: [0, 360],
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 2,
      },
    },
  };


  const enhancedbrandLeft = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
        // rotate: [0, 360],
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  const enhancedbrandRight = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
        // rotate: [0, 360],
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 2,
      },
    },
  };


  
  const cataloug = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
        // rotate: [0, 360],
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 2,
      },
    },
  };


  const listingSetup = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
        // rotate: [0, 360],
      transition: {
        // type: 'spring',
        // bounce: 0.4,
        duration: 2,
      },
    },
  };
  

  


  

  return (

    <motion.div className='marketplaceservices'
    initial={'offscreen'}
    whileInView={'onscreen'}
    viewport={{ once: true, amount: 1 }}
    transition={{ staggerChildren: 0.9 }}
    >
    <motion.div className='home__bottom__listingSetup'
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 1 }}
      transition={{ staggerChildren: 0.9 }}
      variants={listingSetup}
    >

    <motion.div className='home__bottom__listingSetup__left'
    //  initial={'offscreen'}
    //  whileInView={'onscreen'}
    //  viewport={{ once: true, amount: 1 }}
    //  transition={{ staggerChildren: 0.9 }}
    //  variants={listingsetupLeft}
    >
    <h1 className='home__bottom__listingSetup__heading'>Listing setup</h1>
    <p className='home__bottom__listingSetup__details'>We creates a new listing for the new clients and optimization the existing
listing which helps in increasing the visibility of their product in terms of search. In this we
use relevant keywords to create descriptions and bullet points. We follow the guidelines of
ecommerce marketplace to get high rank and visibility of the products.</p>
    </motion.div>

    <motion.div className='home__bottom__listingSetup__right'
    //  initial={'offscreen'}
    //  whileInView={'onscreen'}
    //  viewport={{ once: true, amount: 1 }}
    //  transition={{ staggerChildren: 0.9 }}
    //  variants={listingsetupRight}
    >
    <img src={LISTINGSETUP} className='home__bottom__listingSetup__right__img'/>
    </motion.div>

    </motion.div>


    <motion.div className='home__bottom__accountManagement'
    initial={'offscreen'}
    whileInView={'onscreen'}
    viewport={{ once: true, amount: 1 }}
    transition={{ staggerChildren: 0.9 }}
    >

    <motion.div className='home__bottom__accountManagement__left'
     initial={'offscreen'}
     whileInView={'onscreen'}
     viewport={{ once: true, amount: 1 }}
     transition={{ staggerChildren: 0.9 }}
     >

    <motion.img src={ACCOUNT} className='home__bottom__accountManagement__left__img'
    initial={'offscreen'}
    whileInView={'onscreen'}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ staggerChildren: 0.9 }}
      variants={accountmanagementLeft}
    ></motion.img>
    </motion.div>

    <motion.div className='home__bottom__accountManagement__right'
     initial={'offscreen'}
     whileInView={'onscreen'}
     viewport={{ once: true, amount: 1 }}
    //  transition={{ staggerChildren: 0.2 }}
     variants={accountmanagementRight}
    >
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
    </motion.div>

    
    </motion.div>



    <motion.div className='home__bottom__enhancedBrand'
    initial={'offscreen'}
    whileInView={'onscreen'}
    viewport={{ once: true, amount: 1 }}
    transition={{ staggerChildren: 0.9 }}
    >

    <motion.div className='home__bottom__enhancedBrand__left'
     initial={'offscreen'}
     whileInView={'onscreen'}
     viewport={{ once: true, amount: 0.5 }}
     transition={{ staggerChildren: 0.9 }}
     variants={enhancedbrandLeft}
    >
    <h1 className='home__bottom__enhancedBrand__left__heading'>Enhanced brand content with visibility</h1>
    <p className='home__bottom__enhancedBrand__left__details'>We tailor the content to the products to create
brand visibility. Content is the most sensitive and most important part of selling a product.
We have increased the visibility of the products with the help of content creation. Our
experts create a content to increase the ranking of the products.</p>
    </motion.div>

    <motion.div className='home__bottom__enhancedBrand__right'
     initial={'offscreen'}
     whileInView={'onscreen'}
     viewport={{ once: true, amount: 1 }}
     transition={{ staggerChildren: 0.9 }}
    
    >
    <motion.img src={BRAND} className='home__bottom__enhancedBrand__right__img'
     initial={'offscreen'}
     whileInView={'onscreen'}
     viewport={{ once: true, amount: 0.5 }}
     transition={{ staggerChildren: 0.9 }}
     variants={enhancedbrandRight}
    ></motion.img>
    </motion.div>

  
    </motion.div>



    <motion.div className='home__bottom__catalouging'
    initial={'offscreen'}
    whileInView={'onscreen'}
    viewport={{ once: true, amount: 1 }}
    transition={{ staggerChildren: 0.9 }}
    >

    <motion.div className='home__bottom__catalouging__right'
     initial={'offscreen'}
     whileInView={'onscreen'}
     viewport={{ once: true, amount: 1 }}
     transition={{ staggerChildren: 0.9 }}
     variants={cataloug}
    >
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
    </motion.div>

  
    </motion.div>



</motion.div> 


  )
}

export default Marketplaceservices;
