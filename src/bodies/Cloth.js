"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var matter_js_1 = require("matter-js");
var BodyObject_1 = require("./BodyObject");
var Location_1 = require("../structures/Location");
var Cloth = /** @class */ (function (_super) {
    __extends(Cloth, _super);
    function Cloth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cloth.initialize = function (location) {
        Cloth.location = new Location_1["default"](200, 200);
    };
    Cloth.create = function () {
        var group = matter_js_1.Body.nextGroup(true); // Creates a non-coliding group
        var particleOptions = {
            friction: Cloth.clothIntersectionSphereFriction,
            collisionFilter: { group: group },
            render: { visible: Cloth.renderWithIntersectionSpheres }
        };
        Cloth.cloth = matter_js_1.Composites.softBody(Cloth.location.x, Cloth.location.y, Cloth.clothGridColumns, Cloth.clothGridRows, Cloth.clothGridGap, Cloth.clothGridGap, false, Cloth.clothIntersectionSphereRadius, particleOptions, {
            stiffness: Cloth.clothStiffness
        });
        return Cloth.cloth;
    };
    Cloth.clothGridColumns = 10;
    Cloth.clothGridRows = 10;
    Cloth.clothIntersectionSphereRadius = 5;
    Cloth.clothGridGap = 1;
    Cloth.clothStiffness = 0.1;
    Cloth.clothIntersectionSphereFriction = 0.00001;
    Cloth.renderWithIntersectionSpheres = true;
    return Cloth;
}(BodyObject_1["default"]));
exports["default"] = Cloth;
