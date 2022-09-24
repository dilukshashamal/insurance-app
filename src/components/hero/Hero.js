import React from 'react'
import "./hero.scss"
import {images} from "../../images"
import Button from '@mui/material/Button';


const Hero = () => {
  return (
   
    <div>
      <div className='hero'>
        <div className='right-top-image'>
          <picture>
            <source 
            media='(max-width:767px)'
            srcSet={images.intro_right_mobile}
            />
            <img src={images.intro_right} alt=""/>

          </picture>
        </div>

        <div className='hero__wrapper container'>
          <div className='hero__content'>
            <h1 className='title1'>Life Care<br/> Insurance.
            </h1>
            <p className='hero__text'>
            No matter what our stage of life, we have something valuable to protect. Whether we provide an
            income, a home, or the effort we put into our family, life insurance remains a valuable financial
            tool to ensure those efforts don't end when you're gone.
            </p>
            <Button variant="outlined" size="large" sx={{m : 2 }}>Request Quotation</Button>
          </div>
          <div className='hero__image'>
            <picture>
                <source 
                media='(max-width:767px)'
                srcSet={images.intro_mobile}
                />
                <img src={images.intro_desktop} alt="" height='400px' width='500px'/>

              </picture>
          </div>
        </div>

        <div className='left-bottom-image'>
            <picture>
                <source 
                media='(max-width:767px)'
                srcSet={images.intro_left_mobile}
                />
                <img src={images.intro_left} alt=""/>

              </picture>
          </div>

      </div>
    </div>
    
  )
}

export default Hero