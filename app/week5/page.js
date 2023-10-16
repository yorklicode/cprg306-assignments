import React from 'react';
import ItemList from './item-list';

function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;
