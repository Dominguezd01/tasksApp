const express= require("express")
const router = express.Router()
const user = require("../models/users")
const crypto = require("crypto")


router.post("/checkUser", async(req, res) =>{
    const userData = req.body


    const sha = crypto.createHash(userData.password)
})