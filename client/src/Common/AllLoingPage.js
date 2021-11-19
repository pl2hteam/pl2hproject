import React, { Suspense } from "react";
import Auth from "./hoc/auth";
import EmptyPage from "./components/EmptyPage";
import { Route, Switch } from "react-router-dom";
import SnsLoginPage from "../SNS/Main/SnsLogin";
import ShopLoginPage from "../Shop/LoginMainPage/LoginPage/LoginPage";
import ShopMainLogin from "../Shop/LoginMainPage/ShopMainLogin";

const MainPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Auth(EmptyPage, null, null)} />;
      <Route exact path="/shop" component={Auth(ShopMainLogin, false, false)} />
      <Route exact path="/sns" component={Auth(SnsLoginPage, false, true)} />
    </Switch>
  </Suspense>
);

export default MainPage;
