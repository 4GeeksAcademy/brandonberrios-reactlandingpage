import React from "react";


export function Jumbotron (){
      return (
          <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                  <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                  <p className="col-md-8 fs-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni id mollitia cum aspernatur ipsam laudantium, facilis repellat.</p>
                  <button className="btn btn-primary btn-lg" type="button">Call to Action!</button>
              </div>
          </div>
      )
  }

  //ReactDOM.render(<Jumbotron />, document.querySelector("#app"));




// what would be the    ReactDOM.render(<BootstrapCard />, document.getElementById("myDiv")); in this?????
//ReactDOM.render(<Home />, document.querySelector("#app"));