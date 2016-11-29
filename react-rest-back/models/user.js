var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:{type: String, required:true},
    password:{type: String, required:true},
    age:{type: Number, min: 19, required:true}
});

const User = mongoose.model('User', userSchema);
module.exports = User;