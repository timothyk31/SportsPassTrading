import React from "react";
import "./card.css"

const Card = () => {
    return (
      <div className="card">
        <div className="header"></div>
        <div className="info">
          <p className="title">How to make this material card ?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi.{" "}
          </p>
        </div>
        <div className="footer">
          <p className="tag">#HTML #CSS </p>
          <button type="button" className="action">
            Get started{" "}
          </button>
        </div>
      </div>
    );
}

export default Card;