const {Pet} = require("../models/pet.models");

//Get ALL the Pet
module.exports.findAllPet = (req, res) => {
    Pet.find()
        .then(allPet => res.json({allPet: allPet}))
        .catch(err => res.json({message: "Error when getting all the Pet!", error: err}))
}

//Get ONE instance of Pet
module.exports.findOnePet = (req, res) => {
    Pet.findOne({_id: req.params._id})
        .then(onePet => res.json({onePet: onePet}))
        .catch(err => res.json({message: "Error when getting one Pet!", error: err}))
}

//Post a NEW Pet
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({newPet: newPet}))
        .catch(err => res.json({message: "Error when adding a Pet to the database!", error: err}))
}

//DELETE a Pet
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params._id})
        .then(res.json({message: "Pet was successfully removed!"}))
        .catch(err => res.json({message: "Error when trying to delete a Pet!", error: err}))
}

//UPDATE a Pet
module.exports.updatePet = (req, res) => {
    Pet.updateOne({_id: req.params._id}, {
        $set: req.body
    }, {runValidators: true})
        .then(onePet => res.json({onePet: onePet}))
        .catch(err => res.json({message: "Error when trying to update a Pet!", error: err}))
}

//Sort by type
module.exports.sortPet = (req, res) => {
    Pet.aggregate([{ $sort: {type: 1} }])
        .then(allPet => res.json({allPet: allPet}))
        .catch(err => res.json({message: "Error when trying to sort Pet!", error: err}))
}

//Get Pet by name
module.exports.findPetByName = (req, res) => {
    Pet.findOne({name:req.params.name})
        .then(onePet => res.json({onePet: onePet}))
        .catch(err => res.json({message: "Error when getting the Pet with specific name!", error: err}))
}