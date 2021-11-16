import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../Common/hoc/auth";

import Home from "../SNS/Home";
import Profile from "../SNS/Profile";
import Calendar from "../SNS/Calendar";
import Latter from "../SNS/Latter";
import Mind from "../SNS/Mind";
import Pic from "../SNS/Pic";
import Jam from "../SNS/Jam";
import Write from "../SNS/Profile/Write";
import LatterWrite from "../SNS/Latter/LatterWrite";
import SnsLoginPage from "../SNS/Main/SnsLogin";
import ContentProfile from "../SNS/ContentProfile";
import UpdateProfile from "../SNS/UpdateProfile";
import MiniRoim from '../Common/miniroom/miniRoom'

function SNSMain() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Switch>
          {/* SNS */}
          <Route
            exact
            path="/sns"
            component={Auth(SnsLoginPage, false, true)}
          />
          <Route exact path="/sns/main" component={Auth(Home, true, true)} />
          <Route path="/sns/profile" component={Auth(Profile, true, true)} />
          <Route path="/sns/Jam" component={Auth(Jam, true, true)} />
          <Route path="/sns/Calendar" component={Auth(Calendar, true, true)} />
          <Route path="/sns/Latter" component={Auth(Latter, true, true)} />
          <Route path="/sns/Mind" component={Auth(Mind, true, true)} />
          <Route path="/sns/Pic" component={Auth(Pic, true, true)} />
          <Route path="/sns/MiniRoim" component={Auth(MiniRoim, true, true)} />

          <Route
            path="/sns/profile/Write"
            component={Auth(Write, true, true)}
          />
          <Route
            path="/ContentProfile"
            component={Auth(ContentProfile, true, true)}
          />
          <Route
            path="/UpdateProfile"
            component={Auth(UpdateProfile, true, true)}
          />
          <Route
            path="/sns/Latter/LatterWrite"
            component={Auth(LatterWrite, true, true)}
          />
        </Switch>
      </div>
    </Suspense>
  );
}

export default SNSMain;
