import React from 'react';
import Styles from "../groceryitem.module.css";


// reusable card component
const GroceryItem = (item) => {
  console.log(item)
  return <>
    <div className={Styles.card}>
      <div>
        <p>dicount :{item.discount }</p>
      <img src={item.imgURL} alt="" />
        <p>{item.title}</p>
        <p>Selling Price:{item.sellingPrice}</p>
        <p>MRP:{item.mrp}</p>

      </div>
    
    </div>
  </>;
};
export default GroceryItem;
