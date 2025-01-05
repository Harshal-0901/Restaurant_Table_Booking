import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>
                Welcome to Café Mosaic, where every bite tells a story, and
                every visit feels like home.
              </p>
            </div>
            <p className="mid">
              At Café Mosaic, we believe that food is more than just nourishment
              — it’s a celebration of life’s vibrant flavors, cultures, and
              moments. Nestled in the heart of the community, our café offers a
              unique fusion of carefully curated ingredients, artfully prepared
              dishes, and a warm, inviting atmosphere that invites you to
              unwind, connect, and savor the present.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
