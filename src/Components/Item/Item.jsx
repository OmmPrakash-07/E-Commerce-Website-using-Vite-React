import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt={props.name} /></Link>
      <p>{props.name}</p> {/* Fixed: Display product name instead of image URL */}
      <div className="item-prices">
        <div className="item-price-new">
          <span>${props.new_price}</span> 
        </div>
        <div className="item-price-old">
          <span>${props.old_price}</span>
        </div>
      </div>
    </div>
  );
};
