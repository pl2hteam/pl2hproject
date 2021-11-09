import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import SnsPage from "../SNS/Main/ShopLogin";
import Auth from "../Common/hoc/auth";
import Home from "../SNS/Home";
import Profile from "../SNS/Profile";

import ShopLoginPage from "../Shop/MainPage/ShopMainLogin";
import ShopMainPage from "../Shop/ShopMain/ShopMainPage";
import UploadProductPage from "../Shop/UploadProductPage/UploadProductPage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
          <Switch>
            {/* SNS */}
            <Route exact path="/" component={Auth(SnsPage, false, true)} />
            <Route exact path="/sns" component={Auth(Home, true, true)} />
            <Route path="/sns/profile" component={Auth(Profile, true, true)} />

            {/* SHOP */}
            <Route exact path="/shop" component={Auth(ShopLoginPage, false, false)} />
            <Route exact path="/shop/main" component={Auth(ShopMainPage, true, false)} />
            <Route exact path="/shop/upload" component={Auth(UploadProductPage, true, false)} />
          </Switch>
        </div>
    </Suspense>
  );
}

export default App;
