import React from "react";
import Quantity from "../quantity/Quantity";

const Items = (props) => {
   const { items, del } = props;
   let length = items.length;
   const ListItem = length ? (
      items.map((item) => {
         return (
            <div key={item.id} className="item">
               <p>{item.product}</p>
               <p>{item.price}</p>
               <Quantity
                  id={item.id}
                  quantity={item.quantity}
                  changeQuantity={props.change}
               />
               <p className="delete" onClick={() => del(item.id)}>
                  &times;
               </p>
            </div>
         );
      })
   ) : (
      <div className="text">There are no items, Try to add some.</div>
   );
   return (
      <div>
         <div className="header item">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Edit</p>
         </div>
         {ListItem}
      </div>
   );
};

export default Items;
