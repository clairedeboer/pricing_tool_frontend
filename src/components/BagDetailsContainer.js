import React from "react"; 
import BagDetailsCard from "./BagDetailsCard.js";

const BagDetailsContainer = ({ bags, onEditButtonClick, currentUser }) => {
  console.log(bags)
  const bagCards = bags.map((bag)=> {
    return (<BagDetailsCard 
      key={bag.id}
      id={bag.id}
      user_id={bag.user_id}
      designer={bag.designer}
      style={bag.style}
      size={bag.size}
      material={bag.material}
      color={bag.color}
      condition={bag.condition}
      retailPrice={bag.retail_price}
      resaleValue={bag.resale_value}
      onEditButtonClick={onEditButtonClick}
      currentUser={currentUser}
    />)
  })

  return (
    <div>
    {bagCards}
    </div>
  );
}

export default BagDetailsContainer;