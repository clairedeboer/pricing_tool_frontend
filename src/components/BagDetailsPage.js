import React from "react"; 
import BagDetailsContainer from "./BagDetailsContainer.js";

const BagDetailsPage = ({items, onFormSubmit}) => {
  

  return (
    <div>
    <BagDetailsContainer items={items} onFormSubmit={onFormSubmit}/>
    </div>
  );
}

export default BagDetailsPage;