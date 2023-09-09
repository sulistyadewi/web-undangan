import React from "react";

const Depan = () => {
  return (
    <div className="bg-black max-w-md mx-auto">
      <div className="flex flex-col ">
        <div className="flex flex-wrap justify-between">
          <img src="./images/top_l.png" alt="" className="w-28 h-28 " />
          <img src="./images/top_r.png" alt="" className="w-28 h-28" />
        </div>
        <div className="mx-auto">
          <h4 className="text-white text-center font-pacifico text-2xl font-boldmt-5 border-y-2 border-yellow-600 p-2 w-56 mx-auto">
            Assalamu'alaikum <br /> Warahmatullah
          </h4>
          <img
            src="./images/gunungan1.png"
            alt=""
            className="mt-8 w-64 h-48 mx-auto"
          />
          <h3 className="text-yellow-700 font-pacifico font-bold text-3xl text-center p-4">
            Adi & Rara
          </h3>
          <img
            src="./images/gunungan2.png"
            alt=""
            className="w-64 h-48 mx-auto"
          />
          <h5 className="text-yellow-700 mt-3 text-center text-sm">
            Akan Segera Melangsungkan Pernikahan Suci
          </h5>
          <h4 className="text-white text-center font-pacifico text-2xl font-bold mt-5 border-y-2 p-2 border-yellow-600 w-56 mx-auto">
            Rabu, 17 Agustus <br /> 2022
          </h4>
        </div>
        <div className="flex flex-wrap justify-between">
          <img src="./images/bottom_l.png" alt="" className="w-28 h-28 " />
          <img src="./images/bottom_r.png" alt="" className="w-28 h-28" />
        </div>
      </div>
    </div>
  );
};

export default Depan;
