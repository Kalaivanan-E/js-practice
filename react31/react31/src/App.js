
import {NavLink,BrowserRouter as Router,Routes,Route} from 'react-router'
import Navbar from './Navbar';
import Home from './components/Home'

let App=()=>{
    let mystyles={color:"blue"}
    return <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/index"  element={<Home/>}/>
                   
                    <Route path="*" element={<h3 style={mystyles}>404 - Page Not Found</h3>} />
                </Routes>
            </Router>
        </div>
}
export default App;