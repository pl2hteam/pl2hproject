import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import NavBar from "./components/views/NavBar/NavBar";

const App = () => {
  const sections = [
    { title: 'News', url: '/' },
  ];

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div>
      <NavBar title="HOME" sections={sections} />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
