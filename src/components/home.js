import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const targetDays = new Date("2023-09-20");
  targetDays.setHours(0, 0, 0, 0);
  return (
    <div id="home-section" className="max-w-md mx-auto h-screen">
      <div className="bg-center h-screen bg-no-repeat bg-cover bg-blend-multiply bg-zinc-800 max-w-md overflow-hidden relative">
        <div data-aos="fade-up" className="flex flex-wrap justify-between ">
          <img src="./images/top_l.png" alt="" className="w-28 h-28" />
          <img src="./images/top_r.png" alt="" className="w-28 h-28" />
        </div>
        <div className="max-w-md flex flex-col justify-center">
          <img src="./images/atass.png" alt="" className="mx-auto w-80" />
          <h1 className="text-gold text-4xl text-center font-pacifico p-10">
            Adi | Rara
          </h1>
          <img src="./images/bawahh.png" alt="" className="mx-auto w-80" />
          <h6 className="text-white text-center mt-5 text-lg">Kepada:</h6>
          <h5 className="text-gold text-center text-xl font-pacifico py-2">
            Budi & Ani
          </h5>
          <h6 className="text-white text-center text-lg">Di Bandung</h6>
          <button
            onClick={props.buttonClick}
            className="text-white bg-gold ring-white mx-auto p-2 mt-5 rounded-lg hover:bg-white hover:text-black"
          >
            Buka Undangan
          </button>
        </div>
        <div className="flex justify-center gap-3 mt-5">
          <div className="bg-gold w-12 h-12 rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-white text-lg p-0 -mb-1">00</h1>
            <small className="text-white">Days</small>
          </div>
          <div className="bg-gold w-12 h-12 rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-white text-lg p-0 -mb-1">00</h1>
            <small className="text-white">Hours</small>
          </div>
          <div className="bg-gold w-12 h-12 rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-white text-lg p-0 -mb-1">00</h1>
            <small className="text-white">Min</small>
          </div>
          <div className="bg-gold w-12 h-12 rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-white text-lg p-0 -mb-1">00</h1>
            <small className="text-white">Sec</small>
          </div>
        </div>
        <div data-aos="fade-down">
          <img
            src="./images/bottom_l.png"
            alt=""
            className="w-28 h-28 absolute bottom-0 left-0"
          />
          <img
            src="./images/bottom_r.png"
            alt=""
            className="w-28 h-28 absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
