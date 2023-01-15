const express= require("express")
const router = express.Router()
const task = require("../models/tasks")

router.get("/", async (req, res)=>{
    const data = await task.find()
    console.log(data)
})

module.exports = router