'use client';
import React from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState } from 'react';

function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}

export default Page;
