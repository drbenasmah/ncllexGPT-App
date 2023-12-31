import React from "react";
import "./courses.css";
import { online } from "../web-feat/dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content grid3">
            {online.map((val) => (
              <div key={val.id} className="box">
                <div style={{ color: "#3498db" }} className="img">
                  <img src={val.cover} alt="online courses" />
                  <img
                    src={val.hoverCover}
                    alt="online courses"
                    className="show"
                  />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
