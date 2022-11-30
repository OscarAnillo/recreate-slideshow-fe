import { useState, useEffect } from "react";
import { slideImages } from "./data-images";

export const SlideShowComponent = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const showNextSlideImage = () => {
    let currentPic = slideIndex;
    let nextPicture = ++currentPic % slideImages.length;
    setSlideIndex(nextPicture);
  };

  useEffect(() => {
    let interval;
    interval = setInterval(showNextSlideImage, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <h1>Wine Bottles</h1>
      <img src={slideImages[slideIndex]} alt="" />
    </div>
  );
};
