import React, {useState} from 'react';
import './CarouselDesign.css';
import { CarouselData } from './CarouselData';
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6

export function Carousel () {

    const images = CarouselData;
   
    
    const [ imageIndex, setImageIndex] = useState([0,1,2,3])

    function rightButton () {
        
        const newArray = imageIndex.map((i) => i + 4)
        for( let num =0; num <=3; num++){
            if( newArray[num] >= 8){
                newArray[num]=num; 
                console.log(num)
            }else{
                newArray[num] = num+4
                console.log(num)
            }
        }
        
        
        setImageIndex(newArray)
    }

    return (
        <div >
            
       
               <div className='container'>
            <img src={images[imageIndex[0]].image}></img>
            <img src={images[imageIndex[1]].image}></img>
            <img src={images[imageIndex[2]].image}></img>
            <img src={images[imageIndex[3]].image}></img>
            </div>
         
           
            <div className='button' onClick={rightButton}>click me</div>
            
            

             
        </div>
    )
}

/*<div className='container'>
                {images.map((slide, index) => {
                    return(
                        <>
                            <img key={index} src={slide.image} alt='movies'></img>
                            <header>{slide.title}</header>
                        
                        </>
                        
                    )
                })}
            </div>*/