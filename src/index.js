// index file usually is just some set up at the beginning of project

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import this file so that the properties can be applied to all css file 
// including App.css ( why ? )
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));