import "./index.css";
import react from "react";
import reactDom from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");

const root = reactDom.createRoot(el);

root.render(<App />);
