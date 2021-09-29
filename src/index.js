import React from "react";
import ReactDOM from "react-dom";

// import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/js/dist/util";

import "../src/components/styles/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown";

import PathFindingVisualizer from "./components/pathfinder/PathFindingVisualizer";

ReactDOM.render(
	<React.StrictMode>
		<PathFindingVisualizer />
	</React.StrictMode>,
	document.getElementById("root")
);
