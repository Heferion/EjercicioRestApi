/** Packages */
const moongose = require("mongoose");
const valitator = require("mongoose-unique-validator");

/** Schema creation */
const studentSchema = new moongose.Schema({
    code:{
        type: "Number",
        require: true,
        unique: true
    },
    name:{
        type: "String",
        require: true
    },
    lastname:{
        type: "String",
        require: true
    },
    email:{
        type: "String",
        require: true
    },
    phone:{
        type: "Number",
        require: true
    },
    carrer:{
        type: "String",
        require: true
    }
});

/** Schema exportation */
studentSchema.plugin(valitator);
module.exports = studentSchema;
