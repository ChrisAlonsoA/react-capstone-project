import { Category } from './Category';
import featuredCategories from '../../mocks/en-us/product-categories.json';

export const Categories = () => {
  const {results:resultsCategories} = featuredCategories

  return (
    <div className='categories'>
        {
          resultsCategories.map(({id, data}) => (
            <Category 
              key={id}
              url={data.main_image.url}
              name={data.name}
            />
          ))
        }
    </div>
  )
}
