import React from "react";
import { withRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Sidebar from "./Layout/Sidebar";
import Content from "./Layout/Content";
import Cards from "./Layout/Card";

const MainForm = ({ childSide, children }) => {
  return (
    <Layout>
      <Sidebar>
        <Cards>{childSide}</Cards>
      </Sidebar>
      <Content>
        <Cards>{children}</Cards>
      </Content>
    </Layout>
  );
};
export default withRouter(MainForm);
