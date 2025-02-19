import React, { useState } from 'react'
import HomeCarousel from './HomeCarousel'
import foodData from '../../../Data/FoodList.json'

export default function Home() {

  const { food, drenks } = foodData[0];


  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8; // Number of items visible at a time

  // Move to the next slide
  const nextSlide = () => {
    if (currentIndex + itemsPerPage < food.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Move to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='Home'>

      {/* Carousel */}
      <div className="carousel">
        <HomeCarousel />
      </div>

      {/* Food List */}
      <div className="foodList-container">
        {/* Navigation Buttons */}
        <div className="btn-box">
          <div className="btn" onClick={prevSlide} disabled={currentIndex === 0}>
            &lt;
          </div>
          <div className="btn" onClick={nextSlide} disabled={currentIndex + itemsPerPage >= food.length}>
            &gt;
          </div>
        </div>

        {/* Carousel */}
        <div className="foodList-box-Group">
          <div className="foodList-box">
            {food.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
              <div className="card">
                <img src={item.img || "https://via.placeholder.com/100"} alt={item.title} />
                <h5>{item.title}</h5>
              </div>
            ))}
          </div>

          <div className="foodList-box">
            {drenks.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
              <div className="card" key={index}>
                <img src={item.img || "https://via.placeholder.com/100"} alt={item.title} />
                <h5>{item.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Top Food */}


    </div>
  )
}
