/** Packages */
const moongose = require("mongoose");
const Schema= mongoose.Schema;

/** Schema creation */
const studentGroupSchema = new moongose.Schema({
    student_id:{
        type: moongose.Schema.Types.ObjectId,
        ref: "coll_student",
        require: true
    },
    group_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_group",
        require: true
    }
});

/** Schema exportation */
module.exports = studentGroupSchema;
