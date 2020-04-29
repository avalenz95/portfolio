import React from 'react'
import './App.sass'
import Dashboard from './components/Dashboard/Dashboard.js'
import Footer from './components/Footer/Footer.js'
import Nav from './components/Nav/Nav.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
