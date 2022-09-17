/*
    Connecting Client Side Sockets with Node Server
*/

import React from "react";
import socketio from "socket.io-client";
import { uri } from "./fe_vals.js";

export const socket = socketio.connect(uri);
export const SocketContext = React.createContext();
