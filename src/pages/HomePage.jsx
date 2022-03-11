import { Categories, Products, Slider } from '../components'

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
