const express= require("express")
const router = express.Router()
const boards = require("../models/boards")


router.post("/addBoard", async (req, res) =>{
    const userData = await req.body
    if(Object.keys(userData).length != 0){
        boards.collection.insertOne(userData)
        res.send("Ok")
    }else{
        res.send({status: "Llego sin nada"})
    }
    
})

module.exports = router