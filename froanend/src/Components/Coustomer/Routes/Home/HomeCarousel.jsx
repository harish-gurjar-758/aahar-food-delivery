import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from '../../../Asets/image.png'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export default function HomeCarousel() {
    return (
        <div className="HomeCarousel">
            <Carousel
            className="carousel"
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                showDots={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <div className="item"><img src={image} alt="Slide 1" /></div>
                <div className="item"><img src="https://img.freepik.com/premium-vector/delicious-burger-ad-banner_281653-10063.jpg" alt="Slide 2" /></div>
                <div className="item"><img src="https://th.bing.com/th/id/OIP.QIopk-PTrxqxGEZY3KiT4QHaD8?rs=1&pid=ImgDetMain" alt="Slide 3" /></div>
                <div className="item"><img src="https://th.bing.com/th/id/OIP.zfzVEHrQo2s92jnI1CdxZgHaEJ?w=700&h=392&rs=1&pid=ImgDetMain" alt="Slide 4" /></div>
            </Carousel>
        </div>
    )
}
