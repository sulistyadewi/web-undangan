import React from "react";
import Ucapan from "./ucapan";

const Hasil = (props) => {
  return (
    <div className="bg-blue-500 max-w-md mx-auto">
      {props.dataUcapan.map((Ucapan, index) => (
        <div key={index} className="">
          <h1>{Ucapan.name}</h1>
          <p>{Ucapan.ucapan}</p>
        </div>
      ))}
    </div>
  );
};

export default Hasil;
