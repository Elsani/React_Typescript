"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.getPoints = function () {
        console.log("A triangle has ".concat(this.points, " points"));
    };
    Triangle.prototype.setPoints = function (points) {
        this.points = points;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.getPoints = function () {
        console.log("A triangle has ".concat(this.points, " points"));
    };
    Square.prototype.setPoints = function (points) {
        this.points = points;
    };
    return Square;
}());
exports.Square = Square;
