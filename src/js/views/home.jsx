import React from "react";
import CharacterList from "../component/character/CharacterList.jsx";
import PlanetList from "../component/planets/PlanetList.jsx";

export const Home = () => {
  return (
    <div style={{background: "linear-gradient(to right, #1f4037, #99f2c8)", marginTop:"-5px"}}>
      <CharacterList />
      <PlanetList />
    </div>
  );
};
