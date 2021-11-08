import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import { useSelector } from "react-redux";
import Home from "../components/pages/Home.js";
import Profile from "../components/pages/Profile";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import RegisterPage from "../components/pages/RegisterPage/RegisterPage";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
          <Switch>
            <Route exact path="/" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/home" component={Auth(Home, false)}>
              <Home />
            </Route>
            <Route path="/Jam" />


            <Route
              exact
              path="/product/upload"
              component={Auth(UploadProductPage, true)}
            />
          </Switch>
        </div>
    </Suspense>
  );
}

export default App;
