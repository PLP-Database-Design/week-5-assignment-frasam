# Database Interacation in Web Applications

This demonstrates the cconnection of MySQL database and Node.js to create a simple API

## Requirements
- [Node.js](https://nodejs.org/) installed
-  MySQL installed and running
-  A code editor, like [Visual Studio Code](https://code.visualstudio.com/download)

## Setup
1. Clone the repository
2. Initialize the node.js environment
   ```
   npm init -y
   ```
3. Install the necessary dependancies
   ```
   npm install express mysql2 dotenv nodemon
   ```
4. Create a ``` server.js ``` and ```.env``` files
5. Basic ```server.js``` setup
   <br>
   
   ```js
   const express = require('express')
   const app = express()

   
   // Question 1 goes here
   // accessing the end point
app.get('', (req, res)=>{
    // assigning a variable to mysql query
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


   // Question 2 goes here

   app.get('', (req, res)=>{
    // assigning a variable to our query
    const providersRecords = "SELECT first_name, last_name, provider_specialty FROM providers"

    // querying our database
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


   // Question 3 goes here
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


   // Question 4 goes here
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

   

   // listen to the server
   const PORT = 3000
   app.listen(PORT, () => {
     console.log(`server is runnig on http://localhost:${PORT}`)
   })
   ```
<br><br>

## Run the server
   ```
   nodemon server.js
   ```
<br><br>

## Setup the ```.env``` file
```.env
DB_USERNAME=root
DB_HOST=localhost
DB_PASSWORD=your_password
DB_NAME=hospital_db
```

<br><br>

## Configure the database connection and test the connection
Configure the ```server.js``` file to access the credentials in the ```.env``` to use them in the database connection

<br>

## 1. Retrieve all patients
Create a ```GET``` endpoint that retrieves all patients and displays their:
- ```patient_id```
- ```first_name```
- ```last_name```
- ```date_of_birth```

<br>

## 2. Retrieve all providers
Create a ```GET``` endpoint that displays all providers with their:
- ```first_name```
- ```last_name```
- ```provider_specialty```

<br>

## 3. Filter patients by First Name
Create a ```GET``` endpoint that retrieves all patients by their first name

<br>

## 4. Retrieve all providers by their specialty
Create a ```GET``` endpoint that retrieves all providers by their specialty

<br>


## NOTE: Do not fork this repository
