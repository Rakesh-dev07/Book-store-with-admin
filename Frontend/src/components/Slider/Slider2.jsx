import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        img: "https://www.bookswagon.com/images/promotionimages/web/BussinessWeb.jpg?v=4.7",
    },
    {
        img: "https://www.bookswagon.com/images/promotionimages/web/tarotcardWeb.jpg?v=4.7",
    },
    {
        img: "https://www.bookswagon.com/images/promotionimages/web/ExamWeb.jpg?v=4.7",
    },
    {
        img: "https://www.bookswagon.com/images/promotionimages/web/nonfictionbooksWeb.jpg?v=4.7",
    },
    {
        img: "https://www.bookswagon.com/images/promotionimages/web/4_mangamaniaWeb.jpg?v=4.7",
    },
    // {
    //     img: "",
    // },
]
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    mdslidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear"
};
const Slider2 = () => {
    return (
        <>
            <p className='text-5xl font-serif flex items-center justify-center'>
                
            </p>
            <div className='pb-7'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className=''>
                            <div>
                                <img src={d.img} alt="" className='md:max-h-[42vh]' />
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Slider2;
