const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    dateofbirth : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true,
        enum : ['male','female','other']
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
    location : {
        type : String,
        required : true
    }
})

const User = mongoose.model("user",UserSchema)

module.exports = User