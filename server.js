const { json } = require('express');
const express = require('express');
const fs = require('fs');

const app = express();

//READ FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
//console.log(tours)

// ROUTE
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        message : 'success',
        result : tours.length,
        data : {
            tours
        }
    }) 
})
const PORT = 3000
app.listen(3000, ()=>{
    console.log(`App running on port : ${PORT}`)
})