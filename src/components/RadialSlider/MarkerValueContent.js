'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var react_native_svg_1 = require('react-native-svg');
var hooks_1 = require('./hooks');
var MarkerValueContent = function (props) {
  var _a = props.radius,
    radius = _a === void 0 ? 100 : _a,
    _b = props.thumbBorderWidth,
    thumbBorderWidth = _b === void 0 ? 5 : _b,
    _c = props.min,
    min = _c === void 0 ? 0 : _c,
    _d = props.max,
    max = _d === void 0 ? 100 : _d,
    markerValue = props.markerValue,
    _e = props.fixedMarker,
    fixedMarker = _e === void 0 ? false : _e,
    _f = props.markerValueInterval,
    markerValueInterval = _f === void 0 ? 10 : _f,
    value = props.value,
    markerValueColor = props.markerValueColor;
  var _g = (0, hooks_1.useRadialSlider)(props),
    lineHeight = _g.lineHeight,
    lineCount = _g.lineCount,
    angle = _g.angle,
    marks = _g.marks,
    centerValue = _g.centerValue;
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    marks.map(function (mark, index) {
      var _a;
      var markIndex = Math.floor(
        (((((!fixedMarker ? markerValue : value) - min) * 100) / (max - min)) *
          lineCount) /
          100
      );
      var maxCount = lineCount / max;
      var markerInnerValue = Math.round(max / markerValueInterval);
      // if number is below 99(two digit number) then we set -2 for x property in svg Text
      var twoDigitsPositionValue = max < 99 ? -2 : -3;
      var getTransformValue = function () {
        return 'rotate(92) translate('.concat(twoDigitsPositionValue, ')');
      };
      var getTextPositionValue = function (type) {
        if (
          (mark === null || mark === void 0 ? void 0 : mark.value) < centerValue
        ) {
          return type === 'x' ? '0' : '-85';
        } else {
          return type === 'x' ? twoDigitsPositionValue : '-85';
        }
      };
      return react_1.default.createElement(
        react_native_svg_1.G,
        { key: index.toString() },
        (index % markerInnerValue === 0 || index === markIndex) &&
          react_1.default.createElement(
            react_native_svg_1.G,
            {
              transform: 'translate('
                .concat(radius + (lineHeight - thumbBorderWidth), ', ')
                .concat(radius + (lineHeight - thumbBorderWidth), ')  '),
            },
            react_1.default.createElement(react_native_svg_1.Text, {
              transform: 'rotate('
                .concat(index * maxCount + 87 + angle, ')  ')
                .concat(getTransformValue(), ' '),
              x: getTextPositionValue('x'),
              y: getTextPositionValue('y'),
              fill: markerValueColor,
              children:
                (_a =
                  mark === null || mark === void 0 ? void 0 : mark.value) !==
                  null && _a !== void 0
                  ? _a
                  : 0,
            })
          )
      );
    })
  );
};
exports.default = MarkerValueContent;
