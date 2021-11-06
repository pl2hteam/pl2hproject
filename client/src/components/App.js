import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import { useSelector } from 'react-redux'
import Home from "../components/pages/Home.js";
import Profile from '../components/pages/Profile';

import Join from "../components/pages/Join"
import Jam from '../components/pages/Jam';
import Calendar from '../components/pages/Calendar'
import Latter from '../components/pages/Latter'
import Mind from '../components/pages/Mind'
import Pic from '../components/pages/Pic'
import Login from '../components/pages/Login'
import LoginPage from "../components/pages/LoginPage/LoginPage"
import RegisterPage from "../components/pages/RegisterPage/RegisterPage"

function App() {
  // const { palette } = useSelector(state => state);
  return (
    <Suspense fallback={<div>Loading...</div>}>

      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Join">
            <Join />
          </Route>
          <Route path="/Jam">
            <Jam />
          </Route>
          <Route path="/Latter">
            <Latter />
          </Route>
          <Route path="/Mind">
            <Mind />
          </Route>
          <Route path="/Pic">
            <Pic />
          </Route>
          <Route path="/Calendar">
            <Calendar />
          </Route>
          <Route path="/">
            <Pic />
          </Route>
        </Switch>
      </div>
    </Suspense>

  );
}

export default App;
