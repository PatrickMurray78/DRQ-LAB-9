const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require("body-parser")
const mongoose = require('mongoose');

// Use cors to read JSON data from the Node/Express server
// This code will avoid a CORS error
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse application/json
app.use(bodyParser.json())

// Open connection to our database
const myConnectionString = 'mongodb+srv://admin:admin@cluster0.3oxak.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser: true});

// Declare Schema and initialise it
const Schema = mongoose.Schema;

var movieSchema = new Schema({
    title:String,
    year:String,
    poster:String
});

// Create data model to represent the movie object we have created
var MovieModel = mongoose.model("movie", movieSchema);

// Get data from /api/movies
app.get('/api/movies', (req, res) => {
   
    //  const mymovies = [
    //       {
    //           "Title":"Avengers: Infinity War",
    //           "Year":"2018",
    //           "imdbID":"tt4154756",
    //           "Type":"movie",
    //           "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //       },
    //       {
    //           "Title":"Captain America: Civil War",
    //           "Year":"2016",
    //           "imdbID":"tt3498820",
    //           "Type":"movie",
    //           "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //       }
    //  ];
    // Read all data from databse and display it on app
    MovieModel.find((err, data) => {
        res.json(data);
    })
    // Status was successful, send message and also the movies
    // res.status(200).json({
    //     message:"Everything is ok",
    //     movies:mymovies});
})

// Reads movie by id from database and returns the movie if id matched
// movie from database
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id);

    MovieModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

// Make post request and console log the movie details to console
// of the movie object passed up by the react app
app.post('/api/movies', (req, res) => {
    console.log('Movie Received!')
    console.log(req.body.title)
    console.log(req.body.year)
    console.log(req.body.poster)

    // Write data to database
    MovieModel.create({
        title:req.body.title,
        year:req.body.year,
        poster:req.body.poster
    })

    res.send('Item Added');
})

// Listen to port 4000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})