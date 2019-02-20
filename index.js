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
const userRouter = require('./routes/users');
const bookRouter = require('./routes/book');
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

//categories router
app.use('/categories', categoryRouter);

//authors router
app.use('/authors', autherRouter);

//users router
app.use('/users',userRouter);
//books router
app.use('/book', bookRouter);

app.listen(PORT, (req, res) => {
    console.log("server running");
});

