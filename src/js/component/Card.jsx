import React from "react";
import img from "react";

export function Card () {
      return (
          <div className="p-3col-12 col-md-6 col-lg-3 ">
              <div className="card text-center">
                  <img src="https://via.placeholder.com/500x350" class="card-img-top" alt="..."></img>
                  <div className="card-body">
                      <h5 className="card-title">Title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the
                        bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Find Out More!</a>
                  </div>
              </div>
              
          </div>
      );
  };

  export function CardSection () {
    return (
        <Row>
            <CardCol>
                <Card />
            </CardCol>

            <CardCol>
                <Card />
            </CardCol>
        </Row>
  );
  }

//export default Card