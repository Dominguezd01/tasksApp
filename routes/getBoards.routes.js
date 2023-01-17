const express= require("express")
const router = express.Router()
const boards = require("../models/boards")

router.get("/getBoards", async (req, res)=>{
    const data = await boards.find()
    if(data.length != 0){
        res.send(data)
    }else{
        res.send({status: "No hay tareas tableros asociado a este usuario"})
    }
})

module.exports = router