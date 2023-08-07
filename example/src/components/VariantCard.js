"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = require("react");
var theme_1 = require("../../../src/theme");
var VariantCard = function (props) { return (react_1.default.createElement(react_native_1.View, { style: styles.container }, props.children)); };
exports.default = VariantCard;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        marginTop: (0, theme_1.verticalScale)(5),
    },
});
