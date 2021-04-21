import React, { useState } from "react"; 

const BagDetailsCard = ({ onFormSubmit }) => {

  const [designer, setDesigner] = useState("")
  const [style, setStyle] = useState("")
  const [size, setSize] = useState("")
  const [material, setMaterial] = useState("")
  const [color, setColor] = useState("") 
  const [condition, setCondition] = useState("")
  const [retailPrice, setRetailPrice] = useState("")

  const newBag = {
    user_id: 1, 
    designer, 
    style, 
    size, 
    material, 
    color, 
    condition, 
    retail_price: retailPrice, 
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onFormSubmit(newBag)
  }

  return (
    <div className="bag-details">
      <div>Upload Image</div>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Designer</label>
          <input type="text" name="Designer" placeholder="Designer" value={designer} onChange={(event) => setDesigner(event.target.value)}/>
        </div>
        <div className="field">
          <label>Style</label>
          <input type="text" name="Style" placeholder="Style" value={style} onChange={(event) => setStyle(event.target.value)}/>
        </div>
        <div className="field">
          <label>Size</label>
          <input type="text" name="Size" placeholder="Size" value={size} onChange={(event) => setSize(event.target.value)}/>
        </div>
        <div className="field">
          <label>Material</label>
          <input type="text" name="Material" placeholder="Material" value={material} onChange={(event) => setMaterial(event.target.value)}/>
        </div>
        <div className="field">
          <label>Color</label>
          <input type="text" name="Color" placeholder="Color" value={color} onChange={(event) => setColor(event.target.value)}/>
        </div>
        <div className="field">
          <label>Condition</label>
          <input type="text" name="Condition" placeholder="Condition" value={condition} onChange={(event) => setCondition(event.target.value)}/>
        </div>
        <div className="field">
          <label>Retail Price</label>
          <input type="text" name="Retail Price" placeholder="Retail Price" value={retailPrice} onChange={(event) => setRetailPrice(event.target.value)}/>
        </div>
        <button className="ui button" type="submit">Get A Quote</button>
      </form>
    </div>
  );
}

export default BagDetailsCard;