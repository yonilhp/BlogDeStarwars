import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import CharacterDetailsView from "./component/character/CharacterDetailsView.jsx";
import { Navbar } from "./component/navbar.jsx";
import PlanetDetailsView from "./component/planets/PlanetsDetailsView.jsx";
//create your first component
const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path= "/planet/:uid" element ={<PlanetDetailsView/>}/>
            <Route path="/character/:uid" element={<CharacterDetailsView />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
