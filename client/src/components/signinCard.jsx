import React from "react";

const SigninCard = ({}) => {
    return (
      <div className="card">
        <div className="header"></div>
        <div className="info">
          <p className="title">Sign in / Register</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi.{" "}
          </p>
        </div>
        <div className="footer">
          <p className="tag">#HTML #CSS </p>
          <button type="button" className="action">
            Sign in / Register
          </button>
        </div>
      </div>
    );
}

export default SigninCard;