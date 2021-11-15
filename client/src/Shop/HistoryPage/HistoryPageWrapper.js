import React from "react";
import MainForm from "../MainForm/MainForm";
import { withRouter } from "react-router";
import HistoryPage from "./HistoryPage";

const HistoryPageWrapper = (props) => {
  return (
    <div>
      <MainForm
        children={<HistoryPage info={props} />}
      />
    </div>
  );
};

export default withRouter(HistoryPageWrapper);
