const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const PORT = 3005;
const bodyParser = require('body-parser');
const ProductAttributes = require('./models/productAttributes')

const userRoutes = require('./routes/user')

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* In your main JS file */


// Create instance of Mongoose and connect to our local
// MongoDB database at the directory specified earilier.
mongoose.connect('mongodb://localhost/data/db/');

// Log to console any errors or a successful connection.
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log("Connected to db at /data/db/")
});




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



app.use('/api/users', userRoutes);


app.listen(PORT, () => {
	console.log('Server Started on http://localhost:%s',PORT);
	console.log('Press CTRL + C to stop server');
});
