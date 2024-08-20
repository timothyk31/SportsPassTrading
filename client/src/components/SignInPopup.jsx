import { useState } from "react";
import Popup from "reactjs-popup";
import "./signinpopup.css";

const SignInPopup = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={"signin-popup"}>
      <Popup trigger={<button>Sign In</button>} modal>
        <div className="card">
          <div className="info">
            <p className="title">Sign in</p>
          </div>

          <div className="footer">
            <p className="tag">#HTML #CSS </p>
            <button type="button" className="action">
              Sign in / Register
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default SignInPopup;
