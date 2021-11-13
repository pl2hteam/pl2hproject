import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../Common/hoc/auth";

import EmptyPage from "../SNS/EmptyPage"

import Home from "../SNS/Home";
import Profile from "../SNS/Profile";
import Calendar from '../SNS/Calendar'
import Latter from '../SNS/Latter'
import Mind from '../SNS/Mind'
import Pic from '../SNS/Pic'
import Jam from "../SNS/Jam"
import Write from "../SNS/Profile/Write"
import LatterWrite from "../SNS/Latter/LatterWrite";
import SnsLoginPage from "../SNS/Main/ShopLogin"
import ContentProfile from "../SNS/ContentProfile"
import UpdateProfile from "../SNS/UpdateProfile"

import ShopLoginPage from "../Shop/MainPage/ShopMainLogin";
import ShopMainPage from "../Shop/ShopMain/ShopMainPage";
import EasterEgg from "../Shop/MainPage/EasterEgg/EasterEgg";
import UploadProductPage from "../Shop/UploadProductPage/UploadProductPage";
import DetailProductPage from "../Shop/DetailProductPage/DetailProductPage";
import CartPage from "../Shop/CartPage/CartPage";
import MainForm from "../Shop/MainForm/MainForm";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          {/* SNS */}
          <Route exact path="/" component={Auth(EmptyPage, true, true)} />
          <Route exact path="/sns" component={Auth(SnsLoginPage, false, true)} />
          <Route exact path="/sns/main" component={Auth(Home, true, true)} />
          <Route path="/sns/profile" component={Auth(Profile, true, true)} />
          <Route path="/sns/Jam" component={Auth(Jam, true, true)} />
          <Route path="/sns/Calendar" component={Auth(Calendar, true, true)} />
          <Route path="/sns/Latter" component={Auth(Latter, true, true)} />
          <Route path="/sns/Mind" component={Auth(Mind, true, true)} />
          <Route path="/sns/Pic" component={Auth(Pic, true, true)} />
          <Route
            path="/sns/profile/Write"
            component={Auth(Write, true, true)}
          />
          <Route path="/ContentProfile" component={Auth(ContentProfile, false, true)} />
          <Route path="/UpdateProfile" component={Auth(UpdateProfile, false, true)} />
          <Route path="/sns/Latter/LatterWrite" component={Auth(LatterWrite, false, true)} />

          {/* SHOP */}
          <Route
            exact
            path="/shop"
            component={Auth(ShopLoginPage, false, false)}
          />
          <Route
            exact
            path="/shop/main"
            component={Auth(ShopMainPage, true, false)}
          />
          <Route
            exact
            path="/shop/product/:pd_id"
            component={Auth(DetailProductPage, true, false)}
          />
          <Route
            exact
            path="/shop/EasterEgg"
            component={Auth(EasterEgg, null, false)}
          />
          <Route
            exact
            path="/shop/upload"
            component={Auth(UploadProductPage, true, false)}
          />
          <Route
            exact
            path="/shop/cart"
            component={Auth(CartPage, true, false)}
          />
          <Route
            exact
            path="/shop/Test"
            component={Auth(MainForm, true, false)}
          />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
