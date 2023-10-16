import React from 'react';

function Item({ name, quantity, category }) {
  return (
    <li className="p-2 mb-2 border rounded shadow">
      <p className="font-bold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}

export default Item;
