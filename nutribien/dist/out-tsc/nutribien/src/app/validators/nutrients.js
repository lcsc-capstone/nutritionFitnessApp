var NutrientsValidator = /** @class */ (function () {
    function NutrientsValidator() {
    }
    NutrientsValidator.isValid = function (control) {
        if (isNaN(control.value)) {
            return {
                "not a number": true
            };
        }
        if (control.value < 0) {
            return {
                "no negative values allowed": true
            };
        }
        if (control.value > 1000) {
            return {
                "not realistic": true
            };
        }
        return null;
    };
    return NutrientsValidator;
}());
export { NutrientsValidator };
//# sourceMappingURL=nutrients.js.map