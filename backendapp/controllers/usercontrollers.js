const User = require("../models/Users")
const Contact = require("../models/Contact")
const { response } = require("express")

const insertuser = async (request, response) => {
    try
    {
        const input = request.body
        const newUser = new User(input)
        await newUser.save()
        response.status(200).send("Registered Successfully")
    }
    catch(err)
    {
        response.status(500).send(err.message)
    }
}

const checkuserlogin = async (request, response) =>{
    try
    {
        const input = request.body
        const user = await User.findOne(input)
        response.json(user)
    }
    catch(err)
    {
        response.status(500).send(err.message)
    }
}

const contactform = async (request,response) =>{
    try
    {
        const input = request.body
        const contact = new Contact(input)
        await contact.save()
        response.status(200).send("Your Response Sent Successfully*")
    }
    catch(err)
    {
        response.status(500).send(err.message)
    }
}

module.exports = {insertuser,checkuserlogin,contactform}