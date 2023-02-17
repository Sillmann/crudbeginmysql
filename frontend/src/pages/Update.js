import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Update = () => {

  const [emp,setEmp] = useState({
    name:"",
    department:0,
    address:"",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const employeeId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setEmp((prev) => ({...prev,[e.target.name]:e.target.value}));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
       await axios.put("http://localhost:3333/iemployee/"+employeeId,emp);
      navigate("/employee");
    } catch (err) {
      console.log(err);
    }


  }

  return (
    <div className='form'>
      <h1>Update the Employee</h1>  
      <input type="text" placeholder="name" onChange={handleChange} name="name"/>
      <input type="number" placeholder="department" onChange={handleChange} name="department"/>
      <input type="text" placeholder="address" onChange={handleChange} name="address" />
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update