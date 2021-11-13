import React, { Children } from "react";
import { withRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Sidebar from "./Layout/Sidebar";
import Content from "./Layout/Content";
import Cards from "./Layout/Card";
import Setting from "../../Common/Setting";

const MainForm = ({ children, childSide }) => {    
  return (
    <div>
      <Layout>
        <Sidebar>
          <Cards>
            {childSide}
          </Cards>
        </Sidebar>
        <Content>
          <Cards>
            {children}
          </Cards>
        </Content>
      </Layout>
      <Setting />
    </div>
    
  );
};
export default withRouter(MainForm);
