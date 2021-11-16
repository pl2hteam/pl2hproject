import React from "react";
import MainForm from "../MainForm/MainForm";
import UploadProductPage from "./UploadProduct";
import { withRouter } from "react-router";

const UploadWrapper = (props) => {
  return (
    <MainForm
      children={<UploadProductPage item={props} />}
    />
  );
};

export default withRouter(UploadWrapper);
