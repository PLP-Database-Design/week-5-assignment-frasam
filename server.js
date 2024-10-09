const express = require("express");
const app = express();
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

app.listen(3300, ()=>{
    console.log("listen on port 3300");
});

// create an object of mysql 
const db = mysql.createConnection({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

});

// Checking connection to mysql

db.connect((err) =>{
    // if error arises
    if(err){
        return console.log("error connecting to database", err)
    }
    console.log("connection to mysql successfull")

});

// accessing the end point
app.get('', (req, res)=>{
    // assigning a variable to mysql query
    const patientRecord = "SELECT * FROM patients"
    db.query(patientRecord, (err, data)=>{
        if(err){
            res.status(400).send("can't retirve records from mysql")
        }else{
            res.status(200).send(data);
        }
        return
    });
});