import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="mt-4 card bg-base-100 w-96 dark:bg-primaryDark dark:border-white dark:text-white hover:scale-105 transition duration-300 shadow-xl">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.author}</p>
          <div className="card-actions justify-between mt-2 dark:text-white text-black ">
            <div className=" px-2 py-1 rounded-full border-[2px] ">
              {item.price}
            </div>
            <div className="  cursor-pointer px-2 py-1 rounded-full border-[2px] dark:text-white md:text-black text-white hover:bg-pink-500 md:bg-transparent bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
