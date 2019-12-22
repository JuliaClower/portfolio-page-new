import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeadBar from './components/HeadBar'
import About from './components/About'
import Hello from './components/Hello'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <Router>
      <HeadBar />
      <Switch>
        <Route exact path="/" component={Hello} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} /> */}
      </Switch>
    </Router>
  );
}

export default App;
