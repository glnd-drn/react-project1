import React from "react";

const Card = () => {
    return (
      <div className="row" style={{width: "19rem"}}>
        <img src="https://m.media-amazon.com/images/I/21JvgYqbEmL._AC_.jpg" className="card-img-top" alt=" " />
          <div className="card-body text-center">
            <h5 className="card-tittle">Michael Scott, once said:</h5>
            <p className="Card Text">“You know what they say. Fool me once, strike one, but fool me twice…strike three.”</p>
            <a href="https://www.youtube.com/watch?v=Xc_wSo42-rM" className="btn btn-primary">Find out more!</a>
          </div>
      </div>
    )
    }
 export default Card;