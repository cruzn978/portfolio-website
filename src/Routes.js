import React from 'react'
import { useLocation, Route, Switch } from "react-router-dom";
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Extras from './Extras'
import { AnimatePresence } from "framer-motion"

function Routes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/extras" component={Extras} />
        <Route exact path="/#" component={Home} />
      </Switch>
    </AnimatePresence>
  );
}
 export default Routes
