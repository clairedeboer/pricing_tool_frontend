import React from "react";
import BagDetailsContainer from "./BagDetailsContainer.js";

const BagDetailsPage = ({ bags, onEditButtonClick, currentUser }) => {
  return (
    <div>
      <BagDetailsContainer bags={bags} onEditButtonClick={onEditButtonClick} currentUser={currentUser} />
    </div>
  );
};

export default BagDetailsPage;
