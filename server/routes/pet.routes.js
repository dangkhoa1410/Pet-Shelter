const PetController = require("../controllers/pet.controller");

module.exports = app => {
     //Get ALL
     app.get("/api/pet", PetController.findAllPet);
     //Get ONE
     app.get("/api/pet/:_id", PetController.findOnePet);
     //Add NEW
     app.post("/api/pet/new", PetController.createPet);
     //Delete ONE pet
     app.delete("/api/pet/delete/:_id", PetController.deletePet);
     //Update ONE pet
     app.put("/api/pet/update/:_id", PetController.updatePet);
     //Sort by type
     app.get("/api/pet/sort/type", PetController.sortPet);
     //Find by Name
     app.get("/api/pet/name/:name", PetController.findPetByName);
}