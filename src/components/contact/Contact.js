import React from 'react'
import "./contact.scss"
import { images } from '../../images'
import Button from '@mui/material/Button';
// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import Form1 from '../../pages/forms/Form1';

const Contact = () => {
  return (
    
    <div>
      <div className='banner container'>
        <picture>
          <source media='(max-width:767px)' srcSet={images.works_mobile}/>
          <img src={images.works_desktop} alt="">

          </img>
        </picture>

        <div className='banner__wrapper'>
          <div className='title'>
            <h2 className='title1'>
              Find Out More <br/> Touch With Us
            </h2>
          </div>
          <div className='button1'>
            
          <Button variant="outlined" size="large" sx={{m : 2 }}>How We Work</Button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Contact