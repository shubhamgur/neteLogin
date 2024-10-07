const mongoose = require('mongoose')
const { Schema } = mongoose;

const blogSchema = new Schema({
  userName: String,
  email: String,
  password: String
});

const user = mongoose.model('neteLogin', blogSchema);
module.exports = user ;
