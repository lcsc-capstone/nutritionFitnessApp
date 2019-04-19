/* Import the Mongoose software module */
var mongoose 			=	require('mongoose');

var Schema              =   mongoose.Schema;

MeasurementsSchema = new Schema
({
    ID_NUM      : {type: Number, required : true},
    NECK        : {type: Number, required : true},
    HIPS        : {type: Number, required : true},
    THIGHS      : {type: Number, required : true},
    BELLY       : {type: Number, required : true},
    BICEP       : {type: Number, required : true}
});

/* Export model for application usage */
module.exports = mongoose.model('MEASUREMENTS', MeasurementsSchema);