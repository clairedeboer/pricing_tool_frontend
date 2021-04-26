import React from "react"; 
import BagDetailsCard from "./BagDetailsCard.js";

const BagDetailsContainer = ({items}) => {
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
      resaleValue={item.resale_value}

    />)
  })

  return (
    <div>
    {bagCards}
    </div>
  );
}

export default BagDetailsContainer;