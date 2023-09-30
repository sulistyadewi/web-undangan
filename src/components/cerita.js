import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cerita = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="cerita-section" className="bg-black max-w-md mx-auto">
      <div className="flex flex-col">
        <div data-aos="fade-up" className="flex flex-wrap justify-between">
          <img src="./images/top_l.png" alt="" className="w-28 h-28" />
          <img src="./images/top_r.png" alt="" className="w-28 h-28" />
        </div>
        <div className="mx-auto">
          <h1 className="text-yellow-700 text-center mt-5 text-4xl font-pacifico font-bold">
            Cerita Cinta
          </h1>
          <p className="text-white mt-5 text-center px-16 text-md">
            Banyak cerita yang kami lalui sehingga akhirnya kami bisa bersatu,
            cerita yang akan kami kenang selalu, dan cerita itu kami bagi untuk
            anda.
          </p>
          <h5 className="text-yellow-700 mt-10 text-center text-xl font-pacifico ">
            Pertama Kali Berjumpa
          </h5>
          <h6 className="text-slate-700 text-center text-md mt-3">
            Kamis, 16 Oktober 2014
          </h6>
          <p className="text-white text-center px-14 ">
            Pertama kali berjumpa Fasilitas ini digunakan untuk memberikan
            informasi yang lengkap tentang profile dari Mempelai Pria, silahkan
            masukan dengan lengkap dan jelas berikut dengan foto yang
            berkualitas bagus.
          </p>
          <h5 className="text-yellow-700 text-center mt-16 text-xl font-pacifico px-8">
            Adi Mengunjungi Rumah Rara Pertama Kali
          </h5>
          <h6 className="text-slate-700 text-center text-md mt-3">
            Minggu, 14 Desember 2014
          </h6>
          <p className="text-white text-center px-14">
            Fasilitas ini digunakan untuk memberikan informasi yang lengkap
            tentang profile dari Mempelai Pria, silahkan masukan dengan lengkap
            dan jelas berikut dengan foto yang berkualitas bagus.
          </p>
          <h5 className="text-yellow-700 text-center mt-16 text-xl font-pacifico">
            Prosesi Lamaran
          </h5>
          <h6 className="text-slate-700 text-center text-md">
            Minggu, 15 Maret 2015
          </h6>
          <p className="text-white text-center px-14">
            Fasilitas ini digunakan untuk memberikan informasi yang lengkap
            tentang profile dari Mempelai Pria, silahkan masukan dengan lengkap
            dan jelas berikut dengan foto yang berkualitas bagus.
          </p>
          <h5 className="text-yellow-700 text-center mt-16 text-xl font-pacifico">
            Kami Dipingit Satu Sama Lain
          </h5>
          <h6 className="text-slate-700 text-center text-md">
            Kamis, 11 Juni 2015
          </h6>
          <p className="text-white text-center px-14 mb-10">
            Fasilitas ini digunakan untuk memberikan informasi yang lengkap
            tentang profile dari Mempelai Pria, silahkan masukan dengan lengkap
            dan jelas berikut dengan foto yang berkualitas bagus.
          </p>
        </div>
        <div data-aos="fade-down" className="flex flex-wrap justify-between">
          <img src="./images/bottom_l.png" alt="" className="w-28 h-28" />
          <img src="./images/bottom_r.png" alt="" className="w-28 h-28" />
        </div>
      </div>
    </div>
  );
};

export default Cerita;
