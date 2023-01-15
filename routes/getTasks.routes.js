const express= require("express")
const router = express.Router()
const task = require("../models/tasks")

router.get("/", async (req, res)=>{
    const data = await task.find()
    if(data.length != 0){
        res.send(data)
    }else{
        res.send({status: "No hay tareas asociadas a este tablero"})
    }
})

module.exports = router