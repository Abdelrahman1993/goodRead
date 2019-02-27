const express = require('express');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./configs/keys');
const autherRouter = require('./routes/authors');
const categoryRouter = require('./routes/categories');
const reviewRouter = require('./routes/review');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/book');
const userBookRouter = require('./routes/userBook');
const adminRouter = require('./routes/admin');
const app = express();
const PORT = process.env.PORT || 4000;
const uri = keys.mongoURI;
const passport = require('passport');
const passportJWT = require('passport-jwt');
const User = mongoose.model('users');
const cors = require('cors');

app.use(cors());



mongoose.set('useCreateIndex', true);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/uploads', express.static('uploads'));
mongoose.Promise = global.Promise;

//start connection to database
mongoose.connect(uri, {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log("started mongodb connection");
    } else {
        console.log(err);
    }
});


////////////////start passport middleware
app.use(passport.initialize());

const JwtStrategy = passportJWT.Strategy;
const extractJWT = passportJWT.ExtractJwt;

const opt = {
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.secretOrKey
}

passport.use(new JwtStrategy(opt, (payload, done) => {

    //console.log(payload);
    User.findById(payload._id)
        .then(user => {
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false)
            }
        })
        .catch(err => {
            console.log(err);
        });

}));


///////////////end of passport middleware
//categories router
app.use('/categories', categoryRouter);

//authors router
    app.use('/authors', autherRouter);

// books router
app.use('/books', bookRouter);
// reviews router
app.use('/review', reviewRouter);
//users router
app.use('/users', userRouter);
//admin router
app.use('/admin', adminRouter);

app.use('/userBook',userBookRouter);

app.listen(PORT, (req, res) => {
    console.log("server running on port: " + PORT);
});

