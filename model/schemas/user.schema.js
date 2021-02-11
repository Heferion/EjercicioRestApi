/** Packages */
const moongose = require("mongoose");

/** Schema creation */
const userSchema = new moongose.Schema({
    name:{
        type: "String",
        require: true
    },
    lastname:{
        type: "String",
        require: true
    },
    username:{
        type: "String",
        require: true,
        unique: true
    },
    password:{
        type: "String",
        require: true
    },
    rol:{
        type: "Number",
        require: true
    }

});

/** Schema exportation */
module.exports = userSchema;
