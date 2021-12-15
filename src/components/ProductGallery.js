import { useState } from 'react';
import '../scss/ProductGallery.scss';
import '../scss/partials/_utilities.scss';

function ProductGallery(props){
    const [imagesIdx, setImagesIdx] = useState(0);
    
    return(
        <div className="ProductGallery">
            <div className="flex-center">
                <img className="ProductGallery__MainImage" src={props.images[imagesIdx]} alt={imagesIdx}></img>
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
        </div>
    )
}

export default ProductGallery;

/* 
<button>
                    
                </button>
                <button>
                    <img src={props.thumbnails[1]} alt="thumbnail-1" />
                </button>

                <img src={thumbnail} alt={`thumbnail-${idx}`}/>
*/

