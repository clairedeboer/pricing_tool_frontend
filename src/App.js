import React, { useState, useEffect} from "react"; 
import { Route, Switch } from "react-router-dom";
import './App.css';
import BagDetailsPage from "./components/BagDetailsPage.js";
import BagForm from "./components/BagForm.js";
import NavBar from "./components/NavBar.js"; 
import Login from "./components/Login.js"; 
import Signup from "./components/Signup.js"; 

const App = () => {
  const [bags, setBags] = useState([]); 
  const [bag, setBag] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:3000/bags")
      .then((response) => response.json())
      .then((bagsData) => {
        setBags(bagsData);
      });
  }, []);

  const formSubmit = (newBag) => {
    fetch("http://localhost:3000/bags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBag),
    })
      .then((response) => response.json())
      .then((newBag) => {
        setBags([...bags, newBag])
      });
  };

  const editButtonClick = (id) => {
    fetch(`http://localhost:3000/bags/${id}`)
    .then((response) => response.json())
    .then((bagData) => {
      console.log('bagData', bagData)
      setBag(bagData); 
    });
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/bags">
          <BagForm onFormSubmit={formSubmit} bag={bag} />
        </Route>
        <Route exact path="/">
          <BagDetailsPage bags={bags} onEditButtonClick={editButtonClick}/>
        </Route>
        <Route exact path="/users/login">
          <Login />
        </Route>
        <Route exact path="/users/signup">
          <Signup />
        </Route>
      </Switch>
      
    </div>
  );
}
//which bag's form do I want to show? 
export default App;
