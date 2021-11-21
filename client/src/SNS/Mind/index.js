import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Layout from '../Layout/Layout'
import Card from '../Layout/Card';
import SubMenu from '../Menu/SubMenu';
import Sidebar from '../Layout/Sidebar';
import Content from '../Layout/Content';
import Intro from './Intro';
import RoomMate from './roomMate';
import LandingPage from './roomMate/LandingPage';
import ResultPage from './roomMate/ResultPage';


const Mind = () => {
  const match = useRouteMatch();
  const list = [
    {
      id: 1,
      title: '⭐룸메이트 찾기',
      url: '/roomMate',
    },
    {
      id: 2,
      title: 'Mbti 찾기',
      url: '/Mbti',
    },
  ];
 
  return (
    <>
      <Layout>
        <Sidebar>
          <Card>
            <SubMenu title="Mind" list={list} />
          </Card>
        </Sidebar>
        <Content>
          <Card>
            <Switch>
        
              <Route exact path={`${match.path}/intro`} component={Intro} />
              <Route exact path={`${match.path}/roomMate`} component={LandingPage} />
     
              <Route
                exact
                path={`${match.path}/roomMate/:type`}
                component={RoomMate} />
              <Route
                exact
                path={`${match.path}/roomMate/result/:finalType`}
                component={ResultPage} />
            </Switch>
          </Card>
        </Content>
      </Layout>
    </>
  );
};

export default Mind;
