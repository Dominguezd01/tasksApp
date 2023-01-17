const express= require("express")
const router = express.Router()
const task = require("../models/tasks")
const { ObjectID } = require("bson")
const { query } = require("express")

router.post("/deleteTask", async (req, res)=>{
    let userData = await req.body

    task.collection.findOne({_id:ObjectID(userData._id)})
    .then(result => query(result))

    function query(result){
        if(result !=null){
            task.collection.deleteOne({_id: result._id})
            res.send({statusText: "Elemento borrado correctamente"})
        }else{
            res.send({error: "Ha ocurrido un problema"})
        }
    }
})

module.exports = router