"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_radial_slider_1 = require("react-native-radial-slider");
var theme_1 = require("../../theme");
var VariantCard_1 = require("../../components/VariantCard");
var RadialVariant = function () {
    var _a = (0, react_1.useState)(0), speed = _a[0], setSpeed = _a[1];
    var _b = (0, react_1.useState)(0), circleSliderSpeed = _b[0], setCircleSliderSpeed = _b[1];
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(VariantCard_1.default, null,
            react_1.default.createElement(react_native_radial_slider_1.RadialSlider, { value: speed, min: 0, max: 200, onChange: setSpeed, lineColor: theme_1.Colors.darkGrey, sliderTrackColor: theme_1.Colors.darkGrey })),
        react_1.default.createElement(VariantCard_1.default, null,
            react_1.default.createElement(react_native_radial_slider_1.RadialSlider, { variant: 'radial-circle-slider', value: circleSliderSpeed, min: 0, max: 200, lineColor: theme_1.Colors.darkGrey, sliderTrackColor: theme_1.Colors.darkGrey, onChange: setCircleSliderSpeed }))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
exports.default = RadialVariant;
