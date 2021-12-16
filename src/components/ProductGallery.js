import { useState } from 'react';
import useToggle from '../hooks/useToggle';
import LightBox from './LightBox';
import '../scss/ProductGallery.scss';
import '../scss/partials/_utilities.scss';

function ProductGallery(props){
    const [imagesIdx, setImagesIdx] = useState(0);
    const [lightBoxIsOpen, toggleLightBoxIsOpen] = useToggle(false)
    
    return(
        <div className="ProductGallery">
            <div className="flex-center">
                <img 
                    className="ProductGallery__MainImage" 
                    src={props.images[imagesIdx]} 
                    alt={imagesIdx}
                    onClick={() => toggleLightBoxIsOpen(true)}
                ></img>
            </div>
            <div className="flex-center">
                <div className="ProductGallery__Thumbnails">
                    {props.thumbnails.map((thumbnail, idx) => (
                        <div key={`product-gallery-thumbnail-${idx}`} >
                            <input name="thumbnails" type="radio" id={`c${idx}`} className="ProductGallery__RadioButton"></input>
                            <label 
                                htmlFor={`c${idx}`}
                                className="ProductGallery__ThumbnailButton" 
                                onClick={() => setImagesIdx(idx)}
                                style={{
                                    backgroundImage: `url(${thumbnail})`
                                }}
                            >    
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            {lightBoxIsOpen && <LightBox images={props.images} thumbnails={props.thumbnails} toggleLightBoxIsOpen={toggleLightBoxIsOpen} />}
        </div>
    )
}

export default ProductGallery;

