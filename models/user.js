const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: { type: String, required: "First Name is required" },
    lastName: { type: String, required: "Last Name is required" },
    email: {
        type: String, trim: true, lowercase: true, unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: { type: String, required: "Password is required" },
    photo: {
        type: String,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    selectedBooks:[
    {
        bookId: {type: mongoose.Schema.Types.ObjectId, ref: 'books'},
        rate: { type: Number, default: 0 },
        shelve: { type: String, default: "Not read" },
    }]
    // ,enum["Reading","wantToReading","read"]

});


const User = mongoose.model('users', userSchema);
module.exports = User;