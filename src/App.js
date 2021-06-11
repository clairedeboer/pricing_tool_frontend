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
  const [token, setToken] = useState(localStorage.getItem("token"));

  const history = useHistory();

  const formSubmit = async (newBag) => {
    console.log("newBag app", newBag);
    const formData = new FormData();
    formData.append("newBag", newBag);
    const response = await fetch("http://localhost:3000/bags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: formData,
      //can't use stringify, use form data instead (see blog)
      //need bag to serialize associated photo in backend
    });
    // const bagData = await response.json();
    if (response.ok) {
      setBags([...bags, newBag]);
    }
  };

  const editButtonClick = async (id) => {
    const response = await fetch(`http://localhost:3000/bags/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
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
    const { user, token } = await response.json();

    if (response.ok) {
      const bagsResponse = await fetch("http://localhost:3000/bags", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const bagsData = await bagsResponse.json();
      setBags(bagsData);
      setCurrentUser(user);
      localStorage.setItem("token", token);
      setToken(token);
    }
    history.push("/");
  };
  //handle token out of date, if don't get user kill setCurrentUser(null)
  //should show Welcome Claire on load
  useEffect(() => {
    const autoLoginFunction = async () => {
      const response = await fetch("http://localhost:3000/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      if (response.ok) {
        const bagsResponse = await fetch("http://localhost:3000/bags", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        const bagsData = await bagsResponse.json();
        setBags(bagsData);
        const meData = await response.json();
        setCurrentUser(meData);
      }
    };
    autoLoginFunction();
  }, [token]);

  //make look like login, line 55 get token from fetch
  const addNewUser = async (newSignup) => {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(newSignup),
    });
    if (response.ok) {
      setCurrentUser(newSignup);
      localStorage.setItem("token", token);
      history.push("/");
    }
  };

  const logout = () => {
    setCurrentUser(null);
    history.push("/users/login");
  };

  const submitResaleValue = async (resaleValue, bag) => {
    const toEditBagId = bag.id;
    const bagsNotToEdit = bags.filter((bag) => bag.id !== toEditBagId);
    const response = await fetch(`http://localhost:3000/bags/${toEditBagId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
