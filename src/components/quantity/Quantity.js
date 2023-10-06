import React from "react";

function Quantity({ id, quantity, changeQuantity }) {
   const handleClick = (type) => {
      if (type === "increase") {
         changeQuantity(id, quantity + 1);
      } else if (type === "decrease") {
         if (quantity > 1) {
            changeQuantity(id, quantity - 1);
         }
      }
   };

   return (
      <div className="">
         <button className="btn" onClick={() => handleClick("increase")}>
            +
         </button>
         <span>{quantity}</span>
         <button className="btn" onClick={() => handleClick("decrease")}>
            -
         </button>
      </div>
   );
}

export default Quantity;
