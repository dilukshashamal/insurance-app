import React from 'react'
import Contact from '../../components/contact/Contact'
import Hero from '../../components/hero/Hero'
import Info from '../../components/info/Info'

const Home = () => {
  return (
    <div>
          <Hero/>
        <section className='section2'>
          <Info/>
        </section>
        <section className='section1'>
          <Contact/>
        </section>
        
        
        
    </div>
  )
}

export default Home