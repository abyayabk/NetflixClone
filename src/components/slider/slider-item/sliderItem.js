import React from "react";
import "./style.css"

const SliderItem = (a) => {
  console.log(a.movie)
  return (
    <>
    <div className="slider-item" >
      <img className="a" src={a.movie.image} alt={a.movie.title}/>
      </div>
     </>
  );
};

export default SliderItem;
