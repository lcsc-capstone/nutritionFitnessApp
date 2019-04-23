/* Import the Mongoose software module */
var mongoose 			=	require('mongoose');

var Schema              =   mongoose.Schema;

ProfileSchema = new Schema
({
    ID_NUM          : {type: Number, required : true},
    FIRSTNAME       : {type: String, required : true},
    LASTNAME        : {type: String, required : true},
    PHONE           : {type: Number, required : true},
    EMAIL           : {type: String, required : true}, 
    PASSWORD        : {type: String, required : true},
    DATE_OF_BIRTH   : {type: Date, required : true},
    HEIGHT              : {type: Number, required : true}
});

/* Export model for application usage */
module.exports = mongoose.model('PROFILE', ProfileSchema);
