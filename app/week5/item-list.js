'use client'
import React from 'react';
import Item from './item';
import { useState } from 'react';
import items from './items.json';

function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Sort the categories
  const sortedCategories = Object.keys(groupedItems).sort();

   // Sort the items within each category
   sortedCategories.forEach(category => {
    groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
  });


  

     const sortedItems = [...items].sort((a, b) => {
       if (sortBy === "name") return a.name.localeCompare(b.name);
       if (sortBy === "category") return a.category.localeCompare(b.category);
       return 0;
     });
  
    return (
      <div>
         <h1>Shopping List</h1>
        <button
          className={`m-2 p-2 ${sortBy === "name" ? "bg-blue-300" : ""}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
           className={`m-2 p-2 ${sortBy === "category" ? "bg-blue-300" : ""}`}
           onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>

        <button 
        className={`m-2 p-2 ${sortBy === "groupedByCategory" ? "bg-blue-300" : ""}`}
        onClick={() => setSortBy("groupedByCategory")}
      >
        Group by Category
      </button>
        


        {sortBy === "groupedByCategory" ? (
        <div>
          {sortedCategories.map(category => (
            <div key={category}>
              <h2 className="capitalize">{category}</h2>
              <ul>
                {groupedItems[category].map(item => (
                  <Item key={item.id} {...item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul>
          {sortedItems.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      )}

    </div>
  );
}

export default ItemList;
