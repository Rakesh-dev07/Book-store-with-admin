import React from 'react';
import { Link } from 'react-router-dom';
import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaRedoAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const services = () => {
  return (
    <>
      <div className="bg-zinc-900 text-white md:gap-2 py-5 flex md:flex-row items-center ">

        <div className='text-2xl md:text-6xl md:pl-20'><FaShippingFast /></div>
        <div class="">
          <h1 className=' md:text-4xl'>Free shipping</h1>
          <p className=''>order over ₹250</p>
        </div>

        <div className='text-2xl md:text-5xl md:pl-9'><FaLock /></div>
        <div class="">
          <h1 className=' md:text-4xl'>Secure payment</h1>
          <p>100 secure payment</p>
        </div>

        <div className='text-2xl md:text-5xl md:pl-9'><FaRedoAlt /></div>
        <div class="">
          <h1 className=' md:text-4xl'>Easy returns</h1>
          <p>10 days returns</p>
        </div>

        <div className='text-2xl md:text-5xl md:pl-9'><BiSupport /></div>
        <div class="">
          <h1 className=' md:text-4xl'>24/7 Support</h1>
          <p>call us anytime</p>
        </div>

      </div>
      <div className='bg-zinc-900 h-[75vh] flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
          <img src="./spr1.png" alt="hero" className='' />
        </div>
        <div className='w-full md:pl-20  md-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center'>
          <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left'>
          Deal Of The Day <br /> upto 50% off
          </h1>
          <p className='mt-4 text-xl text-zinc-300 text-center lg:text-left'>
          Checkout before this deal expires at midnight.
          </p>
          <div className='mt-8'>
            <Link
              to="/all-books"
              className='text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
