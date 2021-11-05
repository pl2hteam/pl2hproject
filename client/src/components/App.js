import React,{Suspense} from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import { useSelector } from 'react-redux'
import Home from "../pages/Home";
import Profile from '../pages/Profile';

import Join from '../pages/Join';
import Jam from '../pages/Jam';
import Calendar from '../pages/Calendar'
import Latter from '../pages/Latter'
import Mind from '../pages/Mind'
import Pic from '../pages/Pic'
import Login from '../pages/Login'
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage"
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";

function App() {
  // const { palette } = useSelector(state => state);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
        
          {/* <Route exact path="/" component={Auth(Login, false)} /> */}
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/product/upload"
            component={Auth(UploadProductPage, true)}
          />
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
          <LoginPage />
        </Route>
        </Switch>
      </div>
      <Footer />
 </Suspense>

  );
}

export default App;
