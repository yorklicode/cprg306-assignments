'use client';
import React from 'react';
import Item from './item';
import { useState } from 'react';

function ItemList({ items: initialItems, onItemSelect, onDeleteItem }) {
  const [sortBy, setSortBy] = useState('name');
  let sortedItems = [...initialItems];
  

  switch (sortBy) {
    case 'name':
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'category':
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
      break;
    default:
      break;
  }

  return (
    <div>
      <div>
        <button
          className={sortBy === 'name' ? 'active' : ''}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <br></br>
        <button
          className={sortBy === 'category' ? 'active' : ''}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map(item => (
          <Item 
            key={item.id} 
            {...item} 
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>

 
    </div>
  );
}

export default ItemList;
