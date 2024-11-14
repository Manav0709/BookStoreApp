import React from "react";
import Home from "./home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./components/Courses";
import Layout from "./layout/Layout";
import SignUp from "./components/SignUp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="dark:bg-primaryDark dark:text-white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
