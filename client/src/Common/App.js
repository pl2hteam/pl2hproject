import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../Common/hoc/auth";
import Home from "../SNS/Home";
import Profile from "../SNS/Profile";

import RegisterPage from "../Shop/RegisterPage/RegisterPage";
import ShopMainPage from "../Shop/ShopMain/ShopMainPage";
import UploadProductPage from "../Shop/UploadProductPage/UploadProductPage";
import MainLogin from "../Common/components/MainLogin";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
          <Switch>
            {/* MAIN */}
            <Route exact path="/" component={Auth(MainLogin, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />

            {/* SNS */}
            <Route exact path="/sns" component={Auth(Home, true)} />
            <Route path="/sns/profile" component={Auth(Profile, true)} />

            {/* SHOP */}
            <Route exact path="/shop" component={Auth(ShopMainPage, true)} />
            <Route exact path="/shop/upload" component={Auth(UploadProductPage, true)} />
          </Switch>
        </div>
    </Suspense>
  );
}

export default App;
