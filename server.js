const express = require("express");
const app = express();
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

app.listen(3000, ()=>{
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
//     // assigning a variable to mysql query
    const patientRecord = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients"
    db.query(patientRecord, (err, data)=>{
        if(err){
            res.status(400).send("can't retirve records from mysql")
        }else{
            res.status(200).send(data);
        }
        return
    });
});

// retriveing all providers record
app.get('', (req, res)=>{
    // assigning a variable to our query
    const providersRecords = "SELECT first_name, last_name, provider_specialty FROM providers"

//     // querying our database
    db.query(providersRecords, (err, data)=>{
        // checking for errors form mysql database
        if(err){
            
            res.status(400).send("error retriving records");
        }
        else{
            res.status(200).send(data);
        }
        return;
    });
    
});

// filtering patients by first name
app.get('', (req, res)=>{
    const patietnt_by_firstname = "SELECT first_name FROM patients"
    db.query(patietnt_by_firstname, (err, data)=>{
        if(err){
            res.status(400).send("error accessing records")
        }
        else{
            res.status(200).send(data)
        }
        return;
    })
})

// retrieving records by specialty
app.get('', (req, res)=>{
    // creating variable for query
    let specialty_records = "SELECT specialty FROM providers"
    db.query(specialty_records, (err, data)=>{
        if(err){
            res.status(400).send("error retriving records")
        }
        else{
            res.status(200).send(data)
        }
        return
    })
})