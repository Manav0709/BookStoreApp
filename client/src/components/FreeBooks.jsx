import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const FreeBooks = () => {
  const [book, setBook] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data.filter((data) => data.category === "free"));
      } catch (error) {
        console.log("Error", error);
        setError("Failed to fetch books. Please try again later.");
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          {" "}
          <h1 className="font-bold text-xl pb-2">Free Offered Courses</h1>
          <p>
            A logline tells you what a movie or book will be about—the main
            conflict, the main character, and the stakes. We believe in the
            balance of quality and affordability.
          </p>
        </div>
        <div>
          <div className="slider-container">
            <Slider {...settings}>
              {book.map((item) => {
                return <Cards key={item.id} item={item} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeBooks;
