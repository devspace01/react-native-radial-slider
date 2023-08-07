"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_radial_slider_1 = require("react-native-radial-slider");
var VariantCard_1 = require("../../components/VariantCard");
var theme_1 = require("../../theme");
var ActionButton = function (_a) {
    var onPress = _a.onPress, title = _a.title, backgroundColor = _a.backgroundColor;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [
            styles.actionButton,
            {
                backgroundColor: backgroundColor,
            },
        ], onPress: onPress },
        react_1.default.createElement(react_native_1.Text, { style: styles.text }, title)));
};
var SpeedoMeterVariant = function () {
    var _a = (0, react_1.useState)(0), speed = _a[0], setSpeed = _a[1];
    var _b = (0, react_1.useState)(false), isStart = _b[0], setIsStart = _b[1];
    (0, react_1.useEffect)(function () {
        var timerId = setTimeout(handleTime, 1000);
        return function () { return clearTimeout(timerId); };
    });
    var handleTime = function () {
        isStart && setSpeed(function (prev) { return prev + 10; });
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.btnContainer },
            react_1.default.createElement(ActionButton, { backgroundColor: theme_1.Colors.green, title: "Start", onPress: function () { return setIsStart(true); } }),
            react_1.default.createElement(ActionButton, { backgroundColor: theme_1.Colors.red, title: "Stop", onPress: function () { return setIsStart(false); } })),
        react_1.default.createElement(VariantCard_1.default, null,
            react_1.default.createElement(react_native_radial_slider_1.RadialSlider, { variant: 'speedometer', value: speed, min: 0, max: 200, onChange: setSpeed, lineColor: theme_1.Colors.darkGrey, sliderTrackColor: theme_1.Colors.darkGrey })),
        react_1.default.createElement(VariantCard_1.default, null,
            react_1.default.createElement(react_native_radial_slider_1.RadialSlider, { variant: 'speedometer-marker', value: speed, min: 0, max: 200, onChange: setSpeed, lineColor: theme_1.Colors.darkGrey }))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    actionButton: {
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    text: {
        color: theme_1.Colors.white,
        fontWeight: '900',
    },
});
exports.default = SpeedoMeterVariant;
