import React from "react";
import Depan from "./components/depan";
import Profile from "./components/profile";
import Undangan from "./components/undangan";
import Home from "./components/home";

const App = () => {
  return (
    <div>
      <Home />
      <Depan />
      <Profile />
      <Undangan />
    </div>
  );
};

export default App;
