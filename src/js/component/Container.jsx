import React from "react";

export function Container(props) {
    return <div className="container">{props.children}</div>;
  }
  
  export function Row(props) {
    return <div className="row">{props.children}</div>;
  }
  
  export function Col(props) {
    return <div className="col-12">{props.children}</div>;
  }
  
  export function CardCol(props) {
    return <div className="col-xs-12 col-lg-6">{props.children}</div>;
  }

  //ReactDOM.render(<Container />, document.querySelector("#app"));