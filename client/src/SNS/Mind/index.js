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
    // {
    //   id: 1,
    //   title: '👩‍💻심리테스트',
    //   url: '/intro',
    //   child: [
    //     { id: 1, title: '기본정보', url: '/default' },
    //     { id: 2, title: '기술 및 히스토리', url: '/dev' },
    //     { id: 3, title: 'TMI 자문자답', url: '/qna' },
    //   ],
    // },
    {
      id: 1,
      title: '⭐룸메이트 찾기',
      url: '/roomMate',
      // child: [
      //   { id: 1, url: '/all' },
      //   { id: 2, url: '/makers' },
      //   { id: 3, url: '/result' },
      // ],
    },
    {
      id: 2,
      title: 'Mbti 찾기',
      url: '/Mbti',
      // child: [
      //   { id: 1, url: '/all' },
      //   { id: 2, url: '/makers' },
      //   { id: 3, url: '/result' },
      // ],
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
