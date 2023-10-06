import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hasil = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-black max-w-md mx-auto pb-32">
      {props.dataUcapan.map((Ucapan, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay="80"
          className="px-8"
        >
          <div className="border-b-2 border-white p-5 py-5">
            <h1 className="text-white font-pacifico font-semibold mt-5">
              {Ucapan.name}
            </h1>
            <p className="text-white mt-3">{Ucapan.ucapan}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hasil;
