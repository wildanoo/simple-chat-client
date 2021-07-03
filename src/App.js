import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './views/pages/loginPage';
import MainPage from './views/pages/mainPage';

import './assets/styles/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/:roomId/:userName" component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
