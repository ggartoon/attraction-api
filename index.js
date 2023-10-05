var express = require('express')
var cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

var app = express()




app.use(cors())

app.get('/Toon_test', function (req, res, next) {
  res.json({msg: 'Hello World'})
})

app.get('attractions', function(req, res, next){
    pool.query("SELECT * FROM attractions", function(err, rows, fields){
        console.log(err)
        res.json(rows)
    })
})

app.listen(80, function () {
  console.log('web server listening on port 80')
})