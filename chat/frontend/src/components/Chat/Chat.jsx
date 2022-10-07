import React, { useState, useContext } from "react";
import "./Chat.css";
// Socket
import { SocketContext } from "../../context/socket";
import { useEffect } from "react";

function Chat({ User }) {
  const socket = useContext(SocketContext);

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [userselect, setUserSelect] = useState("");

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

  const serverchoose = () => {
    let serverFalse = document.querySelector("#lang");

    // console.log(serverFalse);
    serverFalse.onchange = (e) => {
      setUserSelect(e.target.value);
      socket.emit("userselect", userselect);
      console.log(userselect);
    };
  };

  return (
    <div className="Container">
      <div className="ChatBox">
        <div>{!User ? "No user  " : User}</div>

        <select
          name="languages"
          id="lang"
          style={{ margin: "10px" }}
          onClick={serverchoose}
        >
          <option value="AlexServer" className="server">
            Alex server
          </option>
          <option value="MosheServer" className="server">
            Moshe server
          </option>
          <option value="NishantServer" className="server">
            Nishant server
          </option>
          <option value="CompsciServer" className="server">
            CompsciServer
          </option>
          <option value="QcServer" className="server">
            Qcserver
          </option>
          <option value="MaddyServer">Maddy server</option>
          <option value="c#" className="server">
            C#
          </option>
          <option value="C++" className="server">
            C++
          </option>
          <option value="erlang" className="server">
            Erlang
          </option>
        </select>

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
