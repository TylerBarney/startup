import React from 'react'
import ItemCard from './itemCard';
export default function Store({itemList, isLoggedIn}) {
  return (
        <main>
            <div className="items-display">
              {
                itemList.map((item, index) => (
                  <ItemCard key={item.itemId} item={item} isLoggedIn={isLoggedIn} />
                ))
              }
            </div>
        </main>
    );
  }