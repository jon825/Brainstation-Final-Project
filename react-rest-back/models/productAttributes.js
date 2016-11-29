var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productAttributesschema = new Schema({
    name:{type:String, required:true},
    strain_category:{type:String, required:true},
    price:Number,
    imagePath: String,
    description:String,
    effects: [String],
    medical: [String],
    negatives: [String],
    effects_data:[Number],
    medical_data:[Number],
    negatives_data:[Number]
    
});

const ProductAttributes = mongoose.model('ProductAttributes', productAttributesschema);
module.exports = ProductAttributes