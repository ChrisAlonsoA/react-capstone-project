import { useState, useEffect } from "react";
import { Banner } from './Banner';
import featuredBanners from '../../mocks/en-us/featured-banners.json';

export const Slider = () => {
  const { results: resultsBanner } = featuredBanners;
  const [transitionActive, setTransitionActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = resultsBanner.length;

  const onSetTransitionActive = () => {
    setTransitionActive(!transitionActive);
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === (length - 1) ? 0 : (currentSlide + 1) );
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? (length - 1) : (currentSlide - 1) );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (transitionActive) {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
      }
    }, 4000);
    return () => clearInterval(interval);

  }, [currentSlide, transitionActive, length]);

  return (
    <div className='content'>

      <div className='slider'>
        {
          resultsBanner.map(({ data }, idx) => {
            return (
              <Banner
                key={`${idx}${data.title}`}
                idx={idx}
                title={data.title}
                url={data.main_image.url}
                currentSlide={currentSlide}
              />
            )
          })
        }
      </div>

      <div className='content-button'>
        <button
          onClick={prevSlide}
        ><i className="fa-solid fa-angle-left" /> Prev</button>
        {
          transitionActive ?
            (
              <button
                onClick={onSetTransitionActive}
              > Detener</button>
            ) : (
              <button
                onClick={onSetTransitionActive}
              > Activar</button>
            )
        }
        <button
          onClick={nextSlide}
        >Next <i className="fa-solid fa-angle-right" /></button>
      </div>
    </div>

  );
};

