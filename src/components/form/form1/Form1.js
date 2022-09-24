import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


import "./form1.scss"

const isValidEmail = email =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  console.log("Checkbox: ", name, checked);

  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

export const Form1 = () => {



  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch("example"));


  const handleEmailValidation = email => {
    console.log("ValidateEmail was called with", email);

    const isValid = isValidEmail(email);

    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }

    return isValid;
  };


  //use history data
  let navigate = useNavigate();

  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
    console.log("checkedItems: ", checkedItems);
  };

  const checkboxes = [
    {
      name: "Yes",
      key: "checkBox1",
      label: "Check Box 1",
    },
    {
      name: "No",
      key: "checkBox2",
      label: "Check Box 2",
    },
  ];

  return (
    <div className="create-form">
      <h2>User Information</h2>
      <div className="input-details">
        {/* use onSubmit for validation part */}
      <form onSubmit={handleSubmit(onSubmit)} className="user-info">
        <fieldset>
        <input name="userName" type="text" placeholder="User Name" required />
        
        </fieldset>

        <fieldset>
        <input 
          name="email" 
          type="text" 
          placeholder="Email" 
          />
        </fieldset>

        <fieldset>
        <label>Occupation Class: </label>
        <select
          // onChange={(e) => handleAddrTypeChange(e)}
          className="occupation"
        >
          {/* {Add.map((address, key) => (
            <option value={key}>{address}</option>
          ))} */}
          <option value="class1">C1</option>
          <option value="class2">C2</option>
        </select>
        </fieldset>


        {/* create check box component */}
        <fieldset>
        <lable>Do You Smoke : {checkedItems["check-box-1"]} </lable> 
        {checkboxes.map((item) => (
          <label key={item.key}>
            {item.name}
            <Checkbox
              name={item.name}
              checked={checkedItems[item.name]}
              onChange={handleChange}
            />
          </label>
        ))}
        </fieldset>
        
        

        

        <fieldset>
        <button type="submit">Generate Planes</button>
        </fieldset>
        
        
        
      </form>
      </div>
    </div>
  );
};
