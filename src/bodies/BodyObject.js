"use strict";
exports.__esModule = true;
var BodyObject = /** @class */ (function () {
    function BodyObject() {
    }
    BodyObject.initialize = function (newLocation) {
        if (!newLocation) {
            throw 'Location was not passed as a parameter into this game object.';
        }
        this.location = newLocation;
    };
    return BodyObject;
}());
exports["default"] = BodyObject;
