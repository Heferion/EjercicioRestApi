/** Packages */
const moongose = require("mongoose");

/** Schema creation */
const studentGroupSchema = new moongose.Schema({
    student_id:{
        type: mongooseUniqueValidator.Schema.Types.ObjectId,
        ref: "coll_student",
        require: true
    },
    group_id:{
        type: mongooseUniqueValidator.Schema.Types.ObjectId,
        ref: "coll_group",
        require: true
    }
});

/** Schema exportation */
module.exports = studentGroupSchema;
