import React from 'react'
import './Topbar.css'
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Topbar() {
  return (
    <div className='topBar'>

        <div className='topBar__left'>
            <CallIcon className='topBar__leftcallIcon'/>
            <p className='phoneNomber' >9896114784</p>

        </div>

        <div className='topBar__right'>

            <div className='topBar__right__socialMediaicons'>

                <FacebookIcon className='socialMediaicons'/>
                <TwitterIcon className='socialMediaicons'/>
                <InstagramIcon className='socialMediaicons'/>
                <YouTubeIcon className='socialMediaicons'/>

            </div>

        </div>

    </div>
  )
}

export default Topbar