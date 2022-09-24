import React, { useRef, useState } from 'react'
import FormInput from './FormInput'
import './form2.scss'
import { Label } from '@mui/icons-material';

const Form2 = () => {
  const [values,setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    string1:"",
    string2:"",
  });
  // const usernameRef = useRef() --> use ref for get value in react form

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"User Name",
      errorMessage:"username should be 3-20 characters and shouldn't include any special character",
      label:"User Name",
      pattern:"^[A-Za-z0-9]{3,20}$",
      required: true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email address",
      label:"Email",
      required: true,
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday",
      required: true,
    },
    {
      id:4,
      name:"string1",
      type:"text",
      placeholder:"Do You Smoke",
      errorMessage:"required",
      label:"Do You Smoke",
      required: true,
    },
    {
      id:5,
      name:"string2",
      type:"text",
      placeholder:"Occupation Class",
      errorMessage:"required",
      label:"Occupation Class",
      required: true,
    }
    
  ]

  
  console.log("re-rendered")

  //make handlesubmit for work submit button
  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(usernameRef)

    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries())) --> create form for get input value
  }

  const onChange = (e) =>{
    setValues({...values,[e.target.name]: e.target.value});
  }

  console.log(values);

  return (
    <div className='demoform'>
      <form onSubmit={handleSubmit}>
        <h1>User Information</h1>
        {inputs.map((input)=>(
          <FormInput 
            key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange}
          />
        ))}
        
        
        <button>Submit</button>

      </form>
    </div>
  )
}

export default Form2


