import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <Link to="/add">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </Link>
        <Link to="/list">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </Link>
        <Link to="/OrdersToGo">
          <img src={assets.order_icon} alt="" />
          <p>OrdersToGo</p>
        </Link>
        <Link to="/OrdersDone">
          <img src={assets.order_icon} alt="" />
          <p>Orders Done</p>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar;
