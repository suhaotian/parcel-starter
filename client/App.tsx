import React from "react";
import axios from "axios";

export default function App() {
  const [name, setName] = React.useState("loading");
  React.useEffect(() => {
    axios.get("/api/parcel").then((res) => {
      setName(res.data as string);
    });
  }, []);
  return <div>Hi, {name}!</div>;
}
