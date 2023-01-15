const mongoose = require("mongoose")




const task = new mongoose.Schema({
    taskContent: String
})

module.exports = mongoose.model("task", task)
