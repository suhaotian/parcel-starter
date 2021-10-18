import React from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("/", {
  path: `/io`,
  query: {
    //
  },
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("connect");
});

socket.on("disconnect", () => {
  console.log("disconnect");
});

export default function App() {
  const [name, setName] = React.useState("loading");
  React.useEffect(() => {
    axios.get("/api/parcel").then((res) => {
      setName(res.data as string);
    });
  }, []);
  return <div>Hi, {name}!</div>;
}
