import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="dark:bg-primaryDark dark:text-white">
      <App />
    </div>
  </BrowserRouter>
);
