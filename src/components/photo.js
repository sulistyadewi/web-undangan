import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Photo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="photo-section" className="bg-black max-w-md mx-auto">
      <div
        data-aos="fade-up"
        data-aos-delay="80"
        className="flex flex-wrap justify-between"
      >
        <img src="./images/top_l.png" alt="" className="w-28 h-28" />
        <img src="./images/top_r.png" alt="" className="w-28 h-28" />
      </div>
      <div>
        <h2 className="text-white text-center text-3xl font-pacifico font-bold">
          Galeri Photo
        </h2>
        <p className="text-white text-center text-[1.1rem] px-10">
          Photo-photo kebahagian kami yang kami kenang selalu.
        </p>
      </div>
      <div className="flex flex-col">
        <img
          data-aos="fade-up"
          data-aos-delay="80"
          src="./images/photo-1.jpg"
          alt=""
          className="max-w-[21.5rem] mx-auto mt-10"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="80"
          src="./images/photo-8.jpg"
          alt=""
          className="max-w-[21.5rem] mx-auto mt-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="80"
          src="./images/photo-3.jpg"
          alt=""
          className="max-w-[21.5rem] mx-auto mt-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="80"
          src="./images/photo-5.jpg"
          alt=""
          className="max-w-[21.5rem] mx-auto mt-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="80"
          src="./images/photo-4.jpg"
          alt=""
          className="max-w-[21.5rem] mx-auto mt-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="80"
          src="./images/photo-6.jpg"
          alt=""
          className="max-w-[21.5rem] mx-auto mt-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="80"
          src="./images/photo-7.jpg"
          alt=""
          className="max-w-[21.5rem] mx-auto mt-6 mb-16"
        />
      </div>
      <div
        data-aos="fade-down"
        data-aos-delay="80"
        className="flex flex-wrap justify-between"
      >
        <img src="./images/bottom_l.png" alt="" className="w-28 h-28" />
        <img src="./images/bottom_r.png" alt="" className="w-28 h-28" />
      </div>
    </div>
  );
};

export default Photo;
