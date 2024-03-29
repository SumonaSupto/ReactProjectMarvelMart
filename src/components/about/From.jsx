import React from "react";
import './Intro.css'
const From = () => {
  return (
    <div className="from">
      <div>
        <h4>Sign Up for news letter</h4>
      </div>
      <div>
        <p>Get all the latest information on Events, Sales and Offers.   
        </p>
        <h4>
        Receive &#36;10 coupon for first shopping.
        </h4>
      </div>
      <div>
        <form action="">
            <input id="email" type="text" name="email" placeholder="Email Address" />
            <button id="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default From;
