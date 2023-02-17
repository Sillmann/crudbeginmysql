import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"silman",
  database:"crud"
})

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.json("Ola backend");
});

app.get("/employee", (req,res)=>{
  const q = "SELECT * FROM employee";
  db.query(q,(err,data)=>{
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.post("/iemployee",(req,res)=>{
  const q = "INSERT INTO employee (`name`,`department`,`address`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.department,
    req.body.address,
  ]
  // const values = ["teste",1,"llllll"];
  db.query(q,[values],(err,data)=>{
    if (err) return res.json(err);
    return res.json(data); 
  })
})

app.delete("/employee/:id", (req,res)=>{
  const employeeId = req.params.id;
  const q = "DELETE FROM employee WHERE id = ?";

  db.query(q,[employeeId],(err,data)=>{
    if (err) return res.json(err);
    return res.json("Employee has been deleted successfully."); 
  })

})

app.put("/iemployee/:id", (req,res)=>{
  const employeeId = req.params.id;
  const q = "UPDATE employee SET `name` = ?, `department` = ?, `address` = ? WHERE id = ?";
  const values = [
    req.body.name,
    req.body.department,
    req.body.address,
  ]

  db.query(q,[...values,employeeId],(err,data)=>{
    if (err) return res.json(err);
    return res.json("Employee has been updated successfully."); 
  })

})

app.listen(3333, ()=>{
  console.log("Backend ok")
});