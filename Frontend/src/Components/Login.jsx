import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Navbar from "./Navbar";
import loginImg from "../assets/loginImg.png";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["userName", "password"]);

  const handleLogin = async () => {
    if (username !== "" && password !== "") {
      try {
        const result = await axios.post(
          "https://s56-bizarre-hairstyles.onrender.com/auth",
          { username: username }
        );

        const token = result.data;

        setCookie("userName", token, {
          expires: new Date(Date.now() + 31536000000),
        });
        setCookie("password", password, {
          expires: new Date(Date.now() + 31536000000),
        });

        let user = username
        axios
          .post("https://s56-bizarre-hairstyles.onrender.com/user", {user})
          .then((result) => {
            console.log(result);
            alert("Successfully LoggedIn!");
            navigate("/");
          })
          .catch((err) => console.log(err));

      } catch (error) {
        console.error("Login error:", error);
        alert("Login failed. Please check your credentials.");
      }
    } else {
      alert("UserName and Password are Required!!");
    }
  };

  return (
    <>
      <Navbar />
      <img className="login-img" src={loginImg} alt="login Img" />
      <div className="login">
        <h2 className="login-title">Login</h2>
        <h3 className="label-inp" htmlFor="username">
          Username
        </h3>
        <br />
        <input
          className="login-inputBox"
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <h3 className="label-inp" htmlFor="password">
          Password
        </h3>
        <br />
        <input
          className="login-inputBox"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <Link to="/">
          <button className="cancel-button">Cancel</button>
        </Link>
      </div>
    </>
  );
}
