import React, { useState } from 'react';
import './Add.css';

export default function Add() {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Mozzarella",
    store: "La ferme de Beja"
  });

  // Handle changes in form inputs
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('http://localhost:4000/api/cheese/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to add cheese');
      const result = await response.json();
      console.log(result); // Log the response from the server
      alert('Cheese added successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding cheese');
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={handleSubmit}>
        <div className='add-product-name flex-col'>
            <p>Cheese name</p>
            <input name='name' value={data.name} type="text" placeholder='Type here' required onChange={handleChange} />
        </div>
        <div className='add-product-description flex-col'>
            <p>Cheese description</p>
            <textarea name='description' value={data.description} rows={6} placeholder='Write content here' required onChange={handleChange} />
        </div>
        <div className='add-category-price'>
            <div className='add-category flex-col'>
                <p>Cheese category</p>
                <select name='category' value={data.category} onChange={handleChange}>
                    <option value="Mozzarella">Mozzarella</option>
                    <option value="Ricotta">Ricotta</option>
                    <option value="Aged">Aged</option>
                    <option value="Alpine">Alpine</option>
                    <option value="Feta">Feta</option>
                    <option value="Cheddar">Cheddar</option>
                </select>
            </div>
            <div className='add-category flex-col'>
                <p> Cheese Store</p>
                <select name='store' value={data.store} onChange={handleChange}>
                    <option value="La ferme de Beja">La ferme de Beja</option>
                    <option value="Borj Lella">Borj Lella</option>
                    <option value="Maison du Fromage">Maison du Fromage</option>
                    <option value="Essanya Beja">Essanya Beja</option>
                    <option value="Fromagerie Zied maghraoui">Fromagerie Zied maghraoui</option>
                    <option value="Fromage de la nature">Fromage de la nature</option>
                </select>
            </div>
            <div className='add-price flex-col'>
                <p>Cheese Price</p>
                <input type="number" name='price' value={data.price} placeholder='0 TND' required onChange={handleChange} />
            </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  );
}
