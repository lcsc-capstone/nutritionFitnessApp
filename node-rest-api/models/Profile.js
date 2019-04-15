var mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema
({
    ID_NUM: {type: Number},
    LASTNAME: {type: String},
    FIRSTNAME: {type: String},
    PHONE: {type: Number},
    EMAIL: {type: String}, 
    PASSWORD: {type: String},
    DATE_OF_BIRTH: {type: Date},
    FEET: {type: Number},
    INCHES: {type: Number}
});


module.exports = mongoose.model('PROFILE', ProfileSchema);