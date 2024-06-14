import ReactDOM from "react-dom/client";

import * as App from "./App.jsx"
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App.default/>);