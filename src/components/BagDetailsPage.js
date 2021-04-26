import React from "react";
import BagDetailsContainer from "./BagDetailsContainer.js";

const BagDetailsPage = ({ items }) => {
  return (
    <div>
      <BagDetailsContainer items={items} />
    </div>
  );
};

export default BagDetailsPage;
