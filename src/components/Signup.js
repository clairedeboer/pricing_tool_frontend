import React, { useState } from "react";

const Signup = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSignup = { name, username, password, is_admin: false };
    onSubmit(newSignup);
  };

  return (
    <form
      className="ui form"
      style={{ padding: "25px" }}
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Username</label>
        <input
          type="text"
          name="Username"
          placeholder="Username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="field">
        <label>Password</label>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {/* <div className="ui checkbox">
        <input 
        type="checkbox"
        name="admin"
        onChange={(event) => setIsAdmin(event.target.value)}
        />
        <label>Admin</label>
      </div> */}
      <div>
        <button className="ui button" type="submit">
          Signup
        </button>
      </div>
      
    </form>
  );
};

export default Signup;
