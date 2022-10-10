const express = require("express");

const router = express.Router();

const contactController = require("../controllers/contactController.js");

// Get Contacts 

router.get("/getcontacts", contactController.getContacts);

// Add Contacts 

router.post("/addcontacts", contactController.addContacts);

module.exports = router;