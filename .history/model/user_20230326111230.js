const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
 fullname
})
const User = mongoose.model('User', userSchema);
module.exports = User;