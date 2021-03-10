import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { ApolloProvider } from "@apollo/client";
import client from "./routes/apollo.js";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
