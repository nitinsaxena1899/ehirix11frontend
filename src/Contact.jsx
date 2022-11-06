import React, { useEffect } from 'react'
import './Contact.css' 
import CONTACTUS from './images/contactus.jpg'

function Contact() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  })

  return (
    <div className='contact'>

    <div className='contact__left'>
    <img className='contact__left__img' src={CONTACTUS}/>
    </div>

    <div className='contact__right'>
 

    <form className='contact__right__form' 
    action="https://formspree.io/f/xknepdke"
  method="POST"
  >

    <div className='contact__right__form__name'>

    <input className='contact__right__form__input nameInput' placeholder='First Name' name="firstName"/>

    <input className='contact__right__form__input nameInput' placeholder='Last Name' name="lastName"/>

    </div>

    <input className='contact__right__form__input' placeholder='Email' type="email" name="email"/>

    <input className='contact__right__form__input' placeholder='Phone no.' name="number" type="number"/>
    
    <textarea name="message" cols='40' rows='10' className='contact__right__form__input__textArea' placeholder='Please Describe...'></textarea>

    <button type="submit" className='contact__right__form__button'> Submit </button>

    </form>

    </div>
    
    </div>
  )
}

export default Contact