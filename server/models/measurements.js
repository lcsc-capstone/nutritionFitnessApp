/* Import the Mongoose software module */
var mongoose 			=	require('mongoose');

var Schema              =   mongoose.Schema;

MeasurementsSchema = new Schema
({
    ID_NUM      : {type: Number, required : true},
    NECK        : {type: Number, required : true},
    HIP         : {type: Number, required : true},
    THIGH       : {type: Number, required : true},
    BELLY       : {type: Number, required : true},
    BICEP       : {type: Number, required : true},
    DATE        : {type: String, required : true}
});

/* Export model for application usage */
module.exports = mongoose.model('Measurements', MeasurementsSchema, 'measurements');