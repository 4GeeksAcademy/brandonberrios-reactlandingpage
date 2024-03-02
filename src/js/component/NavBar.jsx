import React from "react";

export function NavBar () {
      return (
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <div className="justify-content-between container-fluid" >
                  <a className="navbar-brand text-white" href="">Start Bootstrap</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toogler-div" aria-controls="toogler-div" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="toogler-div">
                      <ul className="navbar-nav me-1 ms-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" href="#">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" href="#">About</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" href="#">Services</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" href="#">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav >
      );
  };

  export function Logo (){
    return (
        <a className="navbar-brand" href="#">
            Bootstrap
        </a>
    );

  }

  //ReactDOM.render(<NavBar />, document.querySelector("#app"));