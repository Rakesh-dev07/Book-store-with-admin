import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { GrGithub } from "react-icons/gr";

const Cont = () => {
    return (
        <>
            <div className='bg-zinc-900 h-auto flex flex-col md:flex-row items-center justify-center'>
                <div className='h-auto m-10 lg:w-3/6 flex flex-col items-center lg:items-start justify-center'>
                    <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left'>
                        Contact Us
                    </h1>
                    <p className='mt-5 text-xl text-zinc-300 text-center lg:text-left'>
                        SK Ecommerce Factory Pvt. Ltd.<br />
                        2/14, Kalyan road <br />
                        Mumbai Maharashtra -421301
                    </p>
                    <p className='mt-5 text-xl text-zinc-300 lg:text-left'>
                        <MdEmail />customerservice@bookheaven.com <br />
                        <BiSolidPhoneCall />011-41521153<br />
                        <MdOutlineAccessTimeFilled />9:00 am to 6:00 pm <br />
                        <BiNotepad />Closed on Sundays and Public Holidays.
                    </p>
                    <div className='mt-8'>
                        <Link
                            to="/aboutus"
                            className='text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'
                        >
                            About Us
                        </Link>
                    </div>
                </div>
                <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
                    <img
                        src="https://th.bing.com/th/id/R.0ee040ff9f886add2aa49b77b9f6df84?rik=yz0hQQgM8ScLCg&riu=http%3a%2f%2fabeehainternational.com%2fassets%2fimages%2fW3.png&ehk=Y7BxbEaVfqA4LGS4FVxrCqMyVaR85HnHB9K34wkOV9A%3d&risl=&pid=ImgRaw&r=0"
                        alt="/"
                        className='' />
                </div>
            </div>
            <div className='bg-zinc-900 p-4 gap-5 flex items-center justify-center'>
                <div className='hover:bg-white p-3 hover:text-blue-500 bg-blue-500 text-white rounded-full text-2xl md:text-4xl'>
                    <FaInstagram />
                </div>
                <div className='hover:bg-white p-3 hover:text-blue-500 bg-blue-500 text-white rounded-full text-2xl md:text-4xl'>
                    <RiFacebookFill />
                </div>
                <div className='hover:bg-white p-3 hover:text-blue-500 bg-blue-500 text-white rounded-full text-2xl md:text-4xl'>
                <AiOutlineTwitter />
                </div>
                <div className='hover:bg-white p-3 hover:text-blue-500 bg-blue-500 text-white rounded-full text-2xl md:text-4xl'>
                <IoLogoLinkedin />
                </div>
                <div className='hover:bg-white p-3 hover:text-blue-500 bg-blue-500 text-white rounded-full text-2xl md:text-4xl'>
                <GrGithub />
                </div>
            </div>
        </>
    );
};

export default Cont;
