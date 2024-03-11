const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const dburl = "mongodb://localhost:27017/paams"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)   
});

const userroutes = require("./routes/userroutes")
app.use("",userroutes)


const adminroutes = require("./routes/adminroutes")
app.use("",adminroutes)

const sellerroutes = require("./routes/sellerroutes")
app.use("",sellerroutes)

const port = 31792
app.listen(port,()=>{
    console.log(`Server running at port: ${port}`)
})