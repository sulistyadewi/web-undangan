import React from "react";

const Acara = () => {
  return (
    <div id="acara-section" className="bg-black max-w-md mx-auto">
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-between">
          <img src="./images/top_l.png" alt="" className="w-28 h-28" />
          <img src="./images/top_r.png" alt="" className="w-28 h-28" />
        </div>
        <div className="mx-auto">
          <h3 className="text-white text-center mt-5 text-3xl font-pacifico font-bold">
            Undangan dan Acara
          </h3>
          <p className="text-white text-center mt-12 px-14 text-lg">
            Dengan Rahmat Allah yang Maha Kuasa InsyaAllah kami akan
            melangsungkan pernikahan pada:
          </p>
          <h3 className="text-yellow-700 text-center mt-12 font-pacifico text-3xl font-semibold">
            Akad Nikah 1
          </h3>
          <img src="./images/hr.png" alt="" className="mx-auto w-44 mt-4" />
          <h5 className="text-white text-center font-pacifico text-[1.45rem] font-bold mt-2">
            Rabu 17 Agustus 2022
          </h5>
          <h6 className="text-white text-center text-sm">12.00 s.d selesai</h6>
          <h5 className="text-white text-center text-lg px-16">
            Aula Masjid ABRI Cimahi - Jalan Gatot Subroto Kota Cimahi
          </h5>
          <div className="flex justify-center">
            <button className="bg-yellow-700 text-white px-3 py-2 rounded-lg ring-2 ring-white mt-16 flex text-md hover:bg-white hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              Add To Calendar
            </button>
          </div>
          <h1 className="text-white text-center mt-16 font-pacifico font-bold text-5xl">
            &
          </h1>
        </div>
        <div className="mx-auto">
          <h3 className="text-yellow-700 text-center mt-16 text-3xl font-pacifico font-bold">
            Ngunduh Mantu
          </h3>
          <h5 className="text-white text-[1.45rem] text-center mt-3 font-pacifico">
            Rabu 30 September 2020
          </h5>
          <h6 className="text-white text-center">08.00 s.d selesai</h6>
          <p className="text-white text-center text-md px-16">
            Fasilitas ini untuk anda yang mempunyai acara tambahan diluar acara
            Akad Nikah dan Resepsi, akan ada kotak/section tambahan di website
            nikah anda
          </p>
          <h3 className="text-yellow-700 text-center mt-5 text-3xl font-pacifico font-semibold">
            Turut Mengundang
          </h3>
          <p className="text-white text-center text-md px-14 mt-3">
            Fasilitas ini digunakan untuk memberikan informasi yang lengkap
            tentang profile dari Mempelai Pria, silahkan masukan dengan lengkap
            dan jelas berikut dengan foto yang berkualitas bagus. Fasilitas ini
            digunakan untuk memberikan informasi yang lengkap tentang profile
            dari Mempelai Pria, silahkan masukan dengan lengkap dan jelas
            berikut dengan foto yang berkualitas bagus.
          </p>
          <h3 className="text-yellow-700 text-center mt-5 text-3xl font-pacifico font-semibold">
            Catatan
          </h3>
          <p className="text-white text-center text-md px-14 mt-3 mb-5">
            Fasilitas ini digunakan untuk memberikan informasi yang lengkap
            tentang profile dari Mempelai Pria, silahkan masukan dengan lengkap
            dan jelas berikut dengan foto yang berkualitas bagus. Fasilitas ini
            digunakan untuk memberikan informasi yang lengkap tentang profile
            dari Mempelai Pria, silahkan masukan dengan lengkap dan jelas
            berikut dengan foto yang berkualitas bagus.
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          <img src="./images/bottom_l.png" alt="" className="w-28 h-28" />
          <img src="./images/bottom_r.png" alt="" className="w-28 h-28" />
        </div>
      </div>
    </div>
  );
};

export default Acara;
