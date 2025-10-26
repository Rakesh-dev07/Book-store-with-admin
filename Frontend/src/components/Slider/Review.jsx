import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        name: "ujjwal",
        img: "https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-1.png",
        review: "First of all it customer service is excellent. We get all author book for Mumbai University. People should try here affordable and best price.",
        rating:"★★★★☆"
    },
    {
        name: "marry",
        img: "https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-2.png",
        review: "Best book store almost all books are available for prepartion of exam related or other books are available on reaonable price also.",
        rating:"★★★★★"
    },
    {
        name: "Raghu",
        img: "https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-3.png",
        review: "Customer Service is good. Greetings to customer and making the required Books available to Customers is very good.",
        rating:"★★★☆☆"
    },
    {
        name: "Pooja",
        img: "https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-4.png",
        review: "This book centre have large amount of a books. The engineering study material all semester books are available.then the peacefull and nice book centre.",
        rating:"★★★★☆"
    },
    {
        name:"Abhinav",
        img:"https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-5.png",
        review:"I migrated to the online platform on Just books because I was finding it difficult to go to their libraries before closing time.",
        rating:"★★★★☆"
    },
    {
        name:"Sidddhi",
        img:"https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/pic-6.png",
        review:"I love the product because it is very easy to find. The book are in really organized manner you can easily find the book you want.",
        rating:"★★★★★"
    }
]
const settings = {
    dots:false,
    infinite: true,
    slidesToShow: 3,
    mdslidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
const Review = () => {
    return (
        <>
        <p className='bg-zinc-900 text-5xl font-serif font-semibold text-yellow-100 px-10 '>
            Client's Reviews
            </p>
        <div className='bg-zinc-900 text-white px-10 py-8'>
            <Slider {...settings}>
                {data.map((d) => (
                    <div className='bg-zinc-800 h-auto md:h-[400px] rounded-xl hover:bg-zinc-700'>
                        <div className='flex items-center justify-center'>
                            <img src={d.img} alt="" className='rounded-full mt-5 h-10 lg:h-40' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 p-4'>
                            <p className='md:text-3xl font-semibold'>{d.name}</p>
                            <p className='hidden md:flex '>{d.review}</p>
                            <p className='block md:hidden'>{d.review.slice(0,20)}...</p>
                        </div>
                        <div className='md:text-5xl text-yellow-100 flex items-center justify-center'>
                            <p>{d.rating}</p>
                        </div>
                    </div>
                ))} 
            </Slider>
        </div>
        </>
    );
};

export default Review;
