import React, { useState } from "react";
import axios from "axios";
import { uri } from "../../context/fe_vals.js";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = async (event) => {
    const URL = `${uri}/user/create`;

    // will make an axios function to pass the request to the server
    await axios.post(URL, {
      email: email,
      name: name,
      username: username,
      password: password,
    });

    // set all fields empty for another response
    setEmail("");
    setName("");
    setPassword("");
    setUsername("");
  };

  return (
    <form>
      <div className="SignupDiv">
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
          className="Input"
          required
          value={email}
        />
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
          className="Input"
          required
          value={name}
        />
        <input
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="Username"
          className="Input"
          required
          value={username}
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Password"
          className="Input"
          required
          value={password}
        />
        <button className="SubmitButton" type="submit" onClick={handleSignup}>
          Submit
        </button>
      </div>
    </form>
  );
}
