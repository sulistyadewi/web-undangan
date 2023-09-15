import React from "react";

import Depan from "./components/depan";
import Profile from "./components/profile";
import Undangan from "./components/undangan";
import Home from "./components/home";
import Lokasi from "./components/lokasi";
import Cerita from "./components/cerita";

const App = () => {
  return (
    <div>
      <Home />
      <Depan />
      <Profile />
      <Undangan />
      <Lokasi />
      <Cerita />
    </div>
  );
};

export default App;
