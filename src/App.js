import React from 'react';
import './App.css';
import Main from './app/Components/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilteredProducts from './app/Components/FilteredProducts/FilteredProducts';
import SingleProduct from './app/Components/FilteredProducts/SingleProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/filteredProducts/:type' element={<FilteredProducts/>}></Route>
        <Route path='/filteredProducts/:type/:id' element={<SingleProduct/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
