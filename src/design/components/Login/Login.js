import * as React from "react";
import { logo, messenger, googleSheet } from '../../../assets/images';

const Login = () => {
  return (
    <div className="Login container-fluid d-flex align-items-center justify-content-center">
      <div className="Login__box d-flex align-items-center flex-column">
        <div className="Login__box__companylogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Login__box__mainbox">
          Welcome to the Login page
        </div>
        <img src={messenger} alt="messenger" />
        <img src={googleSheet} alt="googleSheet" />
      </div>
    </div>
  );
};

export default Login;
