import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Product from './components/Product';
import Category from "./components/Category";
import NewProduct from "./components/NewProduct";
import NewCategory from "./components/NewCategory";

function App() {
  
  const [currentRoute,setCurrentRoute] = useState()
  const onChange = () => {
    setCurrentRoute("home")
  }
  
  /**
   * Executer un traitement une fois que le rendu est chargé
   */
  useEffect(() => {
    const path = window.location.pathname.toLocaleLowerCase()
    setCurrentRoute(path.slice(1,path.length))
    console.log(path)
  },[])
  
  return (
    <BrowserRouter>
      <nav className="m-1 p-1 border border-info">
        <ul className="nav nav-pills">
          <li>
            <Link onClick={onChange}  className={
              currentRoute==="home" ? 'btn btn-info ms-1' : 'btn btn-outline-info ms-1'
            } to={"/home"}>Home</Link>
          </li>
          <li>
            <Link onClick={() => setCurrentRoute("product")} className={
             currentRoute === "product" ? 'btn btn-info ms-1': 'btn btn-outline-info ms-1'
            } to={"/product"} >Product</Link>
          </li>
          <li>
            <Link to={"/category"} onClick={() => setCurrentRoute("category")} className={
              currentRoute === "category" ? 'btn btn-info ms-1' : "btn btn-outline-info ms-1"
            }>Catégories</Link>
          </li>
          <li>
            <Link to={"/newProduct"} onClick={() => setCurrentRoute("newProduct")} className={
              currentRoute === "newProduct" ? 'btn btn-info ms-1' : "btn btn-outline-info ms-1"
            }>NewProduct</Link>
          </li>
          <li>
            <Link to={"/newCategory"} onClick={() => setCurrentRoute("newCategory")} className={
              currentRoute === "newCategory" ? 'btn btn-info ms-1' : "btn btn-outline-info ms-1"
            }>NewCategory</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/newProduct" element={<NewProduct/>}></Route>
        <Route path="/newCategory" element={<NewCategory/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
