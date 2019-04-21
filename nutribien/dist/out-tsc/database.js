import * as mongoose from './nutribien/node_modules/mongoose';
var uri = "mongodb+srv://nutri:<bien>@nutrition-fitness-app-dsodq.gcp.mongodb.net/admin?retryWrites=true";
mongoose.createConnection(uri, { useNewUrlParser: true });
var client = mongoose.connection;
client.on('error', console.error.bind(console, 'MongoDB connection error:'));
/*      Possible other way to catch connection errors
client.on("error", function(err)
{
    console.log("connection error:", err);
});*/
client.once("open", function () {
    console.log("database connection successful");
});
var Schema = mongoose.Schema;
export var ProfileSchema = new Schema({
    ID_NUM: { type: Number },
    LASTNAME: { type: String },
    FIRSTNAME: { type: String },
    PHONE: { type: Number },
    EMAIL: { type: String },
    PASSWORD: { type: String },
    DATE_OF_BIRTH: { type: Date },
    FEET: { type: Number },
    INCHES: { type: Number }
});
export var ExercixeSchema = new Schema({
    ID_NUM: { type: Number },
    TIME: { type: Number },
    TYPE: { type: String },
    DISTANCE: { type: Number }
});
export var MeasurementsSchema = new Schema({
    ID_NUM: { type: Number },
    NECK: { type: Number },
    HIPS: { type: Number },
    THIGHS: { type: Number },
    BELLY: { type: Number },
    BICEP: { type: Number }
});
export var NutritionSchema = new Schema({
    ID_NUM: { type: Number },
    PROTEINS: { type: Number },
    CARBS: { type: Number },
    FATS: { type: Number },
    FIBERS: { type: Number },
    CALORIES: { type: Number }
});
export var StatisticsSchema = new Schema({
    ID_NUM: { type: Number },
    DATE: { type: Date },
    WEIGHT: { type: Number },
    WEEKLY_AVERAGE: { type: Number },
    DIFFERENCE_TO_PRIOR_WEEK: { type: Number },
    QUESTIONS: { type: String },
});
var PROFILE = mongoose.model('PROFILE', ProfileSchema);
var EXERCISE = mongoose.model('EXERCISE', ExercixeSchema);
var MEASUREMENTS = mongoose.model('MEASUREMENTS', MeasurementsSchema);
var NUTRITION = mongoose.model('NUTRITION', NutritionSchema);
var STATISTICS = mongoose.model('STATISTICS', StatisticsSchema);
export default { PROFILE: PROFILE, EXERCISE: EXERCISE, MEASUREMENTS: MEASUREMENTS, NUTRITION: NUTRITION, STATISTICS: STATISTICS };
/*
export default { PROFILE} ;
export default EXERCISE;
export default MEASUREMENTS;
export default NUTRITION;
export default STATISTICS;*/ 
//# sourceMappingURL=database.js.map