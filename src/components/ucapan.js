import React, { useState } from "react";

const Ucapan = (props) => {
  // console.log(props.addUcapan);
  const formState = {
    name: "",
    ucapan: "",
  };
  const [ucapan, setUcapan] = useState(formState);
  const handleInputChanged = (event) => {
    const { name, value } = event.target;
    setUcapan({ ...ucapan, [name]: value });
  };
  const submited = (event) => {
    event.preventDefault();
    if (!ucapan.name || !ucapan.ucapan) return;
    props.addUcapan(ucapan);
    // console.log("tes");
    setUcapan(formState);
  };
  return (
    <div
      id="ucapan-section"
      className="bg-black max-w-md mx-auto pb-10 relative"
    >
      <div className="pt-32 pb-20 ">
        <h1
          data-aos="fade-up"
          className="text-white text-center text-4xl font-pacifico font-bold"
        >
          Doa dan Ucapan
        </h1>
        <p
          data-aos="fade-up"
          className="text-white text-center px-14 mt-7 text-[1.05rem]"
        >
          Tuliskan sesuatu ucapan berupa harapan ataupun doa untuk kedua
          mempelai.
        </p>
        <h4 className="text-white text-center text-2xl mt-5 font-pacifico font-bold">
          Adi <span className="text-yellow-700"> &</span> Rara
        </h4>
        <div className="flex justify-center mt-10">
          <button className="bg-yellow-500 text-white ring-2 ring-white px-2 py-2 rounded-lg hover:bg-white hover:text-black z-50">
            Kirim doa dan ucapan
          </button>
        </div>
        <div className="bg-white mt-10 max-w-xs rounded-md px-6 py-6 mx-auto ring-yellow-700">
          <form onSubmit={submited}>
            <div className="flex flex-col">
              <label>Nama</label>
              <input
                type="text"
                value={ucapan.name || ""}
                required={true}
                name="name"
                className="h-12 p-2 rounded mt-3 bg-gray-300 ring-yellow-700"
                onChange={handleInputChanged}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label>Ucapan</label>
              <textarea
                name="ucapan"
                id="ucapan"
                cols={8}
                rows={8}
                value={ucapan.ucapan || ""}
                required={true}
                className="p-3 mt-3 rounded bg-gray-300 ring-yellow-700"
                onChange={handleInputChanged}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-yellow-700 text-white py-2 px-5 mt-4 rounded"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-white w-[28rem] h-[28rem] rounded-full opacity-[0.15] blur-3xl absolute top-10"></div>
    </div>
  );
};

export default Ucapan;
