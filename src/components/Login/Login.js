import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Accounts from "./account.json";

const Login = () => {
  const Bildirim = () => {
    alert("Kullanıcı Adı veya Şifre Yanlış!!");
  };
  const navigate = useNavigate();

  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");

  const clicked = (e) => {
    var user = Accounts.accounts.find(
      (value) => value.password === Password && value.username === User
    );
    if (user) {
      navigate("/home");
    } else {
      Bildirim();
    }
  };
  return (
    <div className="full-page">
      <form className="form">
        <h1 className="log-title">GİRİŞ YAP</h1>

        <div className="first-page">
          <label className="baslik" required>
            {" "}
            Kullanıcı adı{" "}
          </label>
          <input
            className="text-css"
            type="text"
            onChange={(e) => setUser(e.target.value)}
            required
          ></input>

          <label className="baslik" required>
            {" "}
            Şifre{" "}
          </label>
          <input
            className="text-css"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>

        <div className="second-page">
          <button className="button" onClick={clicked} type="submit">
            GİRİŞ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
