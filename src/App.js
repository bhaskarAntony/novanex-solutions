import React, { Fragment } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './component/header/Header'
import './App.css'
import Home from './pages/home/Home'


function App() {
  return (
   <Fragment>
    <BrowserRouter>
    <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
    </BrowserRouter>
   </Fragment>
  )
}

export default App