import React from "react";
import ReactDOM from "react-dom";
import Bip39 from "./bip39";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(Bip39),
    document.getElementById("mount")
  );
});
