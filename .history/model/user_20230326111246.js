const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
 fullname:String,
 i
})
const User = mongoose.model('User', userSchema);
module.exports = User;