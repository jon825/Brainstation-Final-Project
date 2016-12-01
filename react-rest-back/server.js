const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const path = require('path');

const bodyParser = require('body-parser');
const ProductAttributes = require('./models/productAttributes')

// use the port value from the node environment, or 8080 if it can't be found'
const PORT = process.env.PORT || 3005;
// Change this from 8080 to 80



const userRoutes = require('./routes/user')

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* In your main JS file */

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname+'./../react-rest-front/build/index.html'));
});


// Create instance of Mongoose and connect to our local
// MongoDB database at the directory specified earilier.
mongoose.connect('mongodb://brainstationfinal:nba2kfifa@ds115798.mlab.com:15798/brainstationfinal');

// Log to console any errors or a successful connection.
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log("Connected to db at /data/db/")
});



// ProductAttributes.find({},(err, productAttributes) =>{
//   if(err){
//       console.log(err);
//     }else{
//       console.log(productAttributes)
//     }
//   })





app.get('/strains',(req,res) =>{
  ProductAttributes.find({}, (err, productAttributes) =>{
    if(err){
      console.log(err);
    }else{
      res.send(productAttributes);
    }
  })
})

app.get('/strains/:name' ,(req,res)=>{
  ProductAttributes.findOne({"name": req.params.name},(err, productAttributes) =>{
    if(err){
      console.log(err);
    } else{
      res.send(productAttributes);
      }
  
  })
})

// app.put('/strains/:name' ,(req,res) =>{
//   let newproductAttributes = ProductAttributes(
//     req.body
//   )
//   const query = {"name": req.body.name};
//   ProductAttributes.update(query, update,{},(err, productattributes) =>{
//     if(err){
//       console.log(err);
//     }
//     res.send(productattributes)
//   })
//   console.log(newproductAttributes)

// })


app.post('/strains', (req,res) =>{
  let newproductAttributes = ProductAttributes(
    req.body
  ) 

  newproductAttributes.save((err, saved) =>{
    if(err){
      console.log(err)
    } else {
      res.send(saved)
    }
  })
})

app.use(express.static(__dirname + './../react-rest-front/build'));



app.use('/api/users', userRoutes);


app.listen(PORT, function(){
	console.log("Listening on Port:%s",PORT)
	console.log("Stop with Ctrl+C");
});

