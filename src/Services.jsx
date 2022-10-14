import React, { useEffect } from 'react'
import './Services.css'
import SERVICES from './images/services.jpg'


function Services() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  })

  return (
    <div className='services'>

    <div className='services__hiringServices'>

    <div className='services__hiringServices__left'>

    <img className='services__hiringServices__img' src={SERVICES}/>
    </div>

    <div className='services__hiringServices__right'>

    <h1 className='services__hiringServices__right__heading'>Hiring Services</h1>

    <p className='services__hiringServices__right__details'>We are emerging as the best blockchain technology specialist in the nation and abroad. Our services cover a whole programming improvement life cycle that meets different 
    business needs.With our expertise and experience in Blockchain-as-a-service, JNC TechLabs assists you with the development of your blockchain-based decentralized applications (dApps), 
    smart contracts, and a wide range of blockchain structures and their oversight.</p>

    </div>


    </div>


    <div className='services__boxes'>

    <div className='services__boxes__box1'>

    <p className='services__boxes__box1__details'> Digital Marketing
Manager/Executives</p>
    <p className='services__boxes__box1__details'> Software Developers</p>
    <p className='services__boxes__box1__details'>Chief Digital Officers</p>
    <p className='services__boxes__box1__details'> Networking
Management</p>
    <p className='services__boxes__box1__details'>On- Demand IT</p>
    <p className='services__boxes__box1__details'>computer software</p>
    <p className='services__boxes__box1__details'> hardware</p>
    <p className='services__boxes__box1__details'> Database Administrator</p>
    <p className='services__boxes__box1__details'> QA Analyst</p>
    <p className='services__boxes__box1__details'> Product Manager</p>

    </div>

    <div className='services__boxes__box2'>
    <p className='services__boxes__box2__details'> HR &amp; Administration
Manager/Executives</p>
    <p className='services__boxes__box2__details'> Graphic Designer</p>
    <p className='services__boxes__box2__details'> Content Writer</p>
    <p className='services__boxes__box2__details'> Account
Manager/Executives</p>
    <p className='services__boxes__box2__details'> Sales
Manager/Executives</p>
    <p className='services__boxes__box2__details'> B2B Area Sales
Manager/Executives</p>
    <p className='services__boxes__box2__details'>SMM/Executive</p>
    <p className='services__boxes__box2__details'>Chartered Accountant</p>
    <p className='services__boxes__box2__details'> Customer Support M/E</p>
    
    </div>

    <div className='services__boxes__box3'>
    <p className='services__boxes__box3__details'>Ecommerce
Manager/Executives</p>
    <p className='services__boxes__box3__details'> Operation
Manager/Executives</p>
    <p className='services__boxes__box3__details'>Electrical Engineers &amp;
Designers</p>
    <p className='services__boxes__box3__details'> Human Resources
Recruiting</p>
    <p className='services__boxes__box3__details'> Civil &amp; Structural
Engineers</p>
    <p className='services__boxes__box3__details'> Payroll
Accountant/Analyst</p>
    <p className='services__boxes__box3__details'> Business Development
Manager/Executives</p>
    
    </div>

    </div>


    </div>
  )
}

export default Services