import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        img: "https://www.bookswagon.com/bannerimages/79_inr.jpg?v=1.8",
    },
    {
        img: "https://www.bookswagon.com/bannerimages/70_inr.jpg?v=1.9",
    },
    {
        img: "https://www.bookswagon.com/bannerimages/31_inr.jpg?v=1.8",
    },
    {
        img: "https://www.bookswagon.com/bannerimages/84_inr.jpg?v=1.8",
    },
    {
        img: "https://www.bookswagon.com/bannerimages/85_inr.jpg?v=1.8",
    },
    {
        img: "https://www.bookswagon.com/bannerimages/81_inr.jpg?v=1.8",
    },
    {
        img: "https://www.bookswagon.com/images/promotionimages/web/MedicalWeb.jpg?v=4.7",
    }
]
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    mdslidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear"
};
const Slider1 = () => {
    return (
        <>
            <p className='text-2xl md:text-5xl font-serif pb-4 flex items-center justify-center'>
                Welcome to BookHeaven
            </p>
            <div className='md:pb-7'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className=''>
                            <div>
                                <img src={d.img} alt="" />
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Slider1;
