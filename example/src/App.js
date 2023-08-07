"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var modules_1 = require("./modules");
var theme_1 = require("./theme");
var Tab = function (_a) {
    var index = _a.index, tabLabel = _a.tabLabel, activeTabIndex = _a.activeTabIndex, setActiveTabIndex = _a.setActiveTabIndex;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [
            styles.btnContainer,
            {
                backgroundColor: activeTabIndex == index ? theme_1.Colors.blue : theme_1.Colors.offWhite,
            },
        ], onPress: function () { return setActiveTabIndex(index); } },
        react_1.default.createElement(react_native_1.Text, { style: [
                styles.tabLabel,
                {
                    color: activeTabIndex == index ? theme_1.Colors.white : theme_1.Colors.blue,
                },
            ] }, tabLabel)));
};
var App = function () {
    var _a = (0, react_1.useState)(0), activeTabIndex = _a[0], setActiveTabIndex = _a[1];
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.titleContainer },
            react_1.default.createElement(Tab, { index: 0, tabLabel: "RadialSlider", activeTabIndex: activeTabIndex, setActiveTabIndex: setActiveTabIndex }),
            react_1.default.createElement(Tab, { index: 1, tabLabel: "SpeedoMeter", activeTabIndex: activeTabIndex, setActiveTabIndex: setActiveTabIndex })),
        react_1.default.createElement(react_native_1.View, { style: styles.screenContainer }, activeTabIndex == 0 ? react_1.default.createElement(modules_1.RadialVariant, null) : react_1.default.createElement(modules_1.SpeedoMeterVariant, null))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme_1.Colors.grey,
    },
    radial: {
        marginTop: 100,
    },
    titleContainer: {
        flex: 0.1,
        flexDirection: 'row',
    },
    btnContainer: {
        flex: 0.5,
        height: (0, theme_1.verticalScale)(40),
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenContainer: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabLabel: {
        fontWeight: '800',
    },
});
exports.default = App;
