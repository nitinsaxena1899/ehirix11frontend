import React, { useEffect } from "react";
import "./Hiringservices.css";
import "./Services.css";
import SERVICES from "./images/services.jpg";
import { motion, variants } from "framer-motion";

function Hiringservices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const hiringServices = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      // rotate: [0, 360],
      transition: {
        // type: 'spring',
        // bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow1box1 = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box2 = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box3 = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box4 = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box5 = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box6 = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box7 = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box8 = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box9 = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box10 = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box11 = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box12 = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box13 = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box14 = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box15 = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box16 = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box17 = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box18 = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box19 = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box20 = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box21 = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box22 = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box23 = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box24 = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const serviceRow2box25 = {
    offscreen: { y: 10, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: [0, 360],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const hiringServiceleft = {
    offscreen: { x: -50, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="services"
      //   initial={'offscreen'}
      //   whileInView={'onscreen'}
      //   viewport={{ once: true, amount: 1 }}
      //   transition={{ staggerChildren: 0.9 }}
    >
      <motion.div
        className="services__hiringServices"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.9 }}
        variants={hiringServices}
      >
        <motion.div
          className="services__hiringServices__left"
          // variants={hiringServiceleft}
        >
          {/* <motion.img className="services__hiringServices__img" src={SERVICES} 
           variants={hiringServiceleft}
          ></motion.img> */}
        </motion.div>

        <div className="services__hiringServices__right">
          <h1 className="services__hiringServices__right__heading">
            Hiring Services
          </h1>

          <p className="services__hiringServices__right__details">
            We are the one of the start-up company that will provide the
            staffing solutions at this place. ehirix solutions is a combination
            of talents, professional management and will provide services to
            multiple industries. We are here with the Innovative approach that
            will create a great relationship b/w Employer, Employee and ehirix
            solutions. We provide the solutions for all type of business (Large
            scale and Medium Scale and Start-up). Our expert management having a
            great exposure for the placing the right candidate at the right
            time. Our main motive is to satisfy the clients at any cost within
            the given TAT (Turn-Around-Time).
          </p>
        </div>
      </motion.div>

      <motion.div
        className="services__hiringServices__boxesDiv"
        // initial={'offscreen'}
        // whileInView={'onscreen'}
        // viewport={{ once: true, amount: 1 }}
        // transition={{ staggerChildren: 0.9 }}
      >
        <motion.div
          className="services__hiringServices__boxes__row"
          //   initial={'offscreen'}
          //   whileInView={'onscreen'}
          //   viewport={{ once: true, amount: 1 }}
          //   transition={{ staggerChildren: 0.9 }}
        >
          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow1box1}
          >
            Digital Marketing Manager/Executives
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box2}
          >
            HR & Administration Manager/Executives
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.4 }}
            variants={serviceRow2box3}
          >
            Ecommerce Manager/Executives
          </motion.div>
        </motion.div>

        <motion.div className="services__hiringServices__boxes__row">
          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box4}
          >
            Software Developers
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box5}
          >
            Graphic Designer
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box operationBox"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box6}
          >
            Operation Manager/Executives
          </motion.div>
        </motion.div>

        <motion.div className="services__hiringServices__boxes__row">
          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box7}
          >
            Chief Digital Officers
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box8}
          >
            Content Writer
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.4 }}
            variants={serviceRow2box9}
          >
            Electrical Engineers & Designers
          </motion.div>
        </motion.div>

        <motion.div className="services__hiringServices__boxes__row">
          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box10}
          >
            Networking Management
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.4 }}
            variants={serviceRow2box11}
          >
            Account Manager/Executives
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.4 }}
            variants={serviceRow2box12}
          >
            Human Resources Recruiting
          </motion.div>
        </motion.div>

        <motion.div className="services__hiringServices__boxes__row">
          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.4 }}
            variants={serviceRow2box13}
          >
            On- Demand IT
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box14}
          >
            Sales Manager/Executives
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box15}
          >
            Civil & Structural Engineers
          </motion.div>
        </motion.div>

        <motion.div className="services__hiringServices__boxes__row">
          <motion.div
            className="services__hiringServices__boxes__row__box computerBox"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box16}
          >
            computer software
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box17}
          >
            B2B Area Sales Manager/Executives
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box18}
          >
            Payroll Accountant/Analyst
          </motion.div>
        </motion.div>

        <motion.div className="services__hiringServices__boxes__row">
          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box19}
          >
            hardware
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.4 }}
            variants={serviceRow2box20}
          >
            SMM/Executive
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box21}
          >
            Business Development Manager/Executives
          </motion.div>
        </motion.div>

        <motion.div className="services__hiringServices__boxes__row">
          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box22}
          >
            Database Administrator
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box23}
          >
            Chartered Accountant
          </motion.div>

          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.9 }}
            variants={serviceRow2box24}
          >
            Product Manager
          </motion.div>
        </motion.div>

        <motion.div className="services__hiringServices__boxes__row">
          <motion.div
            className="services__hiringServices__boxes__row__box"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0 }}
            transition={{ staggerChildren: 0.4 }}
            variants={serviceRow2box25}
          >
            Customer Support M/E
          </motion.div>
        </motion.div>
      </motion.div>

      {/* <div className="services__boxes">
        <div className="services__boxes__box1">
          <p className="services__boxes__box1__details">
            {' '}
            Digital Marketing Manager/Executives
          </p>
          <p className="services__boxes__box1__details"> Software Developers</p>
          <p className="services__boxes__box1__details">
            Chief Digital Officers
          </p>
          <p className="services__boxes__box1__details">
            {' '}
            Networking Management
          </p>
          <p className="services__boxes__box1__details">On- Demand IT</p>
          <p className="services__boxes__box1__details">computer software</p>
          <p className="services__boxes__box1__details"> hardware</p>
          <p className="services__boxes__box1__details">
            {' '}
            Database Administrator
          </p>
          <p className="services__boxes__box1__details"> QA Analyst</p>
          <p className="services__boxes__box1__details"> Product Manager</p>
        </div>

        <div className="services__boxes__box2">
          <p className="services__boxes__box2__details">
            {' '}
            HR &amp; Administration Manager/Executives
          </p>
          <p className="services__boxes__box2__details"> Graphic Designer</p>
          <p className="services__boxes__box2__details"> Content Writer</p>
          <p className="services__boxes__box2__details">
            {' '}
            Account Manager/Executives
          </p>
          <p className="services__boxes__box2__details">
            {' '}
            Sales Manager/Executives
          </p>
          <p className="services__boxes__box2__details">
            {' '}
            B2B Area Sales Manager/Executives
          </p>
          <p className="services__boxes__box2__details">SMM/Executive</p>
          <p className="services__boxes__box2__details">Chartered Accountant</p>
          <p className="services__boxes__box2__details">
            {' '}
            Customer Support M/E
          </p>
        </div>

        <div className="services__boxes__box3">
          <p className="services__boxes__box3__details">
            Ecommerce Manager/Executives
          </p>
          <p className="services__boxes__box3__details">
            {' '}
            Operation Manager/Executives
          </p>
          <p className="services__boxes__box3__details">
            Electrical Engineers &amp; Designers
          </p>
          <p className="services__boxes__box3__details">
            {' '}
            Human Resources Recruiting
          </p>
          <p className="services__boxes__box3__details">
            {' '}
            Civil &amp; Structural Engineers
          </p>
          <p className="services__boxes__box3__details">
            {' '}
            Payroll Accountant/Analyst
          </p>
          <p className="services__boxes__box3__details">
            {' '}
            Business Development Manager/Executives
          </p>
        </div>
      </div> */}
    </motion.div>
  );
}

export default Hiringservices;
