import React, { useState } from "react"; 
import { useHistory } from "react-router-dom";

const BagForm = ({ onFormSubmit, bag, onSubmitResaleValueClick }) => {

  const [file, setFile] = useState(bag.file || '')
  const [designer, setDesigner] = useState(bag.designer || '')
  const [style, setStyle] = useState(bag.style || '')
  const [size, setSize] = useState(bag.size || '')
  const [material, setMaterial] = useState(bag.material || '')
  const [color, setColor] = useState(bag.color || '') 
  const [condition, setCondition] = useState(bag.condition || '')
  const [retailPrice, setRetailPrice] = useState(bag.retail_price || '')
  const [resaleValue, setResaleValue] = useState('')

  const history = useHistory();

  const newBag = {
    user_id: 1, 
    featured_image: file, 
    designer, 
    style, 
    size, 
    material, 
    color, 
    condition, 
    retail_price: retailPrice, 
    resale_value: resaleValue
  }

  console.log('form file', file.name)
  console.log('form newbag', newBag)

  const handleSubmit = (event) => {
    event.preventDefault()
    // const formData = new FormData(); 
    // formData.append('file')
    onFormSubmit(newBag)
    history.push("/bags");
  }

  return (
  <div className="bag-details">
      <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
          <label>Upload Image</label>
          <input type="file" accept="image/*" multiple={false} name="File" placeholder="File" onChange={(event) => setFile(event.target.files[0])}/>
        </div>
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
        <div className="field">
          <label>Resale Value</label>
          <input type="text" name="Resale Value" placeholder="Resale Value" value={resaleValue} onChange={(event) => setResaleValue(event.target.value)}/>
        </div>
        <button className="ui button" type="submit">Get A Quote</button>
      </form>
      <button className="ui button" type="submit" onClick={(event) => onSubmitResaleValueClick(resaleValue, bag)}>Submit Resale Value</button>
    </div>
  );
}

export default BagForm;