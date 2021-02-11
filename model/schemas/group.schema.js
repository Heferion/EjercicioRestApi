/** Packages */
const moongose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

/** Schema creation */
const groupSchema = new moongose.Schema({
    course_id:{
        type: mongooseUniqueValidator.Schema.Types.ObjectId,
        ref: "coll_course",
        require: true
    },
    period_id:{
        type: mongooseUniqueValidator.Schema.Types.ObjectId,
        ref: "coll_period",
        require: true
    },
    teacher_id:{
        type: mongooseUniqueValidator.Schema.Types.ObjectId,
        ref: "coll_teacher",
        require: true
    },
    number:{
        type:"Number",
        required: true       
    }
});

/** Schema exportation */
module.exports = groupSchema;
