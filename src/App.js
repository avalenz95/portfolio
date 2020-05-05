import React from 'react'
import './App.sass'
import Dashboard from './components/Dashboard/Dashboard.js'
import Footer from './components/Footer/Footer.js'
import Nav from './components/Nav/Nav.js'
import { HashRouter as Router, Route } from 'react-router-dom'
import Articles from './components/Articles/Articles.js'
import About from './components/About/About.js'
import Projects from './components/Projects/Projects.js'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
