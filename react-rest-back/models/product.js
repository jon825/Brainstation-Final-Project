var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productschema = new Schema({
    imagePath: String,
    title: {type: String, required: true},
    description: String,
    price:{type: Number, required:true}
});

const Product = mongoose.model('Product', productschema);
module.exports = Product