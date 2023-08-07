'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var hooks_1 = require('./hooks');
var react_native_svg_1 = require('react-native-svg');
var NeedleContent = function (props) {
  var _a = props.radius,
    radius = _a === void 0 ? 100 : _a,
    _b = props.min,
    min = _b === void 0 ? 0 : _b,
    _c = props.max,
    max = _c === void 0 ? 100 : _c,
    markerCircleSize = props.markerCircleSize,
    markerCircleColor = props.markerCircleColor,
    markerPositionY = props.markerPositionY,
    markerPositionX = props.markerPositionX,
    needleBackgroundColor = props.needleBackgroundColor,
    needleColor = props.needleColor,
    needleBorderWidth = props.needleBorderWidth,
    needleHeight = props.needleHeight;
  var _d = (0, hooks_1.useRadialSlider)(props),
    lineCount = _d.lineCount,
    lines = _d.lines;
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    lines.map(function (_value) {
      var activeIndex =
        (((((props === null || props === void 0 ? void 0 : props.value) - min) *
          100) /
          (max - min)) *
          lineCount) /
        100;
      var needleRotation = activeIndex < 50 ? 122 : 119;
      var circleSize = Math.round(radius / markerCircleSize) * 2;
      var dynamicNeedleHeight = (needleHeight / radius) * 100 + 5;
      return react_1.default.createElement(
        react_native_svg_1.G,
        {
          key: _value,
          transform: 'rotate('
            .concat(activeIndex - needleRotation, ', ')
            .concat(radius, ', ')
            .concat(radius, ')'),
          x: markerPositionX,
          y: markerPositionY,
        },
        react_1.default.createElement(react_native_svg_1.Circle, {
          r: circleSize,
          cx: radius,
          cy: radius,
          fill: markerCircleColor,
        }),
        react_1.default.createElement(react_native_svg_1.Polygon, {
          points: '97, 118 103, 118 100, '.concat(dynamicNeedleHeight),
          x: radius - 100,
          y: radius - 100,
          fill: needleBackgroundColor,
          strokeWidth: needleBorderWidth,
          stroke: needleColor,
          strokeLinejoin: 'round',
        })
      );
    })
  );
};
exports.default = NeedleContent;
