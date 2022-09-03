import React, { FC } from 'react'
import CardReview from '../../../atoms/cardReview'
import Title from '../../../atoms/title'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { AnimationOnScroll } from 'react-animation-on-scroll';
interface Props {
    title: string,
    titleVie: string
}
const ReviewSection: FC<Props> = ({ title, titleVie }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    const reviewList = [
        {
            avatar: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?cs=srgb&dl=pexels-vietnam-photographer-11293719.jpg&fm=jpg',
            username: 'Fajar Siddiq',
            content: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            job: 'Teacher'

        },
        {
            avatar: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?cs=srgb&dl=pexels-vietnam-photographer-11293719.jpg&fm=jpg',
            username: 'Fajar Siddiq',
            content: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            job: 'Teacher'

        },
        {
            avatar: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?cs=srgb&dl=pexels-vietnam-photographer-11293719.jpg&fm=jpg',
            username: 'Fajar Siddiq',
            content: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            job: 'Teacher'

        },
        {
            avatar: 'https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?cs=srgb&dl=pexels-vietnam-photographer-11293719.jpg&fm=jpg',
            username: 'Fajar Siddiq',
            content: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            job: 'Teacher'

        }
    ]
    return (
        <div className='mt-20'>
            <Title title={title} titleVie={titleVie} />
            <AnimationOnScroll animateIn="animate__zoomIn">
                <Carousel ssr
                          swipeable={false}
                          draggable={false}
                          partialVisbile
                          itemClass="image-item"
                          infinite={true}
                          responsive={responsive} transitionDuration={500}  removeArrowOnDeviceType={['desktop' ,"tablet"]}  showDots={true} autoPlay={true} autoPlaySpeed={2000} shouldResetAutoplay={true}>
                    {
                        reviewList.map((_elt, index) => (
                            <CardReview key={index} avatar={_elt.avatar} content={_elt.content} username={_elt.username} job={_elt.job} />
                        ))
                    }
                </Carousel>
            </AnimationOnScroll>

        </div>

    )
}

export default ReviewSection