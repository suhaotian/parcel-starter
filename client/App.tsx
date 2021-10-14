import React from "react";
import axios from "axios";

export default function App() {
  React.useEffect(() => {
    axios.get("/api/").then((res) => {
      console.log(res.data);
    });
  }, []);
  return <div>Hi, Parcel!</div>;
}
