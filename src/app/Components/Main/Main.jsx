import Navbar from '../Navbar/Navbar'
import React from 'react'
import Slider from '../Slider/Slider'
import NavigationBttons from '../NavigationButtons/NavigationBttons'

const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Slider></Slider>
        <NavigationBttons></NavigationBttons>
    </div>
  )
}

export default Main