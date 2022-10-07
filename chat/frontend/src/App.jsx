import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Chat from "./components/Chat/Chat";
import Signup from "./components/Signup/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mainuser, setMainuser] = useState("");
  const Assigner = (user) => {
    setMainuser(user);
    console.log(mainuser);
  };

  return (
    <div>
      <Navigation />
      <Routes>
        {mainuser ? (
          <Route path="/user" element={<Signup setUser={Assigner} />} />
        ) : (
          "You signed IN move to chat page"
        )}
        <Route path="/chat" element={<Chat User={mainuser} />} />
      </Routes>
    </div>
  );
}

export default App;
