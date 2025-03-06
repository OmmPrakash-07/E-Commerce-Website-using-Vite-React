import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Item/Item';

export const ShopCategory = ({ banner, category }) => {  
  const { all_product } = useContext(ShopContext);  

  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={banner} alt="Category Banner" />

      {/* Sorting and Index */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort dropdown" />
        </div>
      </div>

      {/* Products List */}
      <div className="shopcategory-products">
        {all_product &&
          all_product.map((item) => {
            if (category === item.category) {  // ✅ Use `category`, not `props.category`
              return (
                <Item
                  key={item.id}  // Use item.id as the key
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};