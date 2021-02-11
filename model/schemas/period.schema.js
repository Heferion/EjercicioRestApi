/** Packages */
const moongose = require("mongoose");

/** Schema creation */
const periodSchema = new moongose.Schema({
    year:{
        type: "Number",
        require: true,
        min: 2020,
        max: 2030
    },
    number:{
        type: "Number",
        require: true,
        min: 1,
        max: 2
    },
    current:{
        type: "Boolean",
        require: true,
        default: true
    }
});

/** Schema exportation */
module.exports = periodSchema;
