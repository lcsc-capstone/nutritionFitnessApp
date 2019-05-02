/* Import the Mongoose software module */
var mongoose 			=	require('mongoose');

var Schema              =   mongoose.Schema;

ExercixeSchema = new Schema
({
    ID_NUM      : {type: Number, required : true},
    TIME        : {type: Number, required : true},
    SPORT        : {type: String, required : true},
    DISTANCE    : {type: Number, required : false},
    CALORIES    : {type: Number, required : true},
    DATE        : {type: String, required : true}
});

/* Export model for application usage */
module.exports = mongoose.model('Workout', ExercixeSchema, 'workout');