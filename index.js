const express = require('express');
const mongoose = require('mongoose');
const Author = require('./models/author');
const Book = require('./models/book');
const User = require('./models/user');
const Category = require('./models/category'); 
const keys = require('./configs/keys');
const bodyParser = require('body-parser');
const autherRouter = require('./routes/authors');
const categoryRouter = require('./routes/categories');
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.set('useCreateIndex', true);
const uri = keys.mongoURI;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//start connection to database
mongoose.connect(uri, {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true,
}, (err) => {
    if (!err) {
        console.log("started mongodb connection");
    }
});

// app.get("/", (req, res) => {
//     User.findById('5c6bf824c2ef5e7aa152969b').then((data) => {
//         res.send(data);
//     }).catch((err) => {
//         res.send("err in getting data" + err);
//     });
// });


//categories router
app.use('/categories', categoryRouter);

//authors router
app.use('/authors', autherRouter);

app.listen(PORT, (req, res) => {
    console.log("server running");
});

