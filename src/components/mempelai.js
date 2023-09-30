import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Mempelai = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="mempelai-section" className="bg-black max-w-md mx-auto">
      <div className="flex flex-col">
        <div data-aos="fade-up" className="flex flex-wrap justify-between">
          <img src="./images/top_l.png" alt="" className="w-28 h-28" />
          <img src="./images/top_r.png" alt="" className="w-28 h-28" />
        </div>
        <div id="pria" className="mx-auto">
          <div data-aos="fade-down">
            <img
              src="./images/photo-m.jpg"
              alt=""
              className="w-44 h-w-44 rounded-full mx-auto"
            />
            <h3 className="text-center mt-5 font-pacifico text-3xl text-yellow-700">
              Adi Sumaryadi
            </h3>
          </div>
          <h4 data-aos="zoom-in" className="text-white text-center text-lg">
            Putra dari Sumarmo & Kantun
          </h4>
          <img
            data-aos="fade-up"
            src="./images/hr.png"
            alt=""
            className="mx-auto w-44 mt-4"
          />
          <div data-aos="fade-up">
            <p className="text-white text-center mt-3 px-14 text-md leading-snug">
              Fasilitas ini digunakan untuk memberikan informasi yang lengkap
              tentang profile dari Mempelai Pria, silahkan masukan dengan
              lengkap dan jelas berikut dengan foto yang berkualitas bagus.
              Fasilitas ini digunakan untuk memberikan informasi yang lengkap
              tentang profile dari Mempelai Pria, silahkan masukan dengan
              lengkap dan jelas berikut dengan foto yang berkualitas bagus.
            </p>
            <p className="text-white text-center mt-5 px-14 text-md leading-snug">
              Fasilitas ini digunakan untuk memberikan informasi yang lengkap
              tentang profile dari Mempelai Pria, silahkan masukan dengan
              lengkap dan jelas berikut dengan foto yang berkualitas bagus.
              Fasilitas ini digunakan untuk memberikan informasi yang lengkap
              tentang profile dari Mempelai Pria, silahkan masukan dengan
              lengkap dan jelas berikut dengan foto yang berkualitas bagus.
            </p>
          </div>
          <h1 className="text-white text-center mt-16 font-pacifico font-bold text-5xl">
            &
          </h1>
        </div>
        <div id="wanita" className="mx-auto">
          <div data-aos="fade-down">
            <img
              src="./images/photo-w.jpg"
              alt=""
              className="w-44 h-w-44 rounded-full mx-auto mt-16"
            />
            <h3 className="text-center mt-5 font-pacifico text-3xl text-yellow-700">
              Siti Salamah Azzahra
            </h3>
          </div>
          <h4 data-aos="zoom-in" className="text-white text-center text-lg">
            Putri dari Maman & Imas
          </h4>
          <img
            data-aos="fade-up"
            src="./images/hr.png"
            alt=""
            className="mx-auto w-44 mt-4"
          />
          <div data-aos="fade-up">
            <p className="text-white text-center mt-3 px-14 text-md leading-snug">
              Maha kuasa Allah yang telah mempertemukan kami dalam sebuah moment
              yang tak direncanakan bertemu pada awal tahun 2012 lalu, wajah
              cantik Siti Salamah Azzahra dan pribadi yang santun itu masih
              teringat jelas dalam ingatan Adi. Sayang, tak sempat berbincang
              saat itu, dan waktupun berganti hari, berganti bulan dan berganti
              tahun, tidak ada komunikasi diantara kami, karena memang kami tak
              tau kabar masing-masing dan bisa dibilang belum begitu kenal.
            </p>
            <p className="text-white text-center mt-5 px-14 text-md leading-snug mb-5">
              Jejaring sosial menjadi jalan kami bertemu kembali , ya dari
              sanalah Adi ingat kembali moment beberapa tahun, akhir tahun 2013
              menambah sederetan moment-moment yang tak dapat dilupakan, untuk
              pertama kalinya Adi memberanikan diri untuk mengunjungi
              keluarganya dan berniat ingin lebih kenal dengan Siti Salamah
              Azzahra dan keluarga.
            </p>
          </div>
        </div>
        <div data-aos="fade-down" className="flex flex-wrap justify-between">
          <img src="./images/bottom_l.png" alt="" className="w-28 h-28" />
          <img src="./images/bottom_r.png" alt="" className="w-28 h-28" />
        </div>
      </div>
    </div>
  );
};

export default Mempelai;
