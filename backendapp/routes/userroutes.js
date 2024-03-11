const usercontroller = require("../controllers/usercontrollers")

const express = require("express")
const userrouter = express.Router()

userrouter.post("/insertuser",usercontroller.insertuser)
userrouter.post("/checkuserlogin",usercontroller.checkuserlogin)
userrouter.post("/contactform",usercontroller.contactform)

module.exports = userrouter