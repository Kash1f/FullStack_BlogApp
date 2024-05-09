import express from "express";
import mysql from "mysql";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"KA44$kah",
    database:"test"
})


app.listen(8800, ()=>{
    console.log("Connected to Backend!");
})    
