const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dateOfEntry: {
    type: Date,
    default: Date.now()
  }
});
module.exports = Item = mongoose.model('user', UserSchema);