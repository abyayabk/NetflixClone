import React, { useState } from "react";
import SliderItem from "./slider-item/sliderItem";
import "./slider.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const Slider = (a) => {
  const [sliderHasMoved, setSliderHasMoved] = useState(false); // boolean tracking if slider has moved from its initial position
  const [sliderMoveDirection, setSliderMoveDirection] = useState(null); // direction of movement of slider
  const [sliderMoving, setSliderMoving] = useState(false); // boolean for animation of slider
  const [movePercentage, setMovePercentage] = useState(0); // amount to offset slider
  const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0); // lowest visible index of slider items
  const itemsInRow = 5; // number of items to be displayed across screen

  // render the slider contents
  function renderSliderContent() {
    const totalItems = a.movies.length;

    // slider content made up of left, mid, and right portions to allow continous cycling
    const left = [];
    const mid = [];
    const right = [];

    // gets the indexes to be displayed
    for (let i = 0; i < itemsInRow; i++) {
      // left

      if (lowestVisibleIndex + i - itemsInRow < 0) {
        left.push(totalItems - itemsInRow + lowestVisibleIndex + i);
      } else {
        left.push(i + lowestVisibleIndex - itemsInRow); // issue here
      }

      // mid
      if (i + lowestVisibleIndex >= totalItems) {
        mid.push(i + lowestVisibleIndex - totalItems);
      } else {
        mid.push(i + lowestVisibleIndex);
      }

      // right
      if (i + lowestVisibleIndex + itemsInRow >= totalItems) {
        right.push(i + lowestVisibleIndex + itemsInRow - totalItems);
      } else {
        right.push(i + lowestVisibleIndex + itemsInRow);
      }
    }

    // combine left, mid, right to have all indexes
    const combinedIndex = [...left, ...mid, ...right];

    const sliderContents = [];
    for (let index of combinedIndex) {
      sliderContents.push(
        <SliderItem movie={a.movies[index]} width={100 / itemsInRow} />
      );
    }

    return sliderContents;
  }

  // handle previous control
  function handlePrev() {
    const totalItems = a.movies.length;

    // get the new lowest visible index
    let newIndex;
    if (lowestVisibleIndex < itemsInRow && lowestVisibleIndex !== 0) {
      newIndex = 0;
    } else if (lowestVisibleIndex - itemsInRow < 0) {
      newIndex = totalItems - itemsInRow;
    } else {
      newIndex = lowestVisibleIndex - itemsInRow;
    }

    setLowestVisibleIndex(newIndex);

    let newMovePercentage;
    if (lowestVisibleIndex === 0) {
      newMovePercentage = 0;
    } else if (lowestVisibleIndex - newIndex < itemsInRow) {
      newMovePercentage =
        ((itemsInRow - (lowestVisibleIndex - newIndex)) / itemsInRow) * 100;
    } else {
      newMovePercentage = 0;
    }

    setSliderMoving(true);
    setSliderMoveDirection("left");
    setMovePercentage(newMovePercentage);

    setTimeout(() => {
        setLowestVisibleIndex(newIndex);
        setSliderMoving(false);
      }, 300);
  }

  // handle previous control
  function handleNext() {
    const totalItems = a.movies.length;

    // get the new lowest visible index
    let newIndex;
    if (lowestVisibleIndex === totalItems - itemsInRow) {
      newIndex = 0;
    } else if (lowestVisibleIndex + itemsInRow > totalItems - itemsInRow) {
      newIndex = totalItems - itemsInRow;
    } else {
      newIndex = lowestVisibleIndex + itemsInRow;
    }

    setLowestVisibleIndex(newIndex);

    // slider has now moved at least once - display Prev controls
    if (!sliderHasMoved) {
      setSliderHasMoved(true);
    }

    let newMovePercentage;
    if (newIndex !== 0) {
      newMovePercentage = ((newIndex - lowestVisibleIndex) / itemsInRow) * 100;
    } else {
      newMovePercentage = 100;
    }

    setSliderMoving(true);
    setSliderMoveDirection("right");
    setMovePercentage(newMovePercentage);

    setSliderMoving(true);
    setSliderMoveDirection("right");
    setMovePercentage(newMovePercentage);

    setTimeout(() => {
      setLowestVisibleIndex(newIndex);
      setSliderMoving(false);
    }, 300);
  }

  let style = {};
  if (sliderMoving) {
    let translate = "";
    if (sliderMoveDirection === "right") {
      translate = `translateX(-${100 + movePercentage + 100 / itemsInRow}%)`;
    } else if (sliderMoveDirection === "left") {
      translate = `translateX(-${movePercentage + 100 / itemsInRow}%)`;
    }

    style = {
      transform: translate,
      transitionDuration: "500ms",
    };
  } else {
    style = {
      transform: `translateX(-${100 +
        (sliderHasMoved ? 100 / itemsInRow : 0)}%)`,
    };
  }

  return (
    <>
      <div className="slider">
        
      <BiChevronLeft className="button left" onClick={handlePrev} />
        <div className="slider-content" style={style}>
          {renderSliderContent()}
        </div>
        <BiChevronRight className="button right" onClick={handleNext}/>
        
      </div>
      
    </>
  );
};

export default Slider;
