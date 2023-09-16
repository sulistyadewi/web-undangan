import React from "react";

const Ucapan = () => {
  return (
    <div
      id="ucapan-section"
      className="bg-black max-w-md mx-auto pb-10 relative"
    >
      <div className="pt-32 pb-20 ">
        <h1 className="text-white text-center text-4xl font-pacifico font-bold">
          Doa dan Ucapan
        </h1>
        <p className="text-white text-center px-14 mt-7 text-[1.05rem]">
          Tuliskan sesuatu ucapan berupa harapan ataupun doa untuk kedua
          mempelai.
        </p>
        <h4 className="text-white text-center text-2xl mt-5 font-pacifico font-bold">
          Adi <span className="text-yellow-700"> &</span> Rara
        </h4>
        <div className="flex justify-center mt-10">
          <button className="bg-yellow-500 text-white ring-2 ring-white px-2 py-2 rounded-lg hover:bg-white hover:text-black z-50">
            Kirim doa dan ucapan
          </button>
        </div>
      </div>
      <div className="bg-white w-[28rem] h-[28rem] rounded-full opacity-[0.15] blur-3xl absolute top-10"></div>
    </div>
  );
};

export default Ucapan;
