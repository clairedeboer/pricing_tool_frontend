import React from "react"; 
import BagDetailsCard from "./BagDetailsCard.js";

const BagDetailsContainer = ({ bags, onEditButtonClick, currentUser }) => {
  if (!currentUser || !bags) {
    return null
  }

  const bagCards = bags.map((bag)=> {
    return (<BagDetailsCard 
      key={bag.id}
      id={bag.id}
      user_id={bag.user_id}
      photos={bag.photos}
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
    <div className="container">
    {currentUser?.is_admin && (<span>Admin Portal</span>)}
    {bagCards}
    </div>
  );
}

export default BagDetailsContainer;