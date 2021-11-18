import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../scss/Carousel.scss';
import product1 from '../images/image-product-1.jpg';
import product2 from '../images/image-product-2.jpg';
import product3 from '../images/image-product-3.jpg';
import product4 from '../images/image-product-4.jpg';


function Carousel(){

    return(
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={4}
      >
        <Slider>
          <Slide index={0}><img src={product1} alt="product one" /></Slide>
          <Slide index={1}><img src={product2} alt="product two" /></Slide>
          <Slide index={2}><img src={product3} alt="product three" /></Slide>
          <Slide index={3}><img src={product4} alt="product four" /></Slide>
        </Slider>
        <div className="carousel__controls">
          <ButtonBack><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></ButtonBack>
          <ButtonNext><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></ButtonNext>
        </div>
        <div className="carousel__thumbnails">
          <span>carousel__thumbnails</span>
        </div>
      </CarouselProvider>
    )
}

export default Carousel;

// documentation: https://www.npmjs.com/package/pure-react-carousel