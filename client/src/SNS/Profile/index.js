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
import Write from './Write';
import { withRouter } from 'react-router';


const Profile = () => {
  const match = useRouteMatch();
  const list = [
    {
      id: 1,
      title: '👩‍💻내 소개',
      url: '/intro',
      child: [
        { id: 1, title: '마이페이지', url: '/default' },
        { id: 3, title: '내 짝궁소개', url: '/dev' },
      ],
    },
    {
      id: 2,
      title: '👭내 인맥',
      url: '/people',
    },

    {
      id: 3,
      title: '⭐즐겨찾기',
      url: '/favorite',
    },
    {
      id: 4,
      title: '⭐즐겨찾기',
      url: '/Write',
    },
  ];

  return (
    <Layout>
      <Sidebar>
        <Card>
          <SubMenu title="마이페이지" list={list} />
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
            <Route path={`${match.path}/Write`} component={Write} />

          </Switch>
        </Card>
      </Content>
    </Layout>
  );
};

export default withRouter(Profile);
