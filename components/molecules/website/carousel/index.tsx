import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
interface Props {

}
const CarouselTop = () => {
    return (
        <>
            <Carousel showThumbs={false} infiniteLoop={true} interval={2000} autoPlay={true}>
                <div>
                    <img src="https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&dpr=1" className="w-screen" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3931551/pexels-photo-3931551.jpeg?auto=compress&cs=tinysrgb&w=1368&h=750&dpr=1" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/6476188/pexels-photo-6476188.jpeg?auto=compress&cs=tinysrgb&w=1368&h=750&dpr=1" />
                </div>
            </Carousel>
        </>

    )
}

export default CarouselTop