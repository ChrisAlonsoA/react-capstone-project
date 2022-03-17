import { ProductCard } from './ProductCard';
import PropTypes from 'prop-types';

export const Products = ({resultsProducts}) => {

    return (
        <>
            <div className='products'>
                {
                    resultsProducts.map(({ id, data }) => {
                        return (
                            <ProductCard
                                key={id}
                                name={data.name}
                                url={data.mainimage.url}
                                slug={data.category.slug}
                                price={data.price}
                            />
                        );
                    })
                }
            </div>
        </>
    )
}

Products.propTypes = {
    resultsProducts: PropTypes.array.isRequired,
}