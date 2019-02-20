const express = require('express');
const mongoose = require('mongoose');
const Author = require('./models/author');
const Book = require('./models/book');
const User = require('./models/user');
const keys = require('./configs/keys');
const autherRouter = require('./routes/author');

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.set('useCreateIndex', true);
const uri = keys.mongoURI;

app.use(express.json());
app.use('/authors', autherRouter);

mongoose.connect(uri, {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true,
}, (err) => {
    if (!err) {
        console.log("started mongodb connection");
    }
});

// const book1 = new Author({
//     photo: 'ccccccccccccccc',
//     firstName: 'ccccc',
//     lastName: 'aaaaaaaa',
//     dateOfBirth: '12-11-2017',
//     description: 'kkjkjjjjjjkkkjjjjjjjjjjjjjjjjj'
// });
// author1.save((err) => {
//     if (!err) {
//         console.log("saved");
//     }
// });
app.get("/", (req, res) => {
    User.findById('5c6bf824c2ef5e7aa152969b').then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send("err in getting data" + err);
    });
});

app.listen(PORT, (req, res) => {
    console.log("server running");
});
