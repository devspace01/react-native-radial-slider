"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metrics = exports.moderateScale = exports.verticalScale = exports.horizontalScale = void 0;
var react_native_1 = require("react-native");
var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
//Guideline sizes are based on standard ~5" screen mobile device
var guidelineBaseWidth = 375;
var guidelineBaseHeight = 812;
var horizontalScale = function (size) { return (width / guidelineBaseWidth) * size; };
exports.horizontalScale = horizontalScale;
var verticalScale = function (size) { return (height / guidelineBaseHeight) * size; };
exports.verticalScale = verticalScale;
var moderateScale = function (size, factor) {
    if (factor === void 0) { factor = 0.5; }
    return size + (horizontalScale(size) - size) * factor;
};
exports.moderateScale = moderateScale;
// Used via Metrics.baseMargin
var Metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
};
exports.Metrics = Metrics;
