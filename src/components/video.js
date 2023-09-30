import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Video = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="video-section" className="bg-black max-w-md mx-auto">
      <div data-aos="fade-up" className="flex flex-wrap justify-between">
        <img src="./images/top_l.png" alt="" className="w-28 h-28" />
        <img src="./images/top_r.png" alt="" className="w-28 h-28" />
      </div>
      <div>
        <h2 className="text-white text-center text-3xl font-bold font-pacifico mt-10">
          Video
        </h2>
        <p className="text-slate-600 text-center px-12 text-[1.1rem]">
          Sudi sejenak melihat kebahagiaan kami melalui video dibawah ini
        </p>
        <iframe
          data-aos="fade-up"
          className="mx-auto mt-10 mb-10"
          width="320"
          height="180"
          src="https://www.youtube.com/embed/hE-1XnJs61w?si=Dqu-JhdTix9sdH4B"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div data-aos="fade-down" className="flex flex-wrap justify-between">
        <img src="./images/bottom_l.png" alt="" className="w-28 h-28" />
        <img src="./images/bottom_r.png" alt="" className="w-28 h-28" />
      </div>
    </div>
  );
};

export default Video;
