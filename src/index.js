import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import { store } from "./state/store";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-43dt3m2ht1h8z15w.us.auth0.com"
    clientId="4YWBdgwoUDnhFDCpIdoaH1QEXwjeoXP6"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

reportWebVitals();
