/** Packages */
const moongose = require("mongoose");

const Schema= moongose.Schema;

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
