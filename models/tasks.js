const mongoose = require("mongoose")




const task = new mongoose.Schema({
    idTask:Number,
    taskContent: String
})

module.exports = mongoose.model("task", task)
