const express= require("express")
const router = express.Router()
const task = require("../models/tasks")
const { ObjectId } = require("mongodb")

router.post("/updateTask", async(req, res) =>{
    const userData = await req.body
    
    task.collection.findOne({idTask: Number(userData.idTask)})
    .then(res => query(res))
    
    async function query(result){ 
        if(result != null){
            await task.collection.updateOne({idTask:userData.idTask}, {$set:{
                task: userData.task
            }})
            res.send("Ok")
        }else{
            res.send({status: "No se encontro ningún usuario asociado a ese identificador"})
        }
    }
})


module.exports = router