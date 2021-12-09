import { SRLWrapper } from "simple-react-lightbox";
import '../scss/LightBox.scss';

function LightBox(props) {
    const content = [];
    props.images.forEach((image, idx) => content.push({image: image, thumbnail: props.thumbnails[idx]}));
    
    return (
        <div className="LightBox">
            <SRLWrapper>
                <a href={props.images[]}>
                    <img src={props.thumbnails[2]} alt="thumbnail-0" />
                </a>
                <a href={props.images[3]}>
                    <img src={props.thumbnails[3]} alt="thumbnail-1" />
                </a>
                <a href={props.images[4]}>
                    <img src={props.thumbnails[4]} alt="thumbnail-1" />
                </a>
                <a href={props.images[1]}>
                    <img src={props.thumbnails[1]} alt="thumbnail-1" />
                </a>
            </SRLWrapper>
        </div>
    )
}

export default LightBox;

// https://www.npmjs.com/package/simple-react-lightbox

/* <div className="Carousel__Container Carousel__Thumbnails">
          {props.thumbnails.map((image, idx) => (
            <img className="Carousel__Thumbnail" src={image} alt={`product-${idx} thumbnail`} key={`thumbnail${idx}`} />
          ))}
</div> */

/* {content.map((asset, idx) => (
                    <a href={asset.image} key={`image-${idx}`}>
                        <img src={asset.thumbnail} alt={`thumbnail-${idx}`} />
                    </a>
                ))} */