const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/belt_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Mongoose connected!"))
    .catch(err => console.log("Cannot find mongoose!", err))