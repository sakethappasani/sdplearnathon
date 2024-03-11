const AdminController = require("../controllers/admincontrollers");
const express = require("express");

const adminrouter = express.Router();

adminrouter.post("/checkadminlogin", AdminController.checkadminlogin);
adminrouter.get("/viewusers", AdminController.viewusers);
adminrouter.delete("/deleteuser/:email", AdminController.deleteuser);
adminrouter.get("/viewresponses", AdminController.viewresponses); 
adminrouter.delete("/deleteresponses/:email", AdminController.deleteresponses);
adminrouter.get("/viewsellers", AdminController.viewSellers); 
adminrouter.delete("/deleteseller/:email", AdminController.deleteSeller);

module.exports = adminrouter;
