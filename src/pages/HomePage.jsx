import React from 'react'
import { Products } from '../components/Products/Products';
import { Categories } from '../components/Categories';
import Slider from '../components/Slider/Slider';


export const HomePage = () => {
  
  return (
    <>
        <div className='content'>
          <h1>Slider: </h1>
          <Slider />
        
          <h1>Categories:</h1>
          <Categories />

          <h1>Featured Products:</h1>
          <Products />
          
        </div>

    </>
  )
}
