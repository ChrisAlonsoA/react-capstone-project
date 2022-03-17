import { useState } from 'react';
import { Loading, Products, Sidebar } from '../components/';
import products from '../mocks/en-us/products.json';

export const ProductList = () => {
    const { results } = products;
    const [categoryArray, setCategoryArray] = useState([]);
    const [loadingState, setLoadingState] = useState(true);

    setTimeout(() => setLoadingState(false), 1000);

    let productsFilter = [];
    productsFilter = results.filter((product) => {
        return categoryArray.includes(product.data.category.slug)
    })

    return (
        <>
            {
                loadingState ?
                    <Loading />
                    :
                    <div className='product-list'>
                        <div className='product-list-left'>
                            <Sidebar
                                categoryArray={categoryArray}
                                setCategoryArray={setCategoryArray}
                            />
                        </div>

                        <div className='product-list-right'>
                            <div className='products'>
                                {
                                    (categoryArray.length === 0) ?
                                        <Products resultsProducts={results} />
                                        :
                                        <Products resultsProducts={productsFilter} />
                                }
                            </div>
                            <div className='content pagination'>
                                <div className='content-button'>
                                    <button
                                    ><i className="fa-solid fa-angle-left" /> Prev</button>
                                    <h1>Page: 0 of 10</h1>
                                    <button
                                    >Next <i className="fa-solid fa-angle-right" /></button>
                                </div>
                            </div>
                        </div>
                    </div>

            }
        </>
    )
}
