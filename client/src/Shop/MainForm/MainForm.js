import React from "react";
import { withRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Content from "./Layout/Content";
import Cards from "./Layout/Card";
import RightSideBox from "./rightSideBox/rightSideBox";

const MainForm = ({ children }) => {
  return (
    <div>
      <Layout>
        <Content>
          <Cards>{children}</Cards>
        </Content>
      </Layout>
      <RightSideBox />
    </div>
  );
};
export default withRouter(MainForm);
