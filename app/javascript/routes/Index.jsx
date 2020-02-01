import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Teachers from '../components/Teachers';
import Teacher from '../components/Teacher';
import Meetings from '../components/meetings/Meetings';
import newteacher from '../components/newteachers/Index';


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/teachers" exact component={Teachers} />
      <Route path="/meetings" exact component={Meetings} />
      <Route path="/new_teacher" exact component={newteacher} />
      <Route path="/teacher/:id" exact component={Teacher} />
    </Switch>
  </Router>
);
