import PropTypes from 'prop-types';

export const ProductCard = ({ name, url, slug, price }) => {

  function numberWithCommas(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className='product-card'>
      <img src={url} alt={name} />
      <h3>{name}</h3>
      <p>{slug}</p>
      <h4>${numberWithCommas(price)}</h4>
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}