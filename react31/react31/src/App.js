import { BrowserRouter as Router,Route,Switch} from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Navbar";
import { About } from "./Component/About";
import { Home } from "./Component/Home";
import { Service } from "./Component/Service";
import { Contact } from "./Component/Contact";
import { Product } from "./Component/Product";




function App() {
  return (
    <div>
      <h2>App components</h2>
    
    <Router>
      <Navbar/>
      <Switch>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Service}/>
                <Route path="/index" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/product" component={Product}/>
              </Switch>
    </Router>
    
      
     
    </div>
  );
}

export default App;
