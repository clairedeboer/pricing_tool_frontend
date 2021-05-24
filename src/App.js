import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BagDetailsPage from "./components/BagDetailsPage.js";
import BagForm from "./components/BagForm.js";
import NavBar from "./components/NavBar.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import { useHistory } from "react-router-dom";

const App = () => {
  const [bags, setBags] = useState([]);
  const [bag, setBag] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

  //check that fetches succeed with conditionals like addNewUser
  //might need to set bags with bagData instead if need an id
  const formSubmit = async (newBag) => {
    const response = await fetch("http://localhost:3000/bags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBag),
    });
    // const bagData = await response.json();
    if (response.ok) {
      setBags([...bags, newBag]);
    }
  };

  const editButtonClick = async (id) => {
    const response = await fetch(`http://localhost:3000/bags/${id}`);
    const bagData = await response.json();
    setBag(bagData);
    history.push("/");
  };

  const addNewCurrentUser = async (newCurrentUser) => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCurrentUser),
    });
    const loginData = await response.json();
  
    if (response.ok) {
      const bagsResponse = await fetch("http://localhost:3000/bags");
      const bagsData = await bagsResponse.json();
      setBags(bagsData);
      setCurrentUser(loginData);
    }
    history.push("/");
  };

  useEffect(() => {
    const autoLoginFunction = async () => {
      const response = await fetch("http://localhost:3000/me");
      const meData = await response.json();
      setCurrentUser(meData);
    };
    autoLoginFunction();
  }, []);

  const addNewUser = async (newSignup) => {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSignup),
    });
    if (response.ok) {
      setCurrentUser(newSignup);
      history.push("/");
    }
  };

  const logout = () => {
    setCurrentUser(null);
    history.push("/users/login");
  };

  const submitResaleValue = async (resaleValue, bag) => {
    const toEditBagId = bag.id;
    console.log(toEditBagId);
    const bagsNotToEdit = bags.filter((bag) => bag.id !== toEditBagId);
    const response = await fetch(`http://localhost:3000/bags/${toEditBagId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resale_value: resaleValue }),
    });
    const bagData = await response.json();
    if (response.ok) {
      setBags([...bagsNotToEdit, bagData]);
      history.push("/bags");
    }
  };

  return (
    <div>
      <NavBar currentUser={currentUser} logout={logout} />
      <Switch>
        <Route exact path="/">
          <BagForm
            onFormSubmit={formSubmit}
            bag={bag}
            onSubmitResaleValueClick={submitResaleValue}
          />
        </Route>
        <Route exact path="/bags">
          <BagDetailsPage
            bags={bags}
            onEditButtonClick={editButtonClick}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path="/users/login">
          <Login onSubmit={addNewCurrentUser} />
        </Route>
        <Route exact path="/users/signup">
          <Signup onSubmit={addNewUser} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
