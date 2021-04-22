import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/react-resume">
          <Me user={user} />
        </Route>
        <Route path="/react-resume/projects">
          <Projects user={user} />
        </Route>
        <Route path="/react-resume/work">
          <Work user={user} />
        </Route>
        <Route path="/react-resume/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;