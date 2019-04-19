/* Import the Mongoose software module */
var mongoose 			=	require('mongoose');

var Schema              =   mongoose.Schema;

ProfileSchema = new Schema
({
    ID_NUM          : {type: Number, required : true},
    LASTNAME        : {type: String, required : true},
    FIRSTNAME       : {type: String, required : true},
    PHONE           : {type: Number, required : true},
    EMAIL           : {type: String, required : true}, 
    PASSWORD        : {type: String, required : true},
    DATE_OF_BIRTH   : {type: Date, required : true},
<<<<<<< HEAD
<<<<<<< HEAD
    CM              : {type: Number, required : true}
=======
    HEIGHT              : {type: Number, required : true}
>>>>>>> parent of 4996192... Update profile.js
=======
    HEIGHT              : {type: Number, required : true}
>>>>>>> parent of 4996192... Update profile.js
});

/* Export model for application usage */
module.exports = mongoose.model('PROFILE', ProfileSchema);