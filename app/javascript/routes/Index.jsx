import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Teachers from "../components/Teachers";
import Teacher from "../components/Teacher";
import TeacherCard from "../components/TeacherCard";



export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/teachers" exact component={Teachers} />
      <Route path="/teachers/:id" exact component={Teacher} />
    </Switch>
  </Router>
);