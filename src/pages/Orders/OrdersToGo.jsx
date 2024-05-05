import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PhoneIcon from '@mui/icons-material/Phone';
import PaymentsIcon from '@mui/icons-material/Payments';
export default function OrdersToGo() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/order/all');
            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error:', error);
            alert('Error fetching orders');
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className='order add'>
            <h3>Order Page</h3>
            <div className="order-list">
                {orders.map((order, index) => (
                    <div key={index} className='order-item'>
                        <img src={assets.parcel_icon} alt="Parcel Icon" />
                        <div>
                            <p className='order-item-name'>  <PermIdentityIcon/> Client Name : {order.name}</p>
                            <div className='order-item-address'>
                                <p> <LocationCityIcon/> {order.address}</p>
                            </div>
                            <p className='order-item-phone'><PhoneIcon/>{order.phone}</p>
                        </div>
                        <div>
                            <p>    <ShoppingBasketIcon/> Order: </p>
                         
                            <ul>
                                {order.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        {item.cheeseId.name} - Quantity: {item.quantity}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p> <PaymentsIcon/> {order.priceTotal} TND</p>
                     
                    </div>
                ))}
            </div>
       
        </div>
    );
}
