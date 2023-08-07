'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var constants_1 = require('../../constants');
var RadialSlider_1 = require('./RadialSlider');
var SpeedoMeter_1 = require('./SpeedoMeter');
var RootSlider = function (props) {
  var variant = props.variant;
  return variant === constants_1.default.speedoMeterMarker ||
    variant === constants_1.default.speedometer
    ? // @ts-ignore
      react_1.default.createElement(SpeedoMeter_1.default, __assign({}, props))
    : react_1.default.createElement(
        RadialSlider_1.default,
        __assign({}, props)
      );
};
exports.default = RootSlider;
