import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import Home from "../components/pages/Home.js";
import Profile from "../components/pages/Profile";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import RegisterPage from "../components/pages/RegisterPage/RegisterPage";
import UploadProductPage from "../components/pages/UploadProductPage/UploadProductPage";
import ShopPage from "../components/pages/ShopMainPage/ShopMainPage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
          <Switch>
            {/* MAIN */}
            <Route exact path="/" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />

            {/* SNS */}
            <Route exact path="/sns" component={Auth(Home, false)} />
            <Route path="/sns/profile" component={Auth(Profile, false)} />

            {/* SHOP */}
            <Route exact path="/shop" component={Auth(ShopPage, true)} />
            <Route exact path="/shop/upload" component={Auth(UploadProductPage, true)} />
          </Switch>
        </div>
    </Suspense>
  );
}

export default App;
