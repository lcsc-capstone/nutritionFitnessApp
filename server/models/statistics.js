/* Import the Mongoose software module */
var mongoose 			=	require('mongoose');

var Schema              =   mongoose.Schema;

StatisticsSchema = new Schema
({
    ID_NUM                      : {type: Number, required : true},
    DATE                        : {type: Date, required : true},
    WEIGHT                      : {type: Number, required : true},
    WEEKLY_AVERAGE              : {type: Number, required : true},
    DIFFERENCE_TO_PRIOR_WEEK    : {type: Number, required : true},
    QUESTIONS                   : {type: String, required : true}
});

/* Export model for application usage */
module.exports = mongoose.model('STATISTICS', StatisticsSchema);