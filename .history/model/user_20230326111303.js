const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
 fullname:String,
 id_number:
})
const User = mongoose.model('User', userSchema);
module.exports = User;