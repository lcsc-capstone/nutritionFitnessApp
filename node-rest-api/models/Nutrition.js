var mongoose = require('mongoose');

const NutritionSchema = new mongoose.Schema
({
    ID_NUM: {type: Number},
    PROTEINS: {type: Number},
    CARBS: {type: Number},
    FATS: {type: Number},
    FIBERS: {type: Number},
    CALORIES: {type: Number}
});

//export default Nut = mongoose.model('NUTRITION', NutritionSchema);

module.exports = mongoose.model('NUTRITION', NutritionSchema);

//SAVE
/*sudo curl -i -X POST -H "Content-Type: application/json" -d '{ "ID_NUM":777,"PROTEINS":23,"CARBS": 520, "FATS":0.3, "FIBERS":27, "CALORIES":2500}' localhost:3000/nutrition*/

//SEE ALL
//curl -i -H "Accept: application/json" localhost:3000/nutrition

//SEE BY ID
//curl -i -H "Accept: application/json" localhost:3000/nutrition/5cb291f15dc7244ee65d30c0

//EDIT BY ID
//curl -i -X PUT -H "Content-Type: application/json" -d '{"CALORIES":"50000"}' localhost:3000/nutrition/5cb291f15dc7244ee65d30c0

//DELETE BY ID
//curl -i -X DELETE localhost:3000/nutrition/5cb291f15dc7244ee65d30c0
