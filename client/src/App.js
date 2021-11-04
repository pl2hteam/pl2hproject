import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';

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
      </Switch>
    </ThemeProvider>
  );
};

export default App;
