const mongoose = require("mongoose")

const boards = new mongoose.Schema({
    boardName: String,
    tasks: Array
})

module.exports = mongoose.model("boards", boards)