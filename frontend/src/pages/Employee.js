import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Employee = () => {

  const [employee,setEmployee] = useState([]);

  useEffect(()=>{
    const fetchAllEmployee = async ()=>{
      try {
        const res = await axios.get("http://localhost:3333/employee");
        console.log(res);
        setEmployee(res.data);
      } catch (err) {
          console.log(err);
      }
    }
    fetchAllEmployee();
  },[]);

  const PersonNames = 
    employee.map(emp=>
      <li key={emp.id}>
        {emp.name}<> - </>{emp.address}
        <button className="delete" onClick={()=>handleDelete(emp.id)} >Delete</button>
        <button className="update"><Link to={`/update/${emp.id}`}>Update</Link></button>
      </li>
    )


  const handleDelete = async (id)=>{
    try {
      await axios.delete("http://localhost:3333/employee/"+id);
     
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>

      <h1>employee</h1>
      <div className="employs">
        <ul>
          {PersonNames}
        </ul>
        {/* {employee.map(emp=>(
          <div className="emp" key={emp.id}>
            <h2>{emp.name}</h2>
            <h2>{emp.address}</h2>

          </div>
        ))} */}
      </div>

    </div>
  )
}

export default Employee;
 