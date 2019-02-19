const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const app =express();
const keys=require('./configs/keys');
const PORT = process.env.PORT || 3000;
mongoose.set('useCreateIndex', true);
const uri=keys.mongoURI;
app.use(express.json());
mongoose.connect(uri,{
    autoReconnect:true,
    reconnectTries:Number.MAX_VALUE,
    useNewUrlParser:true,
    },(err)=>{
    if(!err){
        console.log("started mongodb connection");
    }
    });

// const user1=new User({
//         firstName:'abdo',
//         lastName:'abdo',
//         userName:'abdao',
//         email:'abdo123@hh.hh',
//         password:'123',
//     });
//      user1.save((err)=>{
//          if(!err){
//              console.log("saved");
//          }
//      });
app.get("/",(req,res)=>{
    User.findById('5c6bf824c2ef5e7aa152969b').then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send("aaaaa");
    });
    
});



app.listen(PORT,(req,res)=>{
console.log("server running");
});

