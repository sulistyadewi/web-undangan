import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Undangan = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="undangan-section" className="bg-black max-w-md mx-auto">
      <div data-aos="fade-up" data-aos-delay="80" className="flex flex-col ">
        <div className="flex flex-wrap justify-between">
          <img src="./images/top_l.png" alt="" className="w-28 h-28 " />
          <img src="./images/top_r.png" alt="" className="w-28 h-28" />
        </div>
        <div className="mx-auto">
          <h4 className="text-white text-center font-pacifico text-2xl font-boldmt-5 border-y-2 border-gold p-2 w-56 mx-auto">
            Assalamu'alaikum <br /> Warahmatullah
          </h4>
          <img
            src="./images/gunungan1.png"
            alt=""
            className="mt-8 w-64 h-48 mx-auto"
          />
          <h3 className="text-gold font-pacifico font-bold text-3xl text-center p-4">
            Adi & Rara
          </h3>
          <img
            src="./images/gunungan2.png"
            alt=""
            className="w-64 h-48 mx-auto"
          />
          <h5 className="text-gold mt-3 text-center text-sm">
            Akan Segera Melangsungkan Pernikahan Suci
          </h5>
          <h4 className="text-white text-center font-pacifico text-2xl font-bold mt-5 border-y-2 p-2 border-gold w-56 mx-auto">
            Rabu, 17 Agustus <br /> 2022
          </h4>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="80"
          className="flex flex-wrap justify-between"
        >
          <img src="./images/bottom_l.png" alt="" className="w-28 h-28 " />
          <img src="./images/bottom_r.png" alt="" className="w-28 h-28" />
        </div>
      </div>
    </div>
  );
};

export default Undangan;
