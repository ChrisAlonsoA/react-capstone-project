import featuredProducts from '../../mocks/en-us/featured-products.json';
import { ProductCard } from './ProductCard';

export const Products = () => {
    const { results: resultsProducts } = featuredProducts;

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
