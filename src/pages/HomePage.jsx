import { useState } from 'react';
import { Categories, Loading, Products, Slider } from '../components';
import PropTypes from 'prop-types';
import featuredProducts from '../mocks/en-us/featured-products.json';

export const HomePage = ({ setPageCurrent }) => {
  const { results: resultsProducts } = featuredProducts;
  const [loadingState, setLoadingState] = useState(true);

  setTimeout(() => setLoadingState(false), 1000);

  return (
    <>
      <div className='content'>
        {
          loadingState ?

            <Loading />
            :
            <>
              <h1>Slider: </h1>
              <Slider />

              <h1>Categories:</h1>
              <Categories />

              <div className='products-header'>
                <h1>Featured Products:</h1>
                <button onClick={() => setPageCurrent(false)}>View all products</button>
              </div>

              <Products resultsProducts={resultsProducts} />
            </>

        }
      </div>

    </>
  )
}

HomePage.propTypes = {
  setPageCurrent: PropTypes.func.isRequired,
}
