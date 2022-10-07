import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Chat from "./components/Chat/Chat";
import Signup from "./components/Signup/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/user" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
