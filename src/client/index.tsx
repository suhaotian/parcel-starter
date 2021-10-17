import React from "react";
import ReactDOM from "react-dom";
import App from "/src/client/App";
import { getId } from "/src/common/utils";

console.log(getId());

ReactDOM.render(<App />, document.getElementById("root"));
