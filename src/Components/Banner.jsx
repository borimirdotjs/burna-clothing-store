import React from "react";
import girl from "../images/banner-girl.png";
import "./Banner.css";
import useAuth from "../Custom Hooks/useAuth";

const Banner = () => {
  const { currentUser } = useAuth();

  return (
    <section className="banner-container">
      <div className="banner-title">
        {currentUser ? (
          currentUser.displayName ? (
            <h3>{currentUser.displayName.toUpperCase()},</h3>
          ) : null
        ) : null}
        <h3>
          STAND <span id="out">OUT.</span>
        </h3>
        <h3>
          SPEAK <span id="up">UP.</span>
        </h3>
        <h1>
          WEAR <span id="burna">BURNA.</span>
        </h1>
      </div>
      <img className="model" src={girl} alt="" />
    </section>
  );
};

export default Banner;
