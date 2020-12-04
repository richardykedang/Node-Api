const { json } = require('express');
const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

//READ FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
//console.log(tours)

// ROUTE
//GET ALL DATA
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        message : 'success',
        result : tours.length,
        data : {
            tours
        }
    }) 
});

//GET SINGLE ONE
app.get('/api/v1/tours/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);
    //console.log(tour)
    if(!tour){
        return res.status(404).json({
            status : 'fail',
            data : 'INVALID ID'
        })
    }
    res.status(200).json({
        status : 'success',
        data : {
            tour
        }
    }) 
})

//POST
//CREATE NEW ONE
app.post('/api/v1/tours', (req,res) => {
    //console.log(req.body);
    newId = tours[tours.length - 1].id + 1;
    //console.log(newId);
    newTour = Object.assign({id : newId}, req.body);
    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours), (err) => {
        res.status(200).json({
            message : 'success',
            data : {
                tours : newTour
            }
        })
    })
    //res.send("Done");
})


const PORT = 3000
app.listen(3000, ()=>{
    console.log(`App running on port : ${PORT}`)
})