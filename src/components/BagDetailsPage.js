import React from "react";
import BagDetailsContainer from "./BagDetailsContainer.js";

const BagDetailsPage = ({ bags, onEditButtonClick, currentUser }) => {
  console.log('bags', bags)
  return (
    <div>
      <BagDetailsContainer
        bags={bags}
        onEditButtonClick={onEditButtonClick}
        currentUser={currentUser}
      />
    </div>
  );
};

export default BagDetailsPage;
