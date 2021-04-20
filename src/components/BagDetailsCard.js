import React from "react"; 

const BagDetailsCard = ({user_id, designer, style, size, material, color, condition, retail_price, resale_price}) => {
  

  return (
    <div>
      <div>{designer}</div>
      <div>{style}</div>
      <div>{size}</div>
      <div>{material}</div>
      <div>{color}</div>
      <div>{condition}</div>
      <div>{retail_price}</div>
      <div>{resale_price}</div>
    </div>
  );
}

export default BagDetailsCard;