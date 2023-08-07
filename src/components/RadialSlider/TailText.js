'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var react_native_svg_1 = require('react-native-svg');
var hooks_1 = require('./hooks');
var theme_1 = require('../../theme');
var TailText = function (props) {
  var unit = props.unit,
    min = props.min,
    max = props.max;
  var _a = (0, hooks_1.useRadialSlider)(props),
    startPoint = _a.startPoint,
    endPoint = _a.endPoint;
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement(
      react_native_svg_1.G,
      { transform: 'translate('.concat(-20, ', ').concat(40, ')') },
      react_1.default.createElement(
        react_native_svg_1.Text,
        { fill: theme_1.Colors.darkCharcoal, fontSize: 12 },
        react_1.default.createElement(
          react_native_svg_1.TSpan,
          { x: startPoint.x, y: startPoint.y },
          ''.concat(min, ' ').concat(unit)
        )
      )
    ),
    react_1.default.createElement(
      react_native_svg_1.G,
      { transform: 'translate('.concat(-10, ', ').concat(40, ')') },
      react_1.default.createElement(
        react_native_svg_1.Text,
        { fill: theme_1.Colors.darkCharcoal, fontSize: 12 },
        react_1.default.createElement(
          react_native_svg_1.TSpan,
          { x: endPoint.x, y: endPoint.y },
          ''.concat(max, ' ').concat(unit)
        )
      )
    )
  );
};
exports.default = TailText;
