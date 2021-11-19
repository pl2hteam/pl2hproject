import React from 'react';
import ScrollToTop from '../../Layout/ScrollToTop'
import Landingpage from './LandingPage';
import AllResultPage from './AllResultPage';
import DeveloperPage from './DeveloperPage';
import ResultPage from './ResultPage';



const RoomMate = ({ match }) => {
  let { type } = match.params;
  type = type ? type : 'main';



  const intros = [
    {
      type: 'main',
      component: <Landingpage />,
    },
    {
      type: 'all',
      component: <AllResultPage />,
    },
    {
      type: 'makers',
      component: <DeveloperPage />,
    },
    {
      type: 'result',
      component: <ResultPage />,
    },
  ];
  const { component } = intros.find(item => item.type === type);

  return <ScrollToTop path={type}>{component}</ScrollToTop>;
};

export default RoomMate;
