/* Import the Mongoose software module */
var mongoose 			=	require('mongoose');

var Schema              =   mongoose.Schema;

ExercixeSchema = new Schema
({
    ID_NUM      : {type: Number, required : true},
    TIME        : {type: Number, required : true},
    TYPE        : {type: String, required : true},
    DISTANCE    : {type: Number, required : true}
});

/* Export model for application usage */
module.exports = mongoose.model('EXERCISE', ExercixeSchema);