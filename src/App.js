import React, { useState } from "react";
import Home from "./components/home";
import Undangan from "./components/undangan";
import Mempelai from "./components/mempelai";
import Acara from "./components/acara";
import Lokasi from "./components/lokasi";
import Cerita from "./components/cerita";
import Photo from "./components/photo";
import Kado from "./components/kado";
import Video from "./components/video";
import Protokol from "./components/protokol";
import Ucapan from "./components/ucapan";
import Hasil from "./components/hasil";
import Menu from "./components/menu";

const App = () => {
  const [show, setShow] = useState(true);
  const buttonClick = () => {
    setShow(false);
  };
  const home = document.getElementById("home-section");
  if (home) {
    window.scrollTo({
      top: home.offsetTop,
      behavior: "smooth",
    });
  }
  const dataUcapan = [
    {
      name: "Ria",
      ucapan: "Happy wedding",
    },
    {
      name: "Bagas",
      ucapan: "Selamat",
    },
  ];
  const [ucapans, setUcapans] = useState(dataUcapan);
  const addUcapan = (ucapan) => {
    setUcapans([...ucapans, ucapan]);
  };
  return (
    <div>
      {show && <Home buttonClick={buttonClick} />}
      {!show && <Menu />}
      {!show && <Undangan />}
      {!show && <Mempelai />}
      {!show && <Acara />}
      {!show && <Lokasi />}
      {!show && <Cerita />}
      {!show && <Photo />}
      {!show && <Kado />}
      {!show && <Video />}
      {!show && <Protokol />}
      {!show && <Ucapan addUcapan={addUcapan} />}
      {!show && <Hasil dataUcapan={ucapans} />}
    </div>
  );
};

export default App;
