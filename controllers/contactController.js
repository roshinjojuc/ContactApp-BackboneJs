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
        message : "Contact added",
        id: resp._id
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

const deleteContacts = (req,res,next) => {
  console.log("Id is " ,req.params.id);
  Contact.findOneAndDelete({_id : req.params.id})
    .then(data => {
      console.log(data);
      res.status(200).json({
        success : true,
        message : "Data got deleted"
      })
    })
    .catch(err => {
      console.log("Some internal error occured!");
      res.send("Some internal error occured!");
    })
}

const updateContacts = (req,res,next) => {
  console.log("Id is" ,req.params.id);
  Contact.findByIdAndUpdate(req.params.id,{
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    phone_number : req.body.phone_number
  })
  .then(data => {
    console.log("Data Updated");
    res.send(data);
  })
  .catch(err => {
    console.log("Some internal error occured");
    res.send("Some internal error occured!");
  })
}


module.exports = {
  addContacts, getContacts, deleteContacts, updateContacts
}
