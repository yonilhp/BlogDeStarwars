import React from "react";
import CharacterList from "../component/character/CharacterList.jsx";
import PlanetList from "../component/planets/PlanetList.jsx";

export const Home = () => {
  return (
    <div>
      <CharacterList />
      <PlanetList />
    </div>
  );
};
