import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="mt-4 card bg-base-100 w-96 dark:bg-primaryDark dark:border-white dark:text-white hover:scale-105 transition duration-300 shadow-xl">
      <div className="relative group">
        <img src={item.image} alt={item.name} className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
          <p className="text-white text-sm text-center px-4">{item.description}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.author}</p>
        <div className="card-actions justify-between mt-2 dark:text-white text-black">
          <div className="px-2 py-1 text-sm rounded-full border-[2px]">
            {item.price}
          </div>
          <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] dark:text-white text-sm md:text-black text-white hover:bg-pink-500 md:bg-transparent bg-pink-500 hover:text-white duration-200">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
