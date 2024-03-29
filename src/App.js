import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle"
import { useState } from 'react';
import Home from './components/Home';
import Product from './components/Product';

function App() {
  
  const [currentRoute,setCurrentRoute] = useState()
  const [count,setCount] = useState(0)
  const [incount,setIncount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const onChange = () => {
    setCurrentRoute("Home")
  }
  
  
  return (
    <BrowserRouter>
      <nav className="m-1 p-1 border border-info">
        <ul className="nav nav-pills">
          <li>
            <Link onClick={onChange}  className={
              currentRoute=="Home" ? 'btn btn-info ms-1' : 'btn btn-outline-info ms-1'
            } to={"/Home"}>Home</Link>
          </li>
          <li>
            <Link onClick={() => setCurrentRoute("Product")} className={
             currentRoute == "Product" ? 'btn btn-info ms-1': 'btn btn-outline-info ms-1'
            } to={"/Product"} >Product</Link>
          </li>
        </ul>
      </nav>

      <div className='ms-3'>
        <button onClick={increment} className='btn btn-success m-3'>Compter</button>
        <button className='btn btn-danger' onClick={decrement}>Descrement</button>
        <p>Le compteur est : {count} </p>
      </div>


      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
