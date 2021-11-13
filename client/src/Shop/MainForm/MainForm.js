import React, { Children } from "react";
import { withRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Sidebar from "./Layout/Sidebar";
import Content from "./Layout/Content";
import Cards from "./Layout/Card";


const MainForm = ({ children }) => {    
  return (
    <Layout>
      <Sidebar>
      </Sidebar>
      <Content>
        <Cards>
          {children}
        </Cards>
      </Content>
    </Layout>

  );
};
export default withRouter(MainForm);
