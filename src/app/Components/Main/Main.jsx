import Navbar from '../Navbar/Navbar'
import React from 'react'
import Slider from '../Slider/Slider'
import NavigationBttons from '../NavigationButtons/NavigationBttons'
import ProductSection from '../ProductSection/ProductSection'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <NavigationBttons></NavigationBttons>
        <ProductSection></ProductSection>
        <Footer></Footer>
    </div>
  )
}

export default Main