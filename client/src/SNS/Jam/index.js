import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Layout from '../Layout/Layout'
import Card from '../Layout/Card';
import SubMenu from '../Menu/SubMenu';
import Sidebar from '../Layout/Sidebar';
import Content from '../Layout/Content';
import Play from './Play';
import Favorite from './Favorite';
import Write from './Write'

const Profile = () => {
  const match = useRouteMatch();
  const list = [
    {
      id: 1,
      title: '👭내 인맥',
      url: '/play',
    },
    {
      id: 2,
      title: '⭐내 즐겨찾기',
      url: '/favorite',
    },
    {
      id: 3,
      title: '⭐지도',
      url: '/Write',
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
            <Route exact path={`${match.path}`} component={Play} />
            <Route exact path={`${match.path}/Play`} component={Play} />
            <Route path={`${match.path}/favorite`} component={Favorite} />
            <Route path={`${match.path}/Write`} component={Write} />
          </Switch>
        </Card>
      </Content>
    </Layout>
  );
};

export default Profile;
