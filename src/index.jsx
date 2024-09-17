// import react from 'react';
import "./components/index.css";
import reactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/book";
const ele = document.querySelector("#root");
const root = reactDOM.createRoot(ele);
root.render(
  <Provider>
    <App />
  </Provider>
);
