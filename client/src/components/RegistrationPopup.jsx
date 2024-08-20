import { useState } from "react";
import Popup from "reactjs-popup";

const RegistrationPopup = ({}) => {
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Popup trigger={<button>Register</button>} modal>
      <div className="card">
        <div className="info">
          <p className="title">Register</p>
        </div>

        <div className="footer">
          <p className="tag">#HTML #CSS </p>
          <button type="button" className="action">
            Sign in / Register
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default RegistrationPopup;
