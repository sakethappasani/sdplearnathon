const Seller = require("../models/Seller")

const insertseller = async (request,response) =>{
    try
    {
        const input = request.body
        const newSeller = new Seller(input)
        await newSeller.save()
        response.status(200).send("Registered Successfully")
    }
    catch(err)
    {
        response.status(500).send(err.message)
    }
}

module.exports = {insertseller}