import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../web-feat/dummydata";
import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about4.png" alt="" />
          </div>
          <div className="right row">
            <Heading
              subtitle="LEARN ANYTHING"
              title="Benefits of studying with NCLLEXGPT"
            />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB" key={val.id}>
                    <div className="img">
                      <img src={val.cover} alt="{val.alt}" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
