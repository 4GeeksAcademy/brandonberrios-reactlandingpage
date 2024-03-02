import React from "react";

//include images into your bundle
import { NavBar } from "./NavBar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Container } from "./Container";

//create your first component

//Home component - assembles the homapes structure with different react components
const Home = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <row>
          <col>
            <Jumbotron />
          </col>
        </row>
        <Card />
      </Container>
    </div>
  );
}
export default Home;
