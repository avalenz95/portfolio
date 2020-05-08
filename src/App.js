import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard.js'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import Articles from './components/Articles/Articles.js'
import About from './components/About/About.js'
import './components/About/About.css'
import Projects from './components/Projects/Projects.js'
import { AnimatePresence } from "framer-motion";
import ParticlesBg from 'particles-bg'


function App() {
  
  
  return (
    <Router>
      <div className="App">
      
        <Route render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Dashboard} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/articles" component={Articles} />
            </Switch>
          </AnimatePresence>
        )} />
        <ParticlesBg type="thick" num={15} color={"#000000"} bg={true} />
      </div>
    </Router>
  )
}

export default App;