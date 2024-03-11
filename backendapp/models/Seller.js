const mongoose = require("mongoose")

const SellerSchema = mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    }
})

const Seller = mongoose.model("seller",SellerSchema)

module.exports = Seller