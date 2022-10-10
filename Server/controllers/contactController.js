const Contact = require("../models/contacts.js");

const addContacts = (req,res,next) => {
  const contact = new Contact({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    phone_number : req.body.phone_number
  })
  contact.save()
    .then(resp => {
      res.status(200).json({
        success : true,
        message : "Contact added"
      })
    })
    .catch(err => {
      res.status(200).json({
        success :  false,
        message : "Some internal error occured!"
      })
    }) 
}

const getContacts = (req,res,next) => {
  Contact.find({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(200).json({
      success : false,
      message : "Some internal error has occured!"
    })
  }) 
}


module.exports = {
  addContacts, getContacts
}