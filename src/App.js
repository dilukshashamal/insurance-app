import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import './scss/main.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Form } from './pages/forms/Form'
import {DemoForm} from './pages/forms/DemoForm'
import { Plans } from './pages/forms/Plans'




const App = () => {
  return (
    <div>
      <Router>

      <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/form2' element={<DemoForm/>}/>
          <Route path='/plan' element={<Plans/>}/>
          
          

        </Routes>

        <Footer/>
        
      </Router>

    </div>
  )
}

export default App
