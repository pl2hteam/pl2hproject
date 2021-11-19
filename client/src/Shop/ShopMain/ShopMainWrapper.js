import React, { useState } from "react";
import MainForm from "../MainForm/MainForm";
import ShopMainPage from "./ShopMainPage";
import { withRouter } from "react-router";

const ShopMainWrapper = () => {
  return (
    <MainForm
      children={<ShopMainPage />}
    />
  );
};

export default withRouter(ShopMainWrapper);
