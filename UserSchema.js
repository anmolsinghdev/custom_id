const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});
const userModel = mongoose.model("users", UserSchema);
module.exports = userModel;
