import React from "react";
import { Route } from "react-router-dom";
import Auth from "../Common/hoc/auth";
import EmptyPage from "./components/EmptyPage";

function MainPage() {
  return <Route exact path="/" component={Auth(EmptyPage, null, null)} />;
}

export default MainPage;
