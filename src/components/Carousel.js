import React, {useState} from 'react';
import './CarouselDesign.css';
import { CarouselData } from './CarouselData';


function Carousel () {

    const images = CarouselData;
 
    let [ imageIndex, setImageIndex] = useState(0)

    function rightButton () {
       setImageIndex(-100)
       
    }

    function leftButton () {
        setImageIndex(0)
        
     }

    return (
        <>
      
            <div onClick={rightButton}>
                <button>click for right</button>
            </div>
            <div onClick={leftButton}>
                <button>click for left</button>
            </div>
            
            <div className='container1' style={{ marginLeft:`${imageIndex}%`}}>
                {images.map((slide, index) => {
                    return(
                        <>
                            <img key={index} src={slide.image} alt='movies'></img>    
                        </>
                        
                    )
                })}
            </div>

            </>
    )
}

export default Carousel;
