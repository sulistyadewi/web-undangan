import React from "react";
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

const App = () => {
  return (
    <div>
      <Home />
      <Undangan />
      <Mempelai />
      <Acara />
      <Lokasi />
      <Cerita />
      <Photo />
      <Kado />
      <Video />
      <Protokol />
      <Ucapan />
    </div>
  );
};

export default App;
