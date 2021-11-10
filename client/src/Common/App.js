import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../Common/hoc/auth";

import Home from "../SNS/Home";
import Profile from "../SNS/Profile";
import Calendar from '../SNS/Calendar'
import Latter from '../SNS/Latter'
import Mind from '../SNS/Mind'
import Pic from '../SNS/Pic'
import Jam from "../SNS/Jam"
import Write from "../SNS/Profile/Write"
import SnsLoginPage from "../SNS/Main/ShopLogin"

import ShopLoginPage from "../Shop/MainPage/ShopMainLogin";
import ShopMainPage from "../Shop/ShopMain/ShopMainPage";
import UploadProductPage from "../Shop/UploadProductPage/UploadProductPage";
import DetailProductPage from '../Shop/DetailProductPage/DetailProductPage';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          {/* MAIN */}
          <Route exact path="/" component={Auth(SnsLoginPage, false)} />

          {/* SNS */}
          <Route exact path="/sns" component={Auth(Home, true, true)} />
          <Route path="/sns/profile" component={Auth(Profile, true, true)} />
          <Route path="/sns/Jam" component={Auth(Jam, true, true)} />
          <Route path="/sns/Calendar" component={Auth(Calendar, true, true)} />
          <Route path="/sns/Latter" component={Auth(Latter, true, true)} />
          <Route path="/sns/Mind" component={Auth(Mind, true, true)} />
          <Route path="/sns/Pic" component={Auth(Pic, true, true)} />
          <Route path="/sns/profile/Write" component={Auth(Write, true, true)} />

          {/* SHOP */}
          <Route exact path="/shop" component={Auth(ShopLoginPage, false, false)} />
          <Route exact path="/shop/main" component={Auth(ShopMainPage, true, false)} />
          <Route exact path="/shop/upload" component={Auth(UploadProductPage, true, false)} />
          <Route exact path="/shop/product/:pd_id" component={Auth(DetailProductPage, true, false)} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
