import React from "react";

//include images into your bundle
import { NavBar } from "./NavBar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Container } from "./Container";
import { Footer } from "./Footer";

//create your first component

//Home component - assembles the homapes structure with different react components
const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Jumbotron />
        <div className="row g-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    </div>
      <Footer /> 
     
      
    </div>
  );
};
export default Home;
