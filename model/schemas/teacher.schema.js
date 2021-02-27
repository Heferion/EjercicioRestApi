/** Packages */
const moongose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const teacherSchema = new moongose.Schema({
    document:{
        type: "String",
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
        require: true,
        unique: true
    },
    phone:{
        type: "String",
        require: true
    },
    office:{
        type: "String",
        require: true
    },
    department:{
        type: "String",
        require: true
    }
});

/** Schema exportation */
teacherSchema.plugin(validator);
module.exports = teacherSchema;
