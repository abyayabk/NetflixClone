import {React, useState} from 'react';
import { Data } from '../data';


export default function List() {
    const [ current, setCurrent] = useState(0)
    function next(){
        setCurrent(current === Data.length - 1 ? 0 : current+1)
    }

    function prev(){
        setCurrent(current === 0 ? Data.length - 1 : current-1)
    }
    return(
        <>
            <button onClick={next}>next</button>
            <button onClick={prev}>prev</button>
            <div>
                {Data.map((img, index) => {
                    return(
                        <>
                            {index === current && (<img src={img.image}></img>)}
                        </>
                    ) 
                    
                })}    
            </div>    
        </>
    )
}