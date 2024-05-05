import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from '../src/pages/AddProduit/Add';
import List from './pages/List/List';
import OrdersToGo from './pages/Orders/OrdersToGo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <hr />
        <div className="app-content">
          <Sidebar />
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/OrdersToGo" element={<OrdersToGo />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
