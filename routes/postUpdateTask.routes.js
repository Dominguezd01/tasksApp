const express= require("express")
const router = express.Router()
const task = require("../models/tasks")

router.post("/updateTask", async(req, res) =>{
    const userData = await req.body

    if((await task.find({id: userData.id})).length != 0){
        //console.log(userData)
        task.updateOne({id:userData.id}, {$set:{
            task: userData.task
        }})
        res.send("Ok")
    }else{
        res.send("Not ok")
    }
    
    
})


module.exports = router