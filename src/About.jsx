import React, { useEffect } from 'react'
import './About.css'
import ABOUTUS from './images/aboutus.jpg'
import { motion, variants } from 'framer-motion';


function About() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  })


  
  const aboutRight = {
    offscreen: { x: -50, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
        // rotate: [0, 360],
      transition: {
        // type: 'spring',
        // bounce: 0.4,
        duration: 2,
      },
    },
  };


  const aboutRightHeading = {
    offscreen: { y: 200, opacity: 0 },
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


  const aboutRightDetails = {
    offscreen: { y: 200, opacity: 0 },
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
    <motion.div className='about'
    initial={'offscreen'}
    whileInView={'onscreen'}
    viewport={{ once: true, amount: 1 }}
    transition={{ staggerChildren: 0.9 }}
    >

    <div className='about__left'>
    <img className='about__img' src={ABOUTUS}/>
    </div>

    <motion.div className='about__right'
    initial={'offscreen'}
    whileInView={'onscreen'}
    viewport={{ once: true, amount: 1 }}
    transition={{ staggerChildren: 0.9 }}
    // variants={aboutRight}
    >

    <motion.h1 className='about__right__heading'
     initial={'offscreen'}
     whileInView={'onscreen'}
     viewport={{ once: true, amount: 1 }}
     transition={{ staggerChildren: 0.9 }}
     variants={aboutRightHeading}
    >About Ehirix</motion.h1>

    <motion.p className='about__right__details'
     initial={'offscreen'}
     whileInView={'onscreen'}
     viewport={{ once: true, amount: 1 }}
     transition={{ staggerChildren: 0.9 }}
     variants={aboutRightDetails}
    >
    We are the innovative start-up company that provide the both service at one time at one place.
Ehirix is the best place to find the right candidate and provide the market place services to the clients. It is
specially originated for the start-up company that don’t have the sufficient fund for the marketplace services
and no idea of hiring the right candidates. Our main aim to provide the client satisfaction in proper way within
the cost-effective manners. We offer a wide range of customized, research basis, highly motivated and client-
based service.
    </motion.p>

    </motion.div>
    
    </motion.div>
  )
}

export default About