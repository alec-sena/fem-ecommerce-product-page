import { SRLWrapper } from "simple-react-lightbox";
import '../scss/LightBox.scss';

function LightBox(props) {
    const content = [];
    props.images.forEach((image, idx) => content.push({image: image, thumbnail: props.thumbnails[idx]}));
    
    return (
        <div className="LightBox">
            <SRLWrapper>
                <a href={props.images[2]}>
                    <img src={props.thumbnails[2]} alt="thumbnail-0" />
                </a>
                <a href={props.images[3]}>
                    <img src={props.thumbnails[3]} alt="thumbnail-1" />
                </a>
                <a href={props.images[4]}>
                    <img src={props.thumbnails[4]} alt="thumbnail-1" />
                </a>
                <a href={props.images[1]}>
                    <Image
                    src={props.thumbnails[1]}
                    alt="Picture of the author"
                    width={500}
                    height={900}
                    srl_gallery_image="true" // Add this if your thumbnail is not recognized
                    />
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