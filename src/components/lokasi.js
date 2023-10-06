import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Lokasi = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="lokasi-section" className="bg-black max-w-md mx-auto ">
      <div className="flex flex-col">
        <div
          data-aos="fade-up"
          data-aos-delay="80"
          className="flex flex-wrap justify-between"
        >
          <img src="./images/top_l.png" alt="" className="w-28 h-28" />
          <img src="./images/top_r.png" alt="" className="w-28 h-28" />
        </div>
        <div>
          <h3 className="text-white text-center text-[1.7rem] font-pacifico font-bold mt-5">
            Peta Lokasi
          </h3>
          <p className="text-white text-center text-md px-14">
            Anda dapat menuju lokasi acara kami dengan bantuan peta dibawah ini.
            Atau anda bisa buka di
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="80"
            className="flex justify-center"
          >
            <a href="https://goo.gl/maps/Wuw1q6TAtYUhkXTr8">
              <button className="bg-gold text-white px-4 py-2 rounded-lg ring-2 ring-white mt-8 flex text-[1.120rem] hover:bg-white hover:text-black">
                Buka di Gmaps
              </button>
            </a>
          </div>
          <div data-aos="zoom-in" data-aos-delay="80">
            <a href="https://goo.gl/maps/Wuw1q6TAtYUhkXTr8">
              <img
                src="./images/map.png"
                alt=""
                className="max-w-sm mx-auto rounded-lg mt-8 mb-10"
              />
            </a>
          </div>
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
    </div>
  );
};

export default Lokasi;
