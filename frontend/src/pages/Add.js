import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const [emp,setEmp] = useState({
    name:"",
    department:0,
    address:"",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmp((prev) => ({...prev,[e.target.name]:e.target.value}));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
       await axios.post("http://localhost:3333/iemployee",emp);
      navigate("/employee");
    } catch (err) {
      console.log(err);
    }


  }

  return (
    <div className='form'>
      <h1>Add New Employee</h1>  
      <input type="text" placeholder="name" onChange={handleChange} name="name"/>
      <input type="number" placeholder="department" onChange={handleChange} name="department"/>
      <input type="text" placeholder="address" onChange={handleChange} name="address" />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add