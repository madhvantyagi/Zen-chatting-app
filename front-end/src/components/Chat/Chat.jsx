import React, { useState, useContext } from "react";
import "./Chat.css";
// Socket
import { SocketContext } from "../../context/socket";
import { useEffect } from "react";

function Chat() {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState(null);

  // run everytime "message" (the input field) changes.
  const messageChange = (event) => {
    setMessage(event.target.value);
  };

  // message sending to backend on form submit.
  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("message", message);
    // set message-box empty
    document.querySelector(".MessageInput").value = "";
  };

  // Runs everytime a "show-message" emit occurs.
  useEffect(() => {
    socket.on("show-message", (message) => {
      // DOM Manipulation
      const chatBox = document.querySelector(".ChatBox");
      const div = document.createElement("div");
      div.innerHTML = `<p>${message}</p>`;
      chatBox.appendChild(div);
    });
  }, [socket]);

  return (
    <div className="ChatBox">
      <form onSubmit={sendMessage}>
        <input
          onChange={messageChange}
          className="MessageInput"
          placeholder="Enter Message"
          type={"text"}
        ></input>
        <button type="submit" className="MessageSendButton">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Chat;
