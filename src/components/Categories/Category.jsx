import PropTypes from 'prop-types';

export const Category = ({url, name}) => {
  return (
    <div className='category'>
        <div className='category-content' style={{
          backgroundImage: `url("${url}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <h1>{name}</h1>
        </div>
    </div>
  )
}

Category.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
