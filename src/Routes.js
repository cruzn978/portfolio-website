import React from 'react'
import { useLocation, Route, Switch } from "react-router-dom";
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Extras from './Extras'
import { AnimatePresence } from "framer-motion"
import MetaImg from './MetaImg';

function Routes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/extras" component={Extras} />
        <Route exact path="/" component={Home} />
        <Route exact path="/img" component={MetaImg} />
      </Switch>
    </AnimatePresence>
  );
}
 export default Routes
