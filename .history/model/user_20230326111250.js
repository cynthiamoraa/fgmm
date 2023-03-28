const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
 fullname:String,
 id_
})
const User = mongoose.model('User', userSchema);
module.exports = User;