import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import { useSelector } from 'react-redux'
import Home from "../components/pages/Home.js";
import Profile from '../components/pages/Profile';

import Join from "../components/pages/Join"
import Jam from '../components/pages/Jam';
import Calendar from '../components/pages/Calendar'
import Latter from '../components/pages/Latter'
import Mind from '../components/pages/Mind'
import Pic from '../components/pages/Pic'
import Login from '../components/pages/Login'
import LoginPage from "../components/pages/LoginPage/LoginPage"
import RegisterPage from "../components/pages/RegisterPage/RegisterPage"
import UploadProductPage from "./pages/UploadProductPage/UploadProductPage";
import ShopMainPage from "./pages/ShopMainPage/ShopMainPage";
import DetailProductPage from "./pages/DetailProductPage/DetailProductPage";

function App() {
  // const { palette } = useSelector(state => state);
  return (
    <Suspense fallback={<div>Loading...</div>}>

      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Join">
            <Join />
          </Route>
          <Route exact path="/Jam">
            <Jam />
          </Route>
          <Route exact path="/Latter">
            <Latter />
          </Route>
          <Route exact path="/Mind">
            <Mind />
          </Route>
          <Route exact path="/Pic">
            <Pic />
          </Route>
          <Route exact path="/Calendar">
            <Calendar />
          </Route>
          <Route exact path="/">
            <Pic />
          </Route>
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product" component={Auth(ShopMainPage, false)} />
          <Route
            exact
            path="/product/:pdNumber"
            component={Auth(DetailProductPage, null)}
          />
        </Switch>
      </div>
    </Suspense>

  );
}

export default App;
