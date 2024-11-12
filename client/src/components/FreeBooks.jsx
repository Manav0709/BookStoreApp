import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/freeCoursesData.json";
import Cards from "./Cards";

const FreeBooks = () => {
  const freeBooksData = list.filter((data) => data.category === "free");
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
              {freeBooksData.map((item) => {
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
