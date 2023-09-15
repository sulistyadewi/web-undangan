import React from "react";

const Cerita = () => {
  return (
    <div className="bg-black max-w-md mx-auto">
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-between">
          <img src="./images/top_l.png" alt="" className="w-28 h-28" />
          <img src="./images/top_r.png" alt="" className="w-28 h-28" />
        </div>
        <div className="mx-auto">
          <h1 className="text-yellow-700 text-center mt-5 text-4xl font-pacifico font-bold">
            Cerita Cinta
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cerita;
