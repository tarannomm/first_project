import React from "react";
import Search from "./Search";
import Cards from "./Cards";
import Loading from "./Loading";
import Logos from "./Logos";
const Landing = () => {
  return (
    <div>
      <Loading />
      <Cards />
      <Search />
      <Logos />
    </div>
  );
};

export default Landing;
