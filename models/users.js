const mongoose = require("mongoose")

const users = new mongoose.Schema({
    userName: String,
    password:String,
    email:String
})

module.exports = mongoose.model("user", users)
