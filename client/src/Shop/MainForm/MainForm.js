import React from "react";
import { withRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Content from "./Layout/Content";
import Cards from "./Layout/Card";

const MainForm = ({ children }) => {
  return (
    <Layout>
      <Content>
        <Cards>{children}</Cards>
      </Content>
    </Layout>
  );
};
export default withRouter(MainForm);
