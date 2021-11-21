import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../../Common/hoc/auth";

import ShopMainWrapper from "../ShopMain/ShopMainWrapper";
import EasterEgg from "../LoginMainPage/EasterEgg/EasterEgg";
import UploadWrapper from "../UploadProductPage/UploadWrapper";
import DetailProductPageWrapper from "../DetailProductPage/DetailProductPageWrapper";
import CartPageWrapper from "../CartPage/CartPageWrapper";
import HistoryPageWrapper from "../HistoryPage/HistoryPageWrapper";
import { ShopFont } from "./ShopFont";

const ShopMain = () => {
  return (
    <ShopFont>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Switch>
            {/* SHOP */}
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
