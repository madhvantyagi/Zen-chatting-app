import React, { useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";

function App() {
  const [bool, setBool] = useState(true);
  const showChat = () => {
    setBool(!bool);
  };

  return bool ? <Login showChat={showChat} /> : <Chat />;
  // return <Chat />;
}

export default App;
