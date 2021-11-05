import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
// import Auth from "../src/hoc/auth";   // 나중에

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import UploadProductPage from './components/views/UploadProductPage/UploadProductPage';

const App = () => {
  const { palette } = useSelector(state => state);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={palette}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/shop" component={LandingPage} />
          <Route exact path="/shop/login" component={LoginPage} />
          <Route exact path="/shop/register" component={RegisterPage} />
          <Route
            exact
            path="/product/upload"
            component={UploadProductPage}
          />
        </Switch>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
