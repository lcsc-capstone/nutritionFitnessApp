export class Profile{
    ID_NUM: {type: Number};
    LASTNAME: {type: String};
    FIRSTNAME: {type: String};
    PHONE: {type: Number};
    EMAIL: {type: String};
    PASSWORD: {type: String};
    DATE_OF_BIRTH: {type: Date};
    FEET: {type: Number};
    INCHES: {type: Number};
};

export class Exercixe {
    ID_NUM: {type: Number};
    TIME: {type: Number};
    TYPE: {type: String};
    DISTANCE: {type: Number};
};

export class Measurements{
    ID_NUM: {type: Number};
    NECK: {type: Number};
    HIPS: {type: Number};
    THIGHS: {type: Number};
    BELLY: {type: Number};
    BICEP: {type: Number};
};

export class Nutrition{
    ID_NUM: {type: Number};
    PROTEINS: {type: Number};
    CARBS: {type: Number};
    FATS: {type: Number};
    FIBERS: {type: Number};
    CALORIES: {type: Number};
};

export class StatisticsSchema
{
    ID_NUM: {type: Number};
    DATE: {type: Date};
    WEIGHT: {type: Number};
    WEEKLY_AVERAGE: {type: Number};
    DIFFERENCE_TO_PRIOR_WEEK: {type: Number};
    QUESTIONS: {type: String};
};