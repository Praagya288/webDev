// LoginSignup.jsx
import "./LoginSignup.css";
import email from "../assets/images/email.png";
import password from "../assets/images/password.png";
import person from "../assets/images/person.png";
import React, { useState } from 'react';

export const LoginSignup = () => {

    const [action , setAction] = useState("Sign up")

  return (
    <div className="container">

        {/* header  */}
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        {/* input area  */}
        <div className="inputs">
            <div className="input">
                <img src={person} alt="" />
                <input type="text" placeholder="username"/>
            </div>
            <div className="input">
                <img src={email} alt="" />
                <input type="email" placeholder="email"/>
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder="password"/>
            </div>
        </div>


        {/* forgot password button  */}
        <div className="forgotPassword">Lost Password? <span>Click here</span></div>

        {/* login and signup button area  */}
        <div className="submitContainer">
            <div className={action==="Login ?"submit gray"}>SignUp</div>
            <div className="submit">Login</div>
        </div>

    </div>
  );
};
