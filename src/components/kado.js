import React from "react";

const Kado = () => {
  return (
    <div id="kado-section" className="bg-black max-w-md mx-auto">
      <div className="flex flex-wrap justify-between">
        <img src="./images/top_l.png" alt="" className="w-28 h-28" />
        <img src="./images/top_r.png" alt="" className="w-28 h-28" />
      </div>
      <div>
        <h2 className="text-white text-3xl text-center font-pacifico font-bold">
          Kirim Kado
        </h2>
        <p className="text-white text-center text-[1.05rem] px-12">
          Terima kasih atas doa dan restu yang telah anda berikan, jika anda
          ingin mengirimkan kado nikah, silahkan kirim dengan cara dibawah ini.
          Sebelumnya, kami mengucapkan banyak terima kasih.
        </p>
      </div>
      <div>
        <img
          src="./images/mandiri-s.png"
          alt=""
          className="max-w-[21.5rem] bg-white mx-auto p-6 mt-10"
        />
        <h6 className="text-white text-center mt-5 font-semibold text-lg font-roboto-slab">
          Nama Bank
        </h6>
        <p className="text-white text-center text-lg font-roboto-slab">
          Bank Mandiri Syariah
        </p>
        <h6 className="text-white text-center mt-5 font-semibold text-lg font-roboto-slab">
          No Rekening
        </h6>
        <p className="text-white text-center text-lg font-roboto-slab">
          123456789
        </p>
        <div className="flex justify-center">
          <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg ring-2 ring-white mt-5 flex hover:bg-white hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
            Copy Rekening
          </button>
        </div>
        <img
          src="./images/mandiri.png"
          alt=""
          className="m
          max-w-[21.5rem] bg-white mx-auto p-6 mt-10"
        />
        <h6 className="text-white text-center mt-5 font-semibold text-lg font-roboto-slab">
          Nama Bank
        </h6>
        <p className="text-white text-center text-lg font-roboto-slab">
          Bank Mandiri
        </p>
        <h6 className="text-white text-center mt-5 font-semibold text-lg font-roboto-slab">
          No Rekening
        </h6>
        <p className="text-white text-center text-lg font-roboto-slab">
          123456789
        </p>
        <div className="flex justify-center">
          <button className="bg-yellow-500 text-white px-3 py-2 rounded-lg ring-2 ring-white mt-5 flex hover:bg-white hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
            Copy Rekening
          </button>
        </div>
        <p className="text-slate-600 text-center px-14 mt-8 mb-10">
          Untuk mengirimkan Kado Nikah kepada kami, silahkan kirimkan melalui
          Saweria kami. Atau melalui Nomor Rekening Bank Mandiri 1320006284864
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        <img src="./images/bottom_l.png" alt="" className="w-28 h-28" />
        <img src="./images/bottom_r.png" alt="" className="w-28 h-28" />
      </div>
    </div>
  );
};

export default Kado;
