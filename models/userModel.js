const mongoose = require("mongoose");

const User = mongoose.model("User", new mongoose.Schema(), "users");

module.exports = { User };
