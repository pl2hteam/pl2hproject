import React from "react";
import MainForm from "../MainForm/MainForm";
import { withRouter } from "react-router";
import HistoryPage from "./HistoryPage";
import HistoryPageBar from "./HistoryPageBar";

const HistoryPageWrapper = (props) => {
  return (
    <div>
      <MainForm
        childSide={<HistoryPageBar />}
        children={<HistoryPage info={props} />}
      />
    </div>
  );
};

export default withRouter(HistoryPageWrapper);
