'use client'
import React from 'react';
import Item from './item';
import { useState } from 'react';
import items from './items.json';

function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "category") return a.category.localeCompare(b.category);
      return 0;
    });
  
    return (
      <div>
        <button
          className={sortBy === "name" ? "bg-blue-500" : ""}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={sortBy === "category" ? "bg-blue-500" : ""}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
        <ul>
          {sortedItems.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </ul>
      </div>
    );
}

export default ItemList;
