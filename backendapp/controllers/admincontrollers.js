const Admin = require("../models/Admin");
const Users = require("../models/Users");
const Contact = require("../models/Contact");
const Seller = require("../models/Seller")


const checkadminlogin = async (request, response) => {
  try {
    const input = request.body;
    console.log(input);
    const admin = await Admin.findOne(input);
    response.json(admin);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const viewusers = async (request, response) => {
  try {
    const users = await Users.find();
    if (users.length == 0) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(users);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const viewSellers = async (request, response) => {
  try {
    const sellers = await Seller.find();
    if (sellers.length === 0) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(sellers);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deleteSeller = async (request, response) => {
  try {
    const email = request.params.email;
    const seller = await Seller.findOne({ "email": email });
    if (seller !== null) {
      await Seller.deleteOne({ "email": email });
      response.send("Seller Deleted Successfully");
    } else {
      response.send("Seller with Email ID Not Found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deleteuser = async (request, response) => {
  try {
    const email = request.params.email;
    const user = await Users.findOne({ "email": email });
    if (user != null) {
      await Users.deleteOne({ "email": email });
      response.send("Deleted Successfully");
    } else {
      response.send("Email ID Not Found");
    }

  } catch (error) {
    response.status(500).send(error.message);
  }
};

const viewresponses = async (request, response) => {
  try {
    const contacts = await Contact.find();
    if (contacts.length == 0) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(contacts);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deleteresponses = async (request, response) => {
  try {
    const email = request.params.email;
    const query = await Contact.findOne({ "email": email });
    if (query != null) {
      await Contact.deleteOne({ "email": email });
      response.send("Deleted Successfully");
    } else {
      response.send("Email ID Not Found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = { checkadminlogin, viewusers, deleteuser, viewresponses, deleteresponses,viewSellers,deleteSeller};
