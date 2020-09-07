import React from 'react'
import { useLocation, Route, Switch } from "react-router-dom";
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Extras from './Extras'
import Example from './example'
import { AnimatePresence } from "framer-motion"

function Routes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/extras" component={Extras} />
        <Route path="/example" component={Example} />

      </Switch>
    </AnimatePresence>
  );
}
 export default Routes
