import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../scss/Carousel.scss';

function Carousel(props){

    return(
      <div className="Carousel">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={4}
          >
            <Slider className="Carousel__Slider">
              {props.images.map((image, idx) => (
                <Slide index={idx} key={idx} ><img src={image} alt={`product-${idx}`} /></Slide>
              ))}
            </Slider>
            <div className="Carousel__Controls">
              <ButtonBack><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></ButtonBack>
              <ButtonNext><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></ButtonNext>
            </div>
            <div className="Carousel__Container Carousel__Thumbnails">
              {props.thumbnails.map((image, idx) => (
                <img className="Carousel__Thumbnail" src={image} alt={`product-${idx} thumbnail`} key={`thumbnail${idx}`} />
              ))}
            </div>
          </CarouselProvider>
        </div>
        
    )
}

export default Carousel;

// documentation: https://www.npmjs.com/package/pure-react-carousel