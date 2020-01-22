const express = require('express'); // We need express to create the routes
const mongoose = require('mongoose'); // Connection with MongoDB Atlas
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://lucasdantas:RAvghE457v6aGHm@cluster0-83dbb.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); // localhost:3333