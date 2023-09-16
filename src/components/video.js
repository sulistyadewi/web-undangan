import React from "react";

const Video = () => {
  return (
    <div id="video-section" className="bg-black max-w-md mx-auto">
      <div className="flex flex-wrap justify-between">
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
          className="mx-auto mt-10 mb-10"
          width="320"
          height="180"
          src="https://www.youtube.com/embed/hE-1XnJs61w?si=Dqu-JhdTix9sdH4B"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex flex-wrap justify-between">
        <img src="./images/bottom_l.png" alt="" className="w-28 h-28" />
        <img src="./images/bottom_r.png" alt="" className="w-28 h-28" />
      </div>
    </div>
  );
};

export default Video;
