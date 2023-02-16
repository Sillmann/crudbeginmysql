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

app.listen(3333, ()=>{
  console.log("Backend ok")
});