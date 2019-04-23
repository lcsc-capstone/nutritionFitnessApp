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
<<<<<<< HEAD
    HEIGHT          : {type: Number, required : true}
=======
    HEIGHT              : {type: Number, required : true}
>>>>>>> parent of d637736... Revert "Merge branch 'lastBranchOMGISwear' of https://github.com/lcsc-capstone/nutritionFitnessApp into lastBranchOMGISwear"
});

/* Export model for application usage */
module.exports = mongoose.model('Profile', ProfileSchema, 'profile');