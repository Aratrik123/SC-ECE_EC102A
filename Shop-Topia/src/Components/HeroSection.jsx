import React from 'react'
import './HeroSection.css'
import { Card } from './Card'
import banner from '../Images/banner.jpg'
import phone from '../Images/phone.jpg'
import earphone from '../Images/earphones.jpg'

export const HeroSection = () => {
    return (
        <div className='hero'>
            <div className="layout">
                <div className='intro'>
                    <br />
                    <span id="text">
                        <span style={{color:'#F28482',fontSize:'78px',fontWeight:'800'}}>Y</span>our Premier Destination for Online Shopping!
                    </span>
                    <br />
                    <span id='sub-heading'>
                        <span style={{color:'#84A59D',fontSize:'58px',fontWeight:'700'}}>E</span>xplore a World of Convenience and Choice, Delivered to Your Doorstep
                    </span>
                </div>
                <div className="bannerContainer">
                    <figure id='phoneBanner'>
                        <img src={phone} alt="" />
                    </figure>
                    <figure className='banner'>
                        <img src={banner} alt="" />
                    </figure>
                    <figure id='earphoneBanner'>
                        <img src={earphone} alt="" />
                    </figure>
                </div>
            </div>
            <div className='cardContainer'>
                <div className="cards">
                    <Card />
                </div>
                <div className='more'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFFF" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
