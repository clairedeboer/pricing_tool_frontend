import React, { useState, useEffect} from "react"; 
import './App.css';
import BagDetailsPage from "./components/BagDetailsPage.js";

const App = () => {
  const [items, setItems] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((itemData) => {
        console.log('hit')
        setItems(itemData);
      });
  }, []);

  return (
    <div>
    <BagDetailsPage items={items}/>
    </div>
  );
}

export default App;
