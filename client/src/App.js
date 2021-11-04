import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Join from "./routes/join";
import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/join" component={Join} />
      {/* <Route path="/movie/:id" component={join} /> */}
    </HashRouter>
  );
}

export default App;
