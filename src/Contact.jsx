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

    <form className='contact__right__form'>

    <div className='contact__right__form__name'>

    <input className='contact__right__form__input' placeholder='First Name'/>

    <input className='contact__right__form__input' placeholder='Last Name'/>

    </div>

    <input className='contact__right__form__input' placeholder='Email'/>

    <input className='contact__right__form__input' placeholder='Phone no.'/>
    
    <textarea cols='40' rows='10' className='contact__right__form__input__textArea' placeholder='Please Describe...'></textarea>

    <button className='contact__right__form__button'> Submit </button>

    </form>

    </div>
    
    </div>
  )
}

export default Contact