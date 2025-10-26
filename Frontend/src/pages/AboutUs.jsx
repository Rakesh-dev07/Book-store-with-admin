import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className='bg-zinc-900 text-white p-2 gap-4 h-auto'>
        <div className='text-yellow-100 text-2xl lg:text-4xl font-bold border flex justify-center items-center border-yellow-100 px-10 py-3 rounded-full'>
          About BookHeaven
        </div>
        <div className=''>
          <p className='text-2xl font-semibold flex justify-center items-center m-2 p-2 gap-4'>
            BookHeaven is India's Largest and Most Recommended Online Bookstore
            offering 40+ Million selections.
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center m-2 p-4 gap-5' >
          <div className=''>
            <img src="https://www.bookswagon.com/images/abouticon1.png" alt="" className='h-40'/>
            <p>[1] Find the BookHeaven </p>
          </div>
          <div className=''>
            <img src="https://www.bookswagon.com/images/abouticon2.png" alt="" className='h-40'/>
            <p>[2] Go to the online library</p>
          </div>
          <div className=''>
            <img src="https://www.bookswagon.com/images/abouticon3.png" alt="" className='h-40'/>
            <p>[3] Choose Books </p>
          </div>
          <div className=''>
            <img src="https://www.bookswagon.com/images/abouticon4.png" alt="" className='h-40'/>
            <p>[4] Pay for the Order </p>
          </div>
          <div className=''>
            <img src="https://www.bookswagon.com/images/abouticon5.png" alt="" className='h-40'/>
            <p>[5] Wait for Delivery </p>
          </div>
          <div className=''>
            <img src="https://www.bookswagon.com/images/abouticon6.png" alt="" className='h-40'/>
            <p>[6] Enjoy Reading! </p>
          </div>
        </div>

        <div>
          <p className='font-serif px-5'>
            Dear readers,<br /><br />

            We offer a huge collection of books from diverse categories of Fiction, Non-fiction, Biographies, History, Religion, Self-Help, etc. We also offer a collection of Investments and Management, Computers, Engineering, Medical, College and School text reference books. <br /> <br />

            We strive for customer satisfaction by offering a user-friendly search engine, efficient payment options and seamless delivery systems. Apart from all this, we also provide great deals and discounts on our products. <br /><br />

            All the Publishers, Distributors and Authors around the country are welcome to partner with us and grow the Bookswagon family. We would like to thank our customers for shopping with us. You can write to us on our e-mail id to share any suggestions or feedback you might have regarding our website or services.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
