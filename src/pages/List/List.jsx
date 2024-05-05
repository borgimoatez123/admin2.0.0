import React, { useEffect, useState } from 'react';
import './List.css';

export default function List() {
  const [list, setList] = useState([]);

  // Function to fetch all cheese data from the server
  const fetchCheese = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/cheese/all');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error('Error fetching cheese:', error);
      alert('Failed to fetch cheese data');
    }
  };

  // Function to remove a cheese entry by its ID
  const removeFood = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/cheese/del/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete');
      const result = await response.json();
      alert(result.message);  // Display a message with the server's response
      fetchCheese();  // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting cheese:', error);
      alert('Failed to delete cheese');
    }
  };

  // Fetch cheese data when the component mounts
  useEffect(() => {
    fetchCheese();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All cheese List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Category</b>
          <b>Name</b>
          <b>Store</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <p>{item.category}</p>
            <p>{item.name}</p>
            <p>{item.store}</p>
            <p>{item.price} TND </p>
            <p className='cursor' onClick={() => removeFood(item._id)}>x</p>
          </div>
        ))}
      </div>
    </div>
  );
}

