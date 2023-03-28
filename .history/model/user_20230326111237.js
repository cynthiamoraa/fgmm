const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
 fullname:S
})
const User = mongoose.model('User', userSchema);
module.exports = User;