import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { uri } from "../../context/fe_vals.js";

export default function Login({ showChat }) {
  const [check, setCheck] = useState(true);

  const checkToggle = () => {
    setCheck(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    var b = Authorize();
    b ? showChat() : Authorize();
  };
  const Authorize = () => {
    let gmail = document.querySelector(".Input1");
    let URL = " http://127.0.0.1:8000/user/create";
    let name = document.querySelector(".Input2");

    console.log(gmail.value.split("@")[1]);
    if (gmail.value.split("@")[1] == "gmail.com" || name) {
      //will make an axios function to pass the request to the server
      // var bodyFormData = new FormData();
      // bodyFormData.append(gmail.value, name.value);

      //try upper method if normal doesn't work
      const bodyFormData = {
        name: name.value,
        email: gmail.value,
      };
      fetch(URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyFormData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });

      return true;
    } else {
      alert("Please enter your email address or name");
      return false;
    }
  };

  // if (check) {
  //   return (
  //     <div className="Login-Container">
  //       <button onClick={checkToggle}>
  //         <h3>Login</h3>
  //       </button>
  //     </div>
  //   );
  // } else {
  return (
    <form>
      <div className="Login-Div">
        <input
          type="gmail"
          placeholder="Maddy@gmail.com"
          className="Input1"
        ></input>
        <input type="name" placeholder="Maddy" className="Input2"></input>
        <button type="submit" onClick={handleLogin}>
          Submit
        </button>
      </div>
    </form>
  );
}
