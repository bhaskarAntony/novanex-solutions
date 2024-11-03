import React, { Fragment } from 'react'
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


function App() {
  return (
   <Fragment>
    <BrowserRouter>
    <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/services/digital-transformation' element={<Digital/>}/>
    <Route path='/services/application-development' element={<Application/>}/>
    <Route path='/services/enterprise-software-solutions' element={<Software/>}/>
    <Route path='/services/data-analytics-bi' element={<Analytics/>}/>
    <Route path='/services/artificial-intelligence-machine-learning' element={<Artificial/>}/>

    <Route path='/services/cybersecurity' element={<Cybersecurity/>}/>
    <Route path='/services/cloud-computing' element={<CloudComputing/>}/>
    <Route path='/services/it-consulting' element={<ITConsulting/>}/>
    <Route path='/services/devops ' element={<DevOps/>}/>
    <Route path='/services/quality-assurance-testing' element={<QualityAssurance/>}/>
    <Route path='/aboutus' element={<About/>}/>
   </Routes>
   <Footer/>
    </BrowserRouter>
   </Fragment>
  )
}

export default App