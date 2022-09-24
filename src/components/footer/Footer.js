import React from 'react'
import "./footer.scss"
import { images } from '../../images'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer-art'>
          <picture>
            <source media='(max-width:767px)' srcSet={images.footer_mob}/>
            <img src={images.footer} alt=""/>
          </picture>
        </div>
        <div className='container'>
          <div className='footer'>
            <div className='footer-header'>
              <div className='logo'>
                <img src={images.logo} alt=""/>

              </div>
              <div className='social-media-icons'>
                <img src={images.fb} alt=""/>
                <img src={images.twitter} alt=""/>
                <img src={images.insta} alt=""/>
                <img src={images.pinterest} alt=""/>
              </div>
            </div>
            <div className='footer-menu'>
              <div className='about'>
                <h4>Our Company</h4>
                <ul>
                  <li>How we work</li>
                  <li>Why insure</li>
                  <li>View Plans</li>
                  <li>Reviews</li>
                </ul>
              </div>
              <div className='about'>
              <h4>Our Company</h4>
                <ul>
                  <li>How we work</li>
                  <li>Why insure</li>
                  <li>View Plans</li>
                  <li>Reviews</li>
                </ul>
              </div>
              <div className='about'>
              <h4>Our Company</h4>
                <ul>
                  <li>How we work</li>
                  <li>Why insure</li>
                  <li>View Plans</li>
                  <li>Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer