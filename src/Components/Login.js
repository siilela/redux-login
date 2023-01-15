import { useDispatch } from "react-redux";
import {login} from"../features/userSlice"
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedin: true,
      })
    );
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>
          <p>Login Here &#128512;</p>
        </h1>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login_button" onClick="{}">
          Submit
        </button>
        <>
          <p>{name}</p>
          <p>{email}</p>
          <p>{password}</p>
        </>
      </form>
    </div>
  );
};

export default Login;
