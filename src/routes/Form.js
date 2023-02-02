import React, { useState } from "react";


function UserForm() {
  const [temp, setTemp] = useState({});
  // const handleFullNameInputChange = (event) => {
  //   event.persist();
  //   setUser((user) => ({
  //     ...user,
  //     fullName: event.target.value,
  //   }));
  // };
  function handleChange(evt) {
    const value = evt.target.value;
    setTemp({
      ...temp,
      [evt.target.name]: value,
    });
  }
  const [userList, setUserList] = useState([{}]);
  return (
    <div>
      <form>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={temp.firstName}
          onChange={handleChange}
        />
        <br></br>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={temp.firstName}
          onChange={handleChange}
        />
        <br></br>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={temp.firstName}
          onChange={handleChange}
        />
        <br></br>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="Address"
          name="address"
          value={temp.firstName}
          onChange={handleChange}
        />
        <br></br>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="City"
          name="city"
          value={temp.firstName}
          onChange={handleChange}
        />
        <br></br>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="Date of Birth"
          name="birthday"
          value={temp.firstName}
          onChange={handleChange}
        />
        <br></br>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="Country"
          name="country"
          value={temp.firstName}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="button"
          value="Submit"
          onClick={() => {
            setUserList([
              ...userList,
              {
                temp,
              },
            ]);
            console.log(temp);
            console.log(userList);
          }}
        />
      </form>
    </div>
  );
}

export default UserForm;
