// initialing variable

const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

app.use(express.json());
app.use(cors());
dotenv.config();

// connect to the database

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME


});

db.connect((err) =>{
    // if any error 
    if(err) return console.log ("cannot connect to the database");
    console.log("sucessfully connect to the database with id", db.threadId)
});


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//  question 1 
app.get('/data', (req,res) =>{
    db.query('SELECT * FROM patients', (err, results) =>{
        if(err) { 
            console.log(err);
            res.status(500).send("Error retrieving data from the database");
        } else {
            res.render('data', {results: results});
        }
          

    }); 
});


// listen to the server
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`listen to port ${PORT}`)

    app.get('/', (req,res) =>{
        res.send("server successfully started");
    });
});



