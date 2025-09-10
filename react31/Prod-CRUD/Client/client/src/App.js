import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import {Home} from '../src/Components/Home.jsx'
import {Products} from '../src/Components/Products.jsx'
import {Admin} from '../src/Components/Admin.jsx'
import { CreateProduct } from "./Components/CreateProduct.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/index" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/createproduct" element={<CreateProduct/>}/>


          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
