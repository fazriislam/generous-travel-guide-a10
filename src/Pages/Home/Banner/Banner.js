import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner/banner-1.png';
import banner2 from '../../../images/banner/banner-2.png';
import banner3 from '../../../images/banner/banner-3.png';

const Banner = () => {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
          <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={banner1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Famous Place Around The World</h3>
                <p>Know the culture, lifestyle and principle of other countries</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={banner2}
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Enjoy the best sunset sitting in a island</h3>
                <p>Visit the island that attract every  people</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={banner3}
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>Know the ocean</h3>
                <p>
                  Ocean is more mysterious than you thought
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
        );
      };
      

export default Banner;