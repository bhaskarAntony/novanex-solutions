import React, { Fragment, useEffect } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './component/header/Header'
import './App.css'
import Home from './pages/home/Home'
import Digital from './pages/services/Digital'
import Footer from './component/footer/Footer'
import Application from './pages/services/Application'
import Software from './pages/services/Software'
import Analytics from './pages/services/Analytics'
import Artificial from './pages/services/Artificial'
import Cybersecurity from './pages/services/Cybersecurity'
import CloudComputing from './pages/services/CloudComputing'
import ITConsulting from './pages/services/ITConsulting'
import DevOps from './pages/services/DevOps'
import QualityAssurance from './pages/services/QualityAssurance'
import About from './pages/about/About'
import Contact from './component/contact/Contact'
import Career from './pages/services/Career'
import Placement from './pages/services/Placement'
import Hr from './pages/services/Hr'
import NonITtoIT from './pages/services/NonITtoIT'
import ContactPage from './component/contact/Contact'
import AboutPage from './pages/about/About'
import Aos from 'aos'


function App() {
  useEffect(()=>{
    Aos.init();//initilization
  }, [])
  return (
   <div style={{overflowX:'hidden'}}>
    <BrowserRouter>
    <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/services/software-training' element={<Software/>}/>
    <Route path='/services/career-councelling' element={<Career/>}/>
    <Route path='/services/placement-councelling' element={<Placement/>}/>
    <Route path='/services/HR' element={<Hr/>}/>
    <Route path='/services/transform' element={<NonITtoIT/>}/>
   
    <Route path='/aboutus' element={<AboutPage/>}/>
    <Route path='/contact-us' element={<ContactPage/>}/>
   </Routes>
   <Footer/>
    </BrowserRouter>
   </div>
  )
}

export default App