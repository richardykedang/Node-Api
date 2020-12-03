const express = require('express');

const app = express();

// ROUTE
app.get('/', (req, res) => {
    res
        .status(200)
        .json(
                {
                "name":"John",
                "age":30,
                "cars":[ "Ford", "BMW", "Fiat" ]
                }
            );
})
const PORT = 3000
app.listen(3000, ()=>{
    console.log(`App running on port : ${PORT}`)
})