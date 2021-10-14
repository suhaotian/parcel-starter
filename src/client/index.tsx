import React from "react";
import ReactDOM from "react-dom";
import App from "~/client/App";
import { getId } from "~/common/utils";

console.log(getId());

ReactDOM.render(<App />, document.getElementById("root"));
