import React from "react"; 

//if user is admin, show all bag cards
//if user is not admin, only show bag cards that match their user_id

const BagDetailsCard = ({ user_id, id, designer, style, size, material, color, condition, retailPrice, resaleValue, onEditButtonClick, currentUser }) => {
  console.log('current user', currentUser)

  return (
    <div className="ui link cards">
      {currentUser?.is_admin && (<span>Admin Portal</span>)}
      <div className="card">
        <div className="image">
          <img src="/images/avatar2/large/matthew.png" alt={style}></img>
        </div>
        <div className="content">
          <div className="header">
            <span className="left floated">
            {designer} {style}
            </span>
            <span className="right floated">
              <button className="small ui button" onClick={(event) => onEditButtonClick(id)}>
              Edit
              </button>
            </span>
          </div>
          <div className="description">Size: {size}</div>
          <div className="description">Material: {material}</div>
          <div className="description">Color: {color}</div>
          <div className="description">Condition: {condition}</div>
        </div>
        <div className="extra content">
          <span className="right floated">
          MSRP: ${retailPrice}
          </span>
          <span className="left floated">
            User Id: {user_id}
          </span>
        </div>
        <div className="extra content">
        <span className="right floated">
          Resale Value: ${resaleValue}
          </span>
        </div>
      </div>
    </div>    
  );
}

export default BagDetailsCard;