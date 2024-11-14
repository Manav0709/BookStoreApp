import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Courses = () => {
  const [book, setBook] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error:", error);
        setError("Failed to fetch books. Please try again later.");
      }
    };

    getBook(); // Call the async function within useEffect
  }, []);

  return (
    <div className="min-h-screen pt-28 max-w-screen-2xl dark:bg-primaryDark dark:text-white container mx-auto md:px-20 z-50 px-4">
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

      {error ? (
        <p className="text-center text-red-500 mt-8">{error}</p>
      ) : (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-2">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
