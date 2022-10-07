import React, { useState, useContext } from "react";
import "./Chat.css";
// Socket
import { SocketContext } from "../../context/socket";
import { useEffect } from "react";

function Chat() {
  const socket = useContext(SocketContext);

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // chat sending to backend on form submit.
  const sendChat = (event) => {
    event.preventDefault();
    socket.emit("message", message);
    // set message-box empty (state)
    setMessage("");
  };

  // Runs everytime a "show-message" emit occurs.
  useEffect(() => {
    // backend emits that a message has been received, and need to be updated to FE.
    socket.on("message", (msg) => {
      setChat([...chat, msg]);
      console.log(chat);
    });
  });

  return (
    <div className="Container">
      <div className="ChatBox">
        <form onSubmit={sendChat}>
          <input
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }} // on message input, we take the value in input box and set state.
            className="MessageInput"
            placeholder="Enter Message"
            type={"text"}
          ></input>
          <button type="submit" className="MessageSendButton">
            Send Message
          </button>
        </form>
      </div>
      <div>
        {chat.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default Chat;
