import React from 'react'
import './App.sass'
import Dashboard from './Dashboard/Dashboard.js'
import Footer from './Footer/Footer.js'
import Nav from './Nav/Nav.js'

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
