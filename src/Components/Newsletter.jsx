import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section>
      <form action="" className="newsletter-container">
        <h2>
          <span>20%</span> OFF YOUR FIRST ORDER
        </h2>
        <label htmlFor="email">
          <div className="email">
            <input type="email" id="email" placeholder="enter your email" />
            <button>subscribe</button>
          </div>
        </label>
        <p>
          Get access to special discounts, giveaways, and more. Subscribe to our
          newsletter and be in the loop.
        </p>
      </form>
    </section>
  );
};

export default Newsletter;
