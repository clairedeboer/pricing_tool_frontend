import React from "react";
import BagDetailsContainer from "./BagDetailsContainer.js";

const BagDetailsPage = ({ bags, onEditButtonClick }) => {
  return (
    <div>
      <BagDetailsContainer bags={bags} onEditButtonClick={onEditButtonClick} />
    </div>
  );
};

export default BagDetailsPage;
