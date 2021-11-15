import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Layout from '../Layout/Layout'
import Card from '../Layout/Card';
import SubMenu from '../Menu/SubMenu';
import Sidebar from '../Layout/Sidebar';
import Content from '../Layout/Content';
import Intro from './Intro';
import People from './People';
import Favorite from './Favorite';
import LatterWrite from './LatterWrite'

const Profile = () => {
  const match = useRouteMatch();
  const list = [
 
    {
      id: 1,
      title: '👭내 인맥',
      url: '/people',
    },
    {
      id: 2,
      title: '⭐연인에게~',
      url: '/LatterWrite',
    },
  ];

  return (
    <Layout>
      <Sidebar>
        <Card>
          <SubMenu title="Profile" list={list} />
        </Card>
      </Sidebar>
      <Content>
        <Card>
          <Switch>
            <Route exact path={`${match.path}`} component={Intro} />
            <Route exact path={`${match.path}/intro`} component={Intro} />
            <Route path={`${match.path}/intro/:type`} component={Intro} />
            <Route path={`${match.path}/people`} component={People} />
            <Route path={`${match.path}/favorite`} component={Favorite} />
            <Route path={`${match.path}/LatterWrite`} component={LatterWrite} />
          </Switch>
        </Card>
      </Content>
    </Layout>
  );
};

export default Profile;
