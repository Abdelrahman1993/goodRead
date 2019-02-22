const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: { type: String, required: "First Name is required" },
    lastName: { type: String, required: "Last Name is required" },
    userName: { type: String, trim: true, required: 'Username is required' },
    email: {
        type: String, trim: true, lowercase: true, unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: { type: String, required: "Password is required" },
    photo: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
});


const User = mongoose.model('users', userSchema);
module.exports = User;