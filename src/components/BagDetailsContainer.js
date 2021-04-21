import React from "react"; 
import BagDetailsCard from "./BagDetailsCard.js";

const BagDetailsContainer = ({items, onFormSubmit}) => {
  const bagCards = items.map((item)=> {
    return (<BagDetailsCard 
      key={item.id}
      user_id={item.user_id}
      designer={item.designer}
      style={item.style}
      size={item.size}
      material={item.material}
      color={item.color}
      condition={item.condition}
      retailPrice={item.retail_price}
      resalePrice={item.resale_price}
      onFormSubmit={onFormSubmit}
    />)
  })

  return (
    <div>
    {bagCards}
    </div>
  );
}

export default BagDetailsContainer;