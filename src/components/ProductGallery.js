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
                        <button 
                            className="ProductGallery__ThumbnailButton" 
                            key={`product-gallery-thumbnail-${idx}`} 
                            onClick={() => setImagesIdx(idx)}
                            style={{
                                backgroundImage: `url(${thumbnail})`
                            }}
                        >
                            
                        </button>
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

