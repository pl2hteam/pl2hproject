import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../Common/hoc/auth";

import ShopLoginPage from "../Shop/LoginMainPage/ShopMainLogin";
import ShopMainWrapper from "../Shop/ShopMain/ShopMainWrapper";
import EasterEgg from "../Shop/LoginMainPage/EasterEgg/EasterEgg";
import UploadWrapper from "../Shop/UploadProductPage/UploadWrapper";
import DetailProductPageWrapper from "../Shop/DetailProductPage/DetailProductPageWrapper";
import CartPageWrapper from "../Shop/CartPage/CartPageWrapper";
import HistoryPageWrapper from "../Shop/HistoryPage/HistoryPageWrapper";
import styled from "styled-components";

const ShopFont = styled.div`
  @font-face {
    font-family: "CookieRun-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: "CookieRun-Regular";
  }
`;

function ShopMain() {
  return (
    <ShopFont>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Switch>
            {/* SHOP */}
            <Route
              exact
              path="/shop"
              component={Auth(ShopLoginPage, false, false)}
            />
            <Route
              exact
              path="/shop/main"
              component={Auth(ShopMainWrapper, true, false)}
            />
            <Route
              exact
              path="/shop/product/:pd_id"
              component={Auth(DetailProductPageWrapper, true, false)}
            />
            <Route
              exact
              path="/shop/EasterEgg"
              component={Auth(EasterEgg, true, false)}
            />
            <Route
              exact
              path="/shop/upload"
              component={Auth(UploadWrapper, true, false)}
            />
            <Route
              exact
              path="/shop/cart"
              component={Auth(CartPageWrapper, true, false)}
            />
            <Route
              exact
              path="/shop/purch"
              component={Auth(HistoryPageWrapper, true, false)}
            />
          </Switch>
        </div>
      </Suspense>
    </ShopFont>
  );
}

export default ShopMain;
