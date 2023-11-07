'use client';
import React, { useState } from 'react';
import { useUserAuth } from '../_utils/auth-context'; // Adjust the import path as needed
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

function ShoppingListPage() {
  const { user } = useUserAuth(); // Get the current user
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  

  // Handle adding a new item to the list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Handle selecting an item to display meal ideas
  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(cleanedName);
  };

 
  // If the user is not logged in, do not render the shopping list page
  if (!user) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You must be logged in to view the shopping list.</p>
      </div>
    );
  }

  // Render the shopping list page content if the user is logged in
  return (
    <div>
      <h1>Shopping List</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}

export default ShoppingListPage;
