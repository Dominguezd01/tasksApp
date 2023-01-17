const express= require("express")
const router = express.Router()
const task = require("../models/tasks")
const { ObjectId } = require("mongodb")

router.post("/updateTask", async(req, res) =>{
    const userData = await req.body
    task.collection.findOne({_id: ObjectId(userData._id)})
    .then(res => query(res))
    
    async function query(result){ 
        if(result != null){
            await task.collection.updateOne({_id:ObjectId(userData._id)}, {$set:{
                task: userData.task
            }})
            res.send("Ok")
        }else{
            res.send({status: "No se encontro ningún usuario asociado a ese identificador"})
        }
    }
})


module.exports = router