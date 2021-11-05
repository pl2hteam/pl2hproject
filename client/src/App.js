import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Join from './pages/Join';
import Jam from './pages/Jam';
import Calendar from './pages/Calendar'
import Latter from './pages/Latter'
import Mind from './pages/Mind'
import Pic from './pages/Pic'



const App = () => {
  const { palette } = useSelector(state => state);

  return (
    <ThemeProvider theme={palette}>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
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
      </Switch>
    </ThemeProvider>
  );
};

export default App;
