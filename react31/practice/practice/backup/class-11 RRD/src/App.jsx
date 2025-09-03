import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';

 const App = () => {
  return (
    <div>
    <h1>App Components</h1>
    <Router>
        <Navbar/>
    <Switch>
        <Route path= "/home" component={Home}/>
        <Route path= "/about" component={About}/>
        <Route path= "/service" component={Service}/>
        <Route path= "/contact" component={Contact}/>
    </Switch>
    </Router>
    
    </div>
  )
}

export default App;
