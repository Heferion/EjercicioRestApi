/** Packages */
const moongose = require("mongoose");

/** Schema creation */
const courseSchema = new moongose.Schema({
    code:{
        type: "String",
        require: true
    },
    name:{
        type: "String",
        require: true
    }
});

/** Schema exportation */
module.exports = courseSchema;
