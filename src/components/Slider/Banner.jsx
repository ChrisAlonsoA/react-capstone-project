import PropTypes from 'prop-types';

export const Banner = ({url, title, idx, currentSlide}) => {

    // const debounceFunction = (func, delay) => {
    //     let timer;
    //     return function() {
    //       let self = this;
    //       let args= arguments;
    //       clearTimeout(timer);
    //       timer = setTimeout(() => {
    //         func.apply(self, args)
    //       }, delay)
    //     }
    //   }

    return (
    <div className='slider'>
        {
             idx === currentSlide && (
                <>
                    <img src={url} alt={title}/>
                    <h1>{title}</h1>
                </>
            )
        }
    </div>
  )
}

Banner.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    idx: PropTypes.number.isRequired,
    currentSlide: PropTypes.number.isRequired,
  }
