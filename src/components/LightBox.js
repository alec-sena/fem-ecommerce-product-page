import { useState } from 'react';
import '../scss/LightBox.scss';
import '../scss/partials/_utilities.scss';

function LightBox(props) {
    const [lightBoxIdx, setLightBoxIdx] = useState(0);

    function showNextImage(){
        if(lightBoxIdx === props.images.length - 1){
            return;
        }
        return setLightBoxIdx(lightBoxIdx + 1);
    }

    function showPrevImage(){
        if(lightBoxIdx === 0){
            return;
        }
        return setLightBoxIdx(lightBoxIdx - 1);
    }

    return (
        <div className="LightBox">
            <div className="LightBox__Container">
                <div className="flex-center">
                    <div className="LightBox__CloseContainer">
                        <button onClick={() => props.toggleLightBoxIsOpen(false)}>
                        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFFFFF" fillRule="evenodd"/></svg>
                        </button>
                    </div>
                </div>
                <div className="flex-center">
                    <img
                        className="LightBox__MainImage" 
                        src={props.images[lightBoxIdx]} 
                        alt={lightBoxIdx}
                    ></img>
                    <div className="LightBox__Controls">
                        <button onClick={showPrevImage}><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></button>
                        <button onClick={showNextImage}><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></button>
                    </div>
                </div>
                <div className="flex-center">
                    <div className="LightBox__Thumbnails">
                        {props.thumbnails.map((thumbnail, idx) => (
                            <div key={`light-box-thumbnail-${idx}`} >
                                <input name="lightbox-thumbnails" type="radio" id={`lb${idx}`} className="LightBox__RadioButton"></input>
                                <label 
                                    htmlFor={`lb${idx}`}
                                    className="LightBox__ThumbnailButton" 
                                    style={{
                                        backgroundImage: `url(${thumbnail})`
                                    }}
                                >
                                    <div 
                                        className="LightBox__ThumbnailOverlay"
                                        onClick={() => setLightBoxIdx(idx)}
                                    ></div>    
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LightBox;