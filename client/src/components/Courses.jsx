import React from "react";
import list from "../../public/freeCoursesData.json";
import Cards from "./Cards";
import {Link} from "react-router-dom"
const Courses = () => {
  console.log(list);

  return (
    <>
      <div className="min-h-screen pt-28 max-w-screen-2xl dark:bg-primaryDark dark:text-white container mx-auto md:px-20 z-50 px-4 ">
        <h1 className="text-2xl md:text-4xl text-center">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="text-center mt-6">
          Welcome to the Courses page! Here, you'll find a curated selection of
          courses designed to help you expand your skills and knowledge. Whether
          you're a beginner looking to get started or a seasoned professional
          seeking advanced insights, our courses cover a range of topics to
          support your learning journey.
        </p>
        <Link to="/">
        <div className="flex justify-center mt-6">
          <button className="btn btn-secondary w-20 font-bold text-md">
            Back
          </button>
        </div>
        </Link>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-2">
          {list.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
