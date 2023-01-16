const express= require("express")
const router = express.Router()
const task = require("../models/tasks")

router.post("/updateTask", async(req, res) =>{
    const userData = await req.body
    
    task.collection.findOne({id_task: userData.id_task})
    .then(res => query(res))
    
    async function query(result){ 
        if(result != null){
            await task.collection.updateOne({id_task: Number(userData.id_task)}, {$set:{
                id_task: userData.id_task
            }})
            res.send("Ok")
        }else{
            res.send({status: "No se encontro ningún usuario asociado a ese identificador"})
        }
    }
    
    
})


module.exports = router