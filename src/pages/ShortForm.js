import React, { useState } from "react";

const ShortForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            onBlur={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onBlur={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShortForm;
