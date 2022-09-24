import React from 'react'
import "./info.scss"
import {images} from "../../images"


const Info = () => {
  return (
    <div>
      <div className='we-are-different'>
        <div className='container'>
          <h2 className='title1 title1--mod'>
            We are different
          </h2>
          <div className='we-are-different__content'>
            <div className='snappy'>
              <img src={images.snappy_process} alt=""/>
              <h3 className='title3'>Snappy Process</h3>
              <p>Snappy is a compression format and program library to implement it, introduced by Google. It is designed
                 for very fast compression and decompression.Snappy is defined as a raw stream format, plus a higher-level
                "framing format" that can be used as a file format.</p>
            </div>
            <div className='affordable'>
              <img src={images.affordable_prices} alt=""/>
              <h3 className='title3'>Affordable Prices</h3>
              <p>With many different types of plans available on the market, it can be difficult at first to know what plan
                 is best for your circumstances. We’ve prepared this helping chart to help you get a scope of what
                 plans you may be eligible for, how you can qualify, and what these plans are best suited for.</p>
            </div>
            <div className='people-first'>
              <img src={images.people_first} alt=""/>
              <h3 className='title3'>Empire Life Insurance</h3>
              <p>Empire Life dedicates itself to helping you manage your money effectively with a selection of life insurance
                 plans that remain affordable even as they help you maximize your wealth. Whether you want a simple plan with
                 no frills, or you want to manage your insurance directly to build your future, Empire Life can help.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info