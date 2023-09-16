import React from "react";

const Protokol = () => {
  return (
    <div id="protokol-section" className="bg-black max-w-md mx-auto relative">
      <div className="flex flex-wrap justify-between">
        <img src="./images/top_l.png" alt="" className="w-28 h-28" />
        <img src="./images/top_r.png" alt="" className="w-28 h-28" />
      </div>
      <div className="px-12">
        <h5 className="text-white font-pacifico text-xl mt-10">
          Protokol Kesehatan
        </h5>
        <h5 className="text-white mt-2 text-lg">Protokol Kesehatan</h5>
        <p className="text-white text-[1.05rem] mt-5 mb-10">
          Mohon untuk anda sahabat/kerabat dan saudara kami yang akan datang ke
          Akad maupun resepsi pernikahan kami untuk tetap memperhatikan protokol
          kesehatan yaitu Menggunakan Masker, Menjaga Jarak, Mencuci Tangan dan
          selalu menjaga kesehatan dan juga imun tubuh. Terima kasih
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        <img src="./images/bottom_l.png" alt="" className="w-28 h-28" />
        <img src="./images/bottom_r.png" alt="" className="w-28 h-28" />
      </div>
      <div className="bg-white w-[28rem] h-[28rem] rounded-full opacity-[0.15] blur-3xl absolute top-8"></div>
    </div>
  );
};

export default Protokol;
