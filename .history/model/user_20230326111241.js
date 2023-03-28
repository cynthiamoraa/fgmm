const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
 fullname:String
})
const User = mongoose.model('User', userSchema);
module.exports = User;