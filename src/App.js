import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard.js'
import Footer from './components/Footer/Footer.js'
import Nav from './components/Nav/Nav.js'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import Articles from './components/Articles/Articles.js'
import About from './components/About/About.js'
import './components/About/About.css'
import Projects from './components/Projects/Projects.js'
import { AnimatePresence } from "framer-motion";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
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
        <Footer />
      </div>
    </Router>
  )
}

export default App;