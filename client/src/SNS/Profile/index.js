import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Layout from '../Layout/Layout'
import Card from '../Layout/Card';
import SubMenu from '../Menu/SubMenu';
import Sidebar from '../Layout/Sidebar';
import Content from '../Layout/Content';
import Intro from './Intro';
import Favorite from './Favorite';
import Write from './Write';
import { withRouter } from 'react-router';
import { useState } from 'react';


const Profile = () => {
  const match = useRouteMatch();
  const list = [
    {
      id: 3,
      title: 'dadadad',
      url: '/Dev',
    },
    {
      id: 3,
      title: '⭐sns글쓰기',
      url: '/Write',
    },
  ];
const [mbti, setMbti] = useState([]);

  const onMbti = (type) => {
    setMbti(type)
  }

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
            <Route path={`${match.path}/favorite`} component={Favorite} />
            <Route path={`${match.path}/Write`} component={Write} />

          </Switch>
        </Card>
      </Content>
    </Layout>
  );
};

export default withRouter(Profile);
