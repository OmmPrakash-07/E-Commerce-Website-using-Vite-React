import React from 'react';
import './NewCollections.css';
import data_product from '../Assets/new_collections'; // Import actual new_collections array
import { Item } from '../Item/Item';

export const NewCollections = () => {
  return (
    <div className='newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {data_product.map((item,i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};
