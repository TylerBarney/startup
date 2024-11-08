import React from 'react'
import ItemCard from './itemCard';
export default function Store({itemList}) {
    return (
        <main>
            <div className="items-display">
              {
                itemList.map((item, index) => (
                  <ItemCard key={index} item={item} />
                ))
              }
            </div>
        </main>
    );
  }