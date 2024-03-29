import React from "react";
import './Intro.css'

const Boxinfo = () => {
  return (
    <div className="boxinfo">
      <div className="card">
        <div className="cardbody">
          <h2 className="card_title">Founded</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="cardbody">
          <h2 className="card_title">50M monthly enrichments</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="cardbody">
          <h2 className="card_title">400k User</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Boxinfo;
