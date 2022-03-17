import featuredCategories from '../../mocks/en-us/product-categories.json';
import PropTypes from 'prop-types';

export const Sidebar = ({categoryArray, setCategoryArray}) => {
    const { results } = featuredCategories;
    
    const handleCategory = (category) => {
        (categoryArray.includes(category)) ?
            setCategoryArray(categoryArray.filter(item => item !== category))
            :
            setCategoryArray([...categoryArray, category]);
    }

    return (
        <>
            {
                results.map(({ data }, idx) => {
                    return (
                        <div key={idx} className="btn-sidebar">
                            <button
                                onClick={() => handleCategory(data.name.toLowerCase())}
                                style={
                                    (categoryArray.includes(data.name.toLowerCase())) ? 
                                    {color: '#44c767'} 
                                    : 
                                    {color: 'white'}
                                }
                            >{data.name}</button>
                        </div>
                    )
                })
            }
        </>
    )
}

Sidebar.propTypes = {
    categoryArray: PropTypes.array.isRequired,
    setCategoryArray: PropTypes.func.isRequired,
}
