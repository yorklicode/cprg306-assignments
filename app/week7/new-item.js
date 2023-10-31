'use client'
import React, { useState } from 'react';

function NewItem({ onAddItem }) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (event) => {
      event.preventDefault();

      const newItem = {
          name: itemName,
          quantity: parseInt(quantity, 10),
          category: category
      };

      onAddItem(newItem);

      setItemName('');
      setQuantity(1);
      setCategory('Produce');
  };

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <h2>Add New Item</h2>
              
              <div>
                  <label>
                      Item name:
                      <input 
                          type="text"
                          value={itemName}
                          onChange={e => setItemName(e.target.value)} 
                          placeholder="Enter item name here"
                      />
                  </label>
              </div>

              <div>
                  <label>
                      Quantity:
                      <select 
                          value={quantity}
                          onChange={e => setQuantity(e.target.value)}
                      >
                          {[...Array(10)].map((_, i) => (
                              <option key={i} value={i + 1}>{i + 1}</option>
                          ))}
                      </select>
                  </label>
              </div>

              <div>
                  <label>
                      Category:
                      <select 
                          value={category}
                          onChange={e => setCategory(e.target.value)}
                      >
                          <option value="dairy">Dairy</option>
                          <option value="bakery">Bakery</option>
                          <option value="produce">Produce</option>
                          <option value="meat">Meat</option>
                          <option value="canned goods">Canned Goods</option>
                          <option value="dry goods">Dry Goods</option>
                          <option value="household">Household</option>
                          
                      </select>
                  </label>
              </div>

              <div>
                  <button type="submit">Add Item</button>
              </div>
          </form>

         
      </div>
  );
}

export default NewItem;