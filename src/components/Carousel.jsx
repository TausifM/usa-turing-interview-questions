import React, { useEffect, useState } from 'react';
import One from '../assets/1.JPG';
import Two from '../assets/2.JPG';
import Three from '../assets/3.JPG';

const imagesArray = [
    One,
    Two,
    Three
];

const Carousel = () => {
    const [images, setImages] = useState([]);
    const [activeImage, setActiveImage] = useState(0);
    useEffect(() => {
        setImages(imagesArray)
    }, []);
  return (
    <div>
        <ol className='carousel-indicators'>
            {images && images.map((image, index) => (
                <li 
                data-bs-slide-to={index}
                className={index === activeImage ? "active" : ""}
                onClick={() => setActiveImage(index)}
                key={index}
                />
            ))}
        </ol>
        <div className="innerImageCard">
            {images && images.map((image, index) => (
                <div className={ `carousel-item ${index === activeImage ? "active" : ""} `}>
                <img
                src={image}
                className='carousel-image'
                alt="carosel-images"
                />
                </div>
            ))}
        </div>
        <div className="outerPrev">

        </div>
        <div className="outerNext">

        </div>
    </div>
  )
}

export default Carousel