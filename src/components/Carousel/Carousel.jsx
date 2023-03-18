import { useEffect, useState } from 'react';
import One from '../../assets/1.JPG';
import Two from '../../assets/2.JPG';
import Three from '../../assets/3.JPG';
import './Carousel.style.css';

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
    console.log(activeImage, imagesArray);
  return (
    <div className='carousel-container' id="carouselExample-cf">
        <ol className='carousel-indicators'>
            {images && images.map((image, index) => (
                <li 
                data-bs-target="#"
                data-bs-slide-to={index}
                className={index === activeImage ? "active" : ""}
                onClick={() => setActiveImage(index)}
                key={index}
                />
            ))}
        </ol>
        <div className="innerImageCard">
            {images && images.map((image, index) => (
                <div className={ `carousel-item ${index === activeImage ? "active" : ""} `} key={index}>
                <img
                src={image}
                className='carousel-image'
                alt="carousel-images"
                />
                </div>
            ))}
        </div>
        <div className="outerPrev" data-bs-slide="prev" role="button">
            <span className={`carousel-prev ${activeImage === images?.length ? "active" : ""}`}
            onClick={() => setActiveImage(activeImage + 1 >= images?.length ? 0 : activeImage + 1)}
            >
                prev
            </span>
        </div>
        <div className="outerNext" data-bs-slide="next" role="button">
            <span className={`carousel-next ${activeImage === images?.length ? "active" : ""}`}
            onClick={() => setActiveImage(activeImage + 1 >= images?.length ? 0 : activeImage + 1)}
            >
                next
            </span>
        </div>
    </div>
  )
}

export default Carousel