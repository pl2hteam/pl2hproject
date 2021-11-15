import React from "react";
import MainForm from "../MainForm/MainForm";
import UploadProductPage from "./UploadProduct";
import UploadBar from "./UploadBar";
import { withRouter } from "react-router";

const UploadWrapper = (props) => {
  return (
    <MainForm
      childSide={<UploadBar />}
      children={<UploadProductPage props={props} />}
    />
  );
};

export default withRouter(UploadWrapper);
