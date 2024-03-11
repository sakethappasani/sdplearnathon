const sellercontroller = require("../controllers/sellercontroller")

const express = require("express")
const sellerrouter = express.Router()

sellerrouter.post('/insertseller',sellercontroller.insertseller)

module.exports = sellerrouter