import React, { useState, useEffect} from "react"; 
import './App.css';
import BagDetailsPage from "./components/BagDetailsPage.js";
import BagForm from "./components/BagForm.js";

const App = () => {
  const [items, setItems] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((itemData) => {
        setItems(itemData);
      });
  }, []);

  const formSubmit = (newBag) => {
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBag),
    })
      .then((response) => response.json())
      .then((newBag) => {
        setItems([...items, newBag])
      });
  };

  console.log(items)

  return (
    <div>
      <BagForm onFormSubmit={formSubmit} />
      <BagDetailsPage items={items} />
    </div>
  );
}

export default App;
