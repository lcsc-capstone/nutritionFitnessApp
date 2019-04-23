/* Import the Mongoose software module */
var mongoose 			=	require('mongoose');

var Schema              =   mongoose.Schema;

NutritionSchema = new Schema
({
    ID_NUM      : {type: Number, required : true},
    PROTEINS    : {type: Number, required : true},
    CARBS       : {type: Number, required : true},
    FATS        : {type: Number, required : true},
    FIBERS      : {type: Number, required : true},
    CALORIES    : {type: Number, required : true}
});

/* Export model for application usage */
module.exports = mongoose.model('Nutrition', NutritionSchema, 'nutrition');