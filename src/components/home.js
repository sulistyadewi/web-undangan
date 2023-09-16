import React from "react";

const Home = () => {
  return (
    <div id="home-section" className="max-w-md mx-auto h-screen">
      <div className="bg-center h-screen bg-no-repeat bg-cover bg-blend-multiply bg-zinc-800 max-w-md overflow-hidden relative">
        <div className="flex flex-wrap justify-between ">
          <img src="./images/top_l.png" alt="" className="w-28 h-28" />
          <img src="./images/top_r.png" alt="" className="w-28 h-28" />
        </div>
        <div className="max-w-md flex flex-col justify-center">
          <img src="./images/atass.png" alt="" className="mx-auto w-80" />
          <h1 className="text-yellow-700 text-4xl text-center font-pacifico p-10">
            Adi | Rara
          </h1>
          <img src="./images/bawahh.png" alt="" className="mx-auto w-80" />
          <h6 className="text-white text-center mt-10 text-lg">Kepada:</h6>
          <h5 className="text-yellow-700 text-center text-xl font-pacifico py-5">
            Budi & Ani
          </h5>
          <h6 className="text-white text-center text-lg">Di Bandung</h6>
          <button className="text-white bg-yellow-400 mx-auto p-2 mt-5 rounded-lg hover:bg-white hover:text-black">
            Buka Undangan
          </button>
        </div>
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
  );
};

export default Home;
