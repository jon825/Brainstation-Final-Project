const express = require('express');
const router = express.Router();
const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const authorize = require('../middleware/authorize')
const User = require('../models/user');


router.post('/encrypt',(req,res) => {
    let email = req.body.email;
    let password = req.body.password;
    let age = req.body.age;
    //generate salt and create a hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
                // Store hash in your password DB. 
                if(err) console.log(err);
                 let newUser = User({
                    email:req.body.email,
                    password:hash,
                    age:req.body.age
                })         
                newUser.save((err, user) =>{
                    if(err){
                    console.log(err)
                    }
                    console.log('user created')
                    console.log(user)
                    res.send(user)   
                })
            });
        });
        
     
});

router.post('/login', (req,res) => {
    
    let email = req.body.email;
    let password = req.body.password;
    console.log(email)

    User.findOne({"email": req.body.email}, (err,data) =>{
        // console.log(data.password)
        if(data === null){
            res
            .status(403)
            .send({data:null})

        }
        else{


         bcrypt.compare(password, data.password.toString(), function(err,result){
            console.log(result)

            if(result){
                let token = jwt.sign({email:email}, 'brainstationkey');
                res.json({token:token});
                
            }
            else{
                res
                .status(403)
                .send({token:null})
            }
            
        })
        console.log(data)

        }
    })
})



router.get('/privatedata',authorize, (req,res) => {
    res.json('I am sensitive and protected user data');
});

module.exports = router;