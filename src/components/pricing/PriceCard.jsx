import React from "react";
import { price } from "../web-feat/dummydata";

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div key={val.id} className="items shadow">
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className="outline-btn">GET STARTED</button>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
