import React, { useState } from "react";
import MainForm from "../MainForm/MainForm";
import ShopMainPage from "./ShopMainPage";
import ShopMainBar from "./ShopMainBar";
import { withRouter } from "react-router";

const ShopMainWrapper = () => {
  const [pdFilter, setPdFilter] = useState();
  const getPdFilter = (test) => {
    setPdFilter(test);
  };
  const sendPdFilter = pdFilter;
  //   console.log(pdFilter);
  return (
    <MainForm
      childSide={<ShopMainBar getPdFilter={getPdFilter} />}
      children={<ShopMainPage pdFilter={pdFilter} />}
    />
  );
};

export default withRouter(ShopMainWrapper);
