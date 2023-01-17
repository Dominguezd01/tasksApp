const express= require("express")
const router = express.Router()
const task = require("../models/tasks")


router.post("/addTask", async (req, res) =>{
    const userData = await req.body
    if(Object.keys(userData).length != 0){
        task.collection.insertOne(userData)
        res.send("Ok")
    }else{
        res.send({status: "Llego sin nada"})
    }
    
})

module.exports = router