import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import BookCard from "../BookCard/BookCard";
import Loader from '../Loader/Loader';

const Favourites = () => {
  const [FavouriteBooks, setFavouriteBooks] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-favourite-books",
        { headers }
      );
      setFavouriteBooks(response.data.data);
    };
    fetch();
  }, [FavouriteBooks]);
  return (
    <>
      {!FavouriteBooks && (
        <div className=' h-screen flex items-center justify-center'>
          <Loader />
        </div>
      )}
      {FavouriteBooks && FavouriteBooks.length === 0 && (
        <div className='text-5xl font-semibold h-[100%] text-zinc-500 flex items-center justify-center flex-col w-full'>
          NO Favourite Books
          <img src="https://cdn-icons-png.flaticon.com/512/3730/3730088.png" alt="Star" className='h-[20vh] my-8' />
        </div>
      )}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {FavouriteBooks && FavouriteBooks.map((items, i) => (
          <div key={i}>
            <BookCard data={items} favourite={true} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourites;
