import React ,{useState,useEffect}from 'react';
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
import List from "./list"




////////////////////////////////////////d

import Axios from "axios";


import { useSelector } from "react-redux";

const { Meta } = Card;

const Profile = (props) => {
  const match = useRouteMatch();






  






  
  const list = [
  
    {
      id: 1,
      title: '👭내 인맥',
      url: '/people',
    },
    {
      id: 2,
      title: '⭐내 즐겨찾기',
      url: '/favorite',
    },
    {
      id: 3,
      title: '⭐갤러리',
      url: '/Write',
    },
  ];

  return (
    <Layout>
      <Sidebar>
        <Card>
          <List/>
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
            <Route path={`${match.path}/Write`} component={Write} />
          </Switch>
        </Card>
      </Content>
    </Layout>
  );
};

export default Profile;


// import React from "react";
