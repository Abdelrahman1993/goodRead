const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    
    firstName : String,
    lastName : String,
    userName : String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : String
});


const User = mongoose.model('users',userSchema);
module.exports = User;