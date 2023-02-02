import React, { useState } from "react";

let nextId = 0;

function UserForm() {
  const [user, setUser] = useState({
    id: nextId,
    fullName: "",
    birthday: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
  });
  const handleFirstNameInputChange = (event) => {
    event.persist();
    setUser((values) => ({
      ...values,
      fullName: event.target.value,
    }));
  };
  const handleLastNameInputChange = (event) => {
    event.persist();
    setUser((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setUser((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  const [userList, setUserList] = useState([]);
  return (
    <div>
      <form>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={user.firstName}
          onChange={handleFirstNameInputChange} 
        />
        <br></br>
        {/* <input
          placeholder="Enter your Birthday"
          value={user.birthday}
          onChange={(e) => setUser(e.target.value)}
        />
        <br></br>
        <input
          placeholder="Enter your Email Address"
          value={user.email}
          onChange={(e) => setUser(e.target.value)}
        />
        <br></br>
        <input
          placeholder="Enter your Phone Number"
          value={user.phoneNumber}
          onChange={(e) => setUser(e.target.value)}
        />
        <br></br>
        <input
          placeholder="Enter your Complete Home Address"
          value={user.address}
          onChange={(e) => setUser(e.target.value)}
        />
        <br></br>
        <input
          placeholder="Enter your City"
          value={user.city}
          onChange={(e) => setUser(e.target.value)}
        />
        <br></br>
        <input
          placeholder="Enter your Country"
          value={user.country}
          onChange={(e) => setUser(e.target.value)}
        />
        <br></br> */}
        <input
          type="button"
          value="Submit"
          onClick={() => {
            console.log("I Clicked");
            // setUser("");
            setUserList([
              ...userList,
              {
                id: nextId++,
                fullName: user.fullName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                birthday: user.birthday,
                city: user.city,
                country: user.country,
              },
            ]);
            console.log(userList);
          }}
        />
      </form>
    </div>
  );
}

export default UserForm;
